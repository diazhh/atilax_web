import Link from "next/link";
import Image from "next/image";
import { productos } from "@/lib/productos";

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-sm text-slate-300">
      <div className="container-lg grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <Image src="/images/logos/Logotipo Atilax Blanco.png" alt="ATILAX" width={130} height={38} />
          <p>Software industrial propio para petróleo y gas. Un producto de CONTROLTECH.</p>
          <p>VENECORR NDT lleva la suite ATILAX al mercado.</p>
          <Image src="/images/logos/venecorr-blanco.svg" alt="VENECORR" width={120} height={37} />
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Productos</p>
          {productos.map((p) => (
            <Link key={p.slug} href={`/productos/${p.slug}`} className="block hover:text-white">
              {p.nombre}
            </Link>
          ))}
          <Link href="/productos/historiador" className="block hover:text-white">ATILAX Historiador</Link>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Contacto</p>
          <a href="mailto:info@atilax.io" className="block hover:text-white">info@atilax.io</a>
          <Link href="/demos" className="block hover:text-white">Demos en vivo</Link>
          <Link href="/videos" className="block hover:text-white">Lista de reproducción</Link>
          <Link href="/contacto" className="block hover:text-white">Escríbanos</Link>
        </div>
      </div>
      <div className="container-lg mt-10 border-t border-slate-700 pt-6 text-xs text-slate-400">
        © {new Date().getFullYear()} ATILAX · CONTROLTECH. Las cifras de las capturas y los demos son de demostración.
      </div>
    </footer>
  );
}
