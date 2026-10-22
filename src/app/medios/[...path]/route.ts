/**
 * Carpeta de medios COMPARTIDA (vídeos, pósters, subtítulos): la misma en disco para atilax.io,
 * venecorr.com y las apps de TV y tablet. Cada archivo está una sola vez y se publica sin recompilar.
 */
import { resolve } from "path";
import { servirArchivo } from "@/lib/servir-archivo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Junto a las webs: /var/proyectos/medios en el 144, web_hh/medios en la Mac.
const BASE = process.env.MEDIOS_DIR || resolve(process.cwd(), "..", "medios");

type Ctx = { params: Promise<{ path: string[] }> };

export async function GET(req: Request, { params }: Ctx) {
  return servirArchivo(BASE, req, (await params).path, false);
}

export async function HEAD(req: Request, { params }: Ctx) {
  return servirArchivo(BASE, req, (await params).path, true);
}
