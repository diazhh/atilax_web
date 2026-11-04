import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { suitePorGrupo } from "@/lib/productos";
import { LogoProducto } from "@/components/shared/logo-producto";

const links = [
  { name: "Demos", href: "/demos" },
  { name: "Vídeos", href: "/videos" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-lg flex h-[72px] items-center gap-8">
        <Link href="/" aria-label="ATILAX, inicio">
          <Image src="/images/logos/Logotipo Atilax.png" alt="ATILAX" width={140} height={41} priority />
        </Link>
        <div className="flex-1" />
        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <Link href="/#productos" className="text-[15px] font-medium hover:text-primary">
              Productos
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[960px] -translate-x-1/2 pt-5 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-4 gap-6 border bg-white p-6 shadow-lg">
                {suitePorGrupo().map(({ grupo, items }) => (
                  <div key={grupo} className="space-y-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{grupo}</p>
                    {items.map((i) => {
                      const cuerpo = (
                        <>
                          <LogoProducto slug={i.slug} tono="color" ancho={120} />
                          <span className="mt-1 block text-sm text-slate-600">{i.linea}</span>
                          {i.etiqueta && (
                            <span className="mt-1 inline-block border px-2 py-0.5 text-xs font-medium text-slate-500">{i.etiqueta}</span>
                          )}
                        </>
                      );
                      return i.href ? (
                        <Link key={i.slug} href={i.href} className="block hover:opacity-80">{cuerpo}</Link>
                      ) : (
                        <div key={i.slug}>{cuerpo}</div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium hover:text-primary">
              {l.name}
            </Link>
          ))}
          <Link href="/demos" className="btn btn-primary">
            Probar demo
          </Link>
        </nav>
        {/* Móvil: <details> nativo, sin JS. */}
        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer p-2" aria-label="Abrir menú">
            <Menu className="h-6 w-6" />
          </summary>
          <nav className="absolute right-0 top-12 flex max-h-[80vh] w-64 flex-col overflow-y-auto border bg-white">
            {suitePorGrupo().map(({ grupo, items }) => (
              <div key={grupo} className="border-b px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{grupo}</p>
                {items.map((i) =>
                  i.href ? (
                    <Link key={i.slug} href={i.href} className="block py-1.5 font-medium">{i.nombre}</Link>
                  ) : (
                    <p key={i.slug} className="py-1.5 text-slate-500">{i.nombre} · {i.etiqueta}</p>
                  ),
                )}
              </div>
            ))}
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="border-b px-4 py-3 font-medium last:border-0">
                {l.name}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
