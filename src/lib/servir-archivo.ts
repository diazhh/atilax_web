/**
 * Sirve un archivo de una carpeta del disco, con Range. Copia de venecorr_web/src/lib/servir-archivo.ts;
 * aquí lo usa /medios (carpeta compartida con venecorr.com y las apps de TV y tablet).
 *
 * `next start` sólo sirve los archivos de public/ que existían al compilar: leer del disco en cada
 * petición hace que lo que se añade después se vea sin recompilar.
 */
import { createReadStream } from "fs";
import { stat } from "fs/promises";
import { extname, join, resolve, sep } from "path";
import { Readable } from "stream";

const TIPOS: Record<string, string> = {
  ".mp4": "video/mp4",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".vtt": "text/vtt; charset=utf-8",
};

export async function servirArchivo(base: string, req: Request, segs: string[], head: boolean) {
  const file = resolve(join(base, ...segs));
  if (!file.startsWith(base + sep)) return new Response("Not found", { status: 404 });
  const info = await stat(file).catch(() => null);
  if (!info?.isFile()) return new Response("Not found", { status: 404 });

  const size = info.size;
  const headers: Record<string, string> = {
    "Content-Type": TIPOS[extname(file).toLowerCase()] ?? "application/octet-stream",
    "Accept-Ranges": "bytes",
    "Last-Modified": info.mtime.toUTCString(),
    // Las URL llevan ?v=<timestamp> al reemplazar un archivo: se pueden cachear.
    "Cache-Control": "public, max-age=86400",
  };

  let start = 0;
  let end = size - 1;
  let status = 200;
  const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get("range") ?? "");
  if (m && (m[1] || m[2])) {
    if (m[1]) {
      start = Number(m[1]);
      if (m[2]) end = Math.min(Number(m[2]), size - 1);
    } else {
      start = Math.max(0, size - Number(m[2]));
    }
    if (start > end || start >= size) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }
    status = 206;
    headers["Content-Range"] = `bytes ${start}-${end}/${size}`;
  }
  headers["Content-Length"] = String(end - start + 1);

  if (head) return new Response(null, { status, headers });
  const body = Readable.toWeb(createReadStream(file, { start, end })) as ReadableStream;
  return new Response(body, { status, headers });
}
