import Image from "next/image";
import { suite } from "@/lib/productos";

const NOMBRES: Record<string, string> = Object.fromEntries(suite.map((i) => [i.slug, i.nombre]));

/** Logo horizontal del producto. "color" sobre fondo claro, "blanco" sobre oscuro. Ancho mínimo 120. */
export function LogoProducto({ slug, tono, ancho = 160 }: { slug: string; tono: "color" | "blanco"; ancho?: number }) {
  const w = Math.max(120, ancho);
  return (
    <Image
      src={`/images/productos/logos/${slug}-horizontal-${tono}.svg`}
      alt={NOMBRES[slug] ?? `ATILAX ${slug}`}
      width={w}
      height={0}
      style={{ width: w, height: "auto" }}
    />
  );
}
