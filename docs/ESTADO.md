# Estado de web_hh (atilax.io + venecorr.com) — 2026-10-25

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

- **ATILAX Historiador** (22-10): `/productos/historiador` y `/videos` (lista de reproducción), en producción.
  También en venecorr.com `/historiador` (sólo español).
- **Carpeta de medios compartida**: `/var/proyectos/medios/` en el 144 (`web_hh/medios/` en la Mac, fuera de git).
  atilax.io y venecorr.com la sirven en `/medios/...` con una ruta que lee del disco (Range; `src/lib/servir-archivo.ts`):
  un archivo nuevo se ve sin recompilar. La misma URL sirve a las apps de TV y tablet. Estructura `medios/<producto>/`:
  `historiador/` (mp4 + póster + .vtt) y, desde el 25-10 (rama dev), TODOS los mp4 de las webs (tankos, wellos,
  liftos, calentadores, venecorr, tecnologia), que salen de `venecorr_web/public/video`. Los pósters viejos siguen
  en `public/images`. Los de la TV siguen en `venecorr_web/public/uploads/tv` (su catálogo guarda la URL en la BD:
  migrarlos se hace con la sesión de TV).
  **Al desplegar esa rama, ANTES del build**, en el 144:
  `cd /var/proyectos && for f in venecorr_web/public/video/*.mp4; do p=$(basename $f | sed 's/-.*//'); mkdir -p medios/$p; cp -n $f medios/$p/; done`
  (copia, no mueve: el sitio viejo sigue sirviendo /video hasta que arranque el nuevo; luego se puede borrar).

## Qué sigue
1. (hecho) TankOS publicado.
2. Respuesta de María: cargar proyectos en la BD de venecorr (admin `/admin/proyectos`), fotos sin EXIF,
   recortadas; cambiar Geomembrana (stock) e Incendio si sus fotos no son nuestras.
3. Decidir con Héctor: ¿quitar la clave de WellOS de /demos (su login ya la trae)?
4. Pendientes menores: (hecho 25-10, en dev) el enlace muerto del correo de confirmación ahora lleva al Historiador y /videos; venecorr-web sólo en
   loopback. Causa (25-10, reproducida en local): Next arma `req.url` con `localhost`; si escucha en
   `127.0.0.1`, toma el rewrite `/x → /es/x` de `src/proxy.ts` como EXTERNO, lo reenvía por HTTP, el segundo pase
   llega como `/es/x` y el proxy lo redirige (308 en bucle; en prod, EPROTO a https://localhost). Con `-H localhost`
   funciona, pero en el 144 `localhost` = `::1` y haproxy va a `127.0.0.1:3022`. Salidas: (a) `-H localhost` +
   haproxy a `[::1]:3022` (cambio de haproxy: con Héctor), o (b) pasar el rewrite de idioma a `rewrites()` de
   next.config (siempre interno). Mientras, ufw cierra el 3022;
   «1 error during load» en `/reload-plugins` sin revisar (no es guardia-envios).

## Preguntas para Héctor (25-10)
1. **¿Despliego atilax.io y venecorr.com desde `dev`?** (CI verde en los dos). Trae: venecorr `/historiador` (sólo
   español) + menú + bloque 04 en Tecnología; `/medios` en las dos webs; todos los mp4 de las webs desde `/medios`;
   correo de contacto sin el panel retirado. Antes del build hay que copiar los mp4 del 144 a `/var/proyectos/medios/`
   (comando arriba). venecorr se cae unos segundos al reiniciar.
2. **¿Muevo los vídeos de la TV/tablet (`public/uploads/tv`, 593 MB) a `/medios`?** Toca las URL guardadas en la BD
   del catálogo de TV: lo haría coordinado con la sesión de TV.
3. **Bind de venecorr-web a loopback**: ¿opción (a) haproxy a `[::1]:3022` + `-H localhost`, o (b) mover el rewrite de
   idioma a `next.config`? (ver «Pendientes menores»).
4. **Historiador en en/pt/it**: ¿se traduce la página ya, o se espera a los vídeos en inglés?
5. (de antes) ¿Quitar la clave de WellOS de /demos?
