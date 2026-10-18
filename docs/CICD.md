# CI/CD — atilax_web

Normas comunes del VPS 144: `diazhh/balancin` → `deploy/ci/README-144.md`. En el 144 vive el ERP de ACE
(producción): nada de lo de aquí lo toca.

## Ramas
`dev` → `stage` → `main`. **main = producción** (atilax.io). Se trabaja en `dev`, se promueve por PR a
`stage` y luego a `main`. No hay protección de ramas (exige GitHub Pro): la disciplina es manual.

## CI
`.github/workflows/ci.yml`, en push y PR a las tres ramas: `npm ci`, lint, typecheck (`tsc --noEmit`) y build.
Corre en el runner propio del 144 (`runs-on: [self-hosted, webhh-ci]`); los jobs alojados de GitHub no
arrancan (la cuenta no tiene cobro).

Runner: usuario `ci-webhh` (sin sudo, fuera del grupo docker, docker rootless, techo 6 CPU / 10 GB en
`user-<uid>.slice`). Dos runners bajo ese usuario, uno por repo:
| Repo | Runner | Carpeta | Servicio de usuario |
|---|---|---|---|
| atilax_web | `vps144-webhh` | `~/actions-runner` | `gh-runner.service` |
| venecorr_web | `vps144-webhh-venecorr` | `~/actions-runner-venecorr` | `gh-runner-venecorr.service` |

Estado: `sudo -iu ci-webhh env XDG_RUNTIME_DIR=/run/user/$(id -u ci-webhh) systemctl --user status gh-runner gh-runner-venecorr`.
Re-registrar el primero: `RUNNER_TOKEN=… CI_USER=ci-webhh REPO_URL=https://github.com/diazhh/atilax_web LABELS=webhh-ci RUNNER_NAME=vps144-webhh bash /root/runner_144.sh`
(token: `gh api -X POST repos/diazhh/<repo>/actions/runners/registration-token -q .token`, dura 1 h).

## Despliegue (manual, tras CI verde en main)
Sitio en el host del 144, pm2 `atilax-web`, `127.0.0.1:3020`, detrás de haproxy. Puerto reservado en la tabla del
README-144. El despliegue automático espera el script de root acotado por sudoers que las normas dejan pendiente.

```bash
ssh 144 'set -e; cd /var/proyectos/atilax_web
  git rev-parse HEAD > .deploy-anterior          # para volver atrás
  git fetch -q origin main && git checkout -q main && git merge -q --ff-only origin/main
  npm ci --no-audit --no-fund && npm run build
  pm2 restart atilax-web --update-env'
curl -s -o /dev/null -w "%{http_code}\n" https://atilax.io/     # 200
```
Sólo se reinicia `atilax-web`; nunca `pm2 restart all`.

## Volver atrás
```bash
ssh 144 'set -e; cd /var/proyectos/atilax_web; git checkout -q $(cat .deploy-anterior) && npm ci --no-audit --no-fund && npm run build && pm2 restart atilax-web'
```
Luego revertir en GitHub (`git revert`) para que main vuelva a coincidir con lo desplegado.

## Proceso pm2 (con topes de reinicio)
Definido en `ecosystem.config.cjs`: `max_restarts: 10`, `min_uptime: 30s`, backoff exponencial y
`max_memory_restart: 512M`. Si falla al arrancar, queda en `errored` en vez de entrar en bucle.
Recrearlo (p. ej. tras cambiar el ecosystem):
```bash
ssh 144 'cd /var/proyectos/atilax_web && pm2 delete atilax-web; pm2 start ecosystem.config.cjs && pm2 save'
```
Si queda `errored`: `pm2 logs atilax-web --lines 50`, arreglar y `pm2 restart atilax-web`.

## Webhook viejo, DESACTIVADO (2026-10-18)
`diazhh/atilax_web` tenía un webhook (id 598437521) hacia el `erp-webhook` del 144
(`/var/proyectos/erp/deploy-config.yml`, que es del ERP de ACE y no se toca). En cada push a main hacía
`npm install --production` y `pm2 restart` **sin build**: borraba TypeScript/Tailwind, y el siguiente
`next build` instaló TypeScript 7 con yarn y tumbó la web ~20 min. Quedó con `active=false` en GitHub
(no borrado). El único despliegue es el manual de arriba. No reactivarlo sin cambiar antes sus pasos
(que haga `npm ci` y `npm run build`), y eso hay que pedírselo a la sesión del ERP.
