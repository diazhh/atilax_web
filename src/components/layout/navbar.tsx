import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const links = [
  { name: "Productos", href: "/#productos" },
  { name: "Historiador", href: "/productos/historiador" },
  { name: "Videos", href: "/videos" },
  { name: "Demos", href: "/demos" },
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
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium hover:text-primary">
              {l.name}
            </Link>
          ))}
          <Link href="/demos" className="btn btn-primary">
            Probar los demos
          </Link>
        </nav>
        {/* Móvil: <details> nativo, sin JS. */}
        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer p-2" aria-label="Abrir menú">
            <Menu className="h-6 w-6" />
          </summary>
          <nav className="absolute right-0 top-12 flex w-56 flex-col border bg-white">
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
