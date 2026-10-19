# Estado de web_hh (atilax.io + venecorr.com) — 2026-10-18

Punto seguro: todo commiteado y en origin (atilax_web, venecorr_web, claude-mods). Nada corre en la Mac.

## Hecho
- **atilax.io** rehecha (mock aprobado en `design/gui/`): home, `/productos/[slug]` (WellOS, TankOS,
  LiftOS, ERP) y `/demos`. Fuente única: `src/lib/productos.ts`. pm2 `atilax-web` en 127.0.0.1:3020 con
  topes de reinicio (`ecosystem.config.cjs`). Webhook viejo de autodespliegue DESACTIVADO (ver `CICD.md`).
- **/demos**: un demo es «vivo» sólo con usuario de solo lectura creado y probado (entra, ve, escribir → 403).
  - WellOS — vivo. `visor@atilax.io` / `Visor-WellOS-2026` (field-iot la rota; su /login ya la trae escrita).
    haproxy `wellos_web` → 127.0.0.1:14110 y DNS A proxied aplicados el 18-10 (respaldo
    `/root/backups/haproxy.cfg.pre-wellos-20261018-130252`).
  - LiftOS — vivo. `visor` / `h7gjr6-xhge5j-demo` (rol nuevo en balancin, 162dd648). Demo DETENIDO: necesita
    START de Héctor. Cualquiera puede pulsar STOP INMEDIATO (diseño de seguridad).
  - TankOS — vivo (18-10). `https://tankos.atilax.io` (no tk.atilax.io, que apunta al 147), `visor` / `visor-tankos`,
    ya escritos en su login. Escrituras de custodia, laboratorio, alarmas, ingeniería y admin → 403.
  - ERP — en activación por decisión de Héctor: el rol «Demo / Visitante» (demo/demo123) tiene rutas de
    escritura sin `authorize` (p. ej. requisiciones). No se publica hasta cerrarlas en su repo.
- **venecorr.com**: enlace «Probar el demo en vivo» (4 idiomas) a atilax.io/demos; fotos propias en Obras
  metalmecánicas y fondo de Proyectos; captura de TankOS en Desarrollo y tecnología; proyecto Río Neverí
  movido a `obras-metalmecanicas` en la BD (respaldo de la fila en `/root/backups/`). pm2 con topes.
- **Correo a María Viñoles** (mariav@venecorr.com) ENVIADO el 18-10: pide proyectos (datos + 4–10 fotos +
  autorización) y fotos reales de Geomembrana, Metalmecánica, Tecnología, Incendio y Protección catódica.
  Queda un borrador duplicado en Borradores (borrable).
- **CI/CD**: ramas dev/stage/main, runners `vps144-webhh` y `vps144-webhh-venecorr` (usuario ci-webhh) y
  guía en `docs/CICD.md` de cada repo.
- **guardia-envios 0.2.0** (claude-mods): en Cloudroom pide «ENVIAR <código>» escrito por la persona.

## Qué sigue
1. (hecho) TankOS publicado.
2. Respuesta de María: cargar proyectos en la BD de venecorr (admin `/admin/proyectos`), fotos sin EXIF,
   recortadas; cambiar Geomembrana (stock) e Incendio si sus fotos no son nuestras.
3. Decidir con Héctor: ¿quitar la clave de WellOS de /demos (su login ya la trae)?
4. Pendientes menores: enlace muerto al panel retirado en el correo de confirmación de
   `src/app/api/contact/route.ts` (el guardia de producción bloqueó la edición por bash); venecorr-web sólo en
   127.0.0.1 (su middleware `src/proxy.ts` falla con `-H 127.0.0.1`; ufw ya cierra el 3022);
   «1 error during load» en `/reload-plugins` sin revisar (no es guardia-envios).
