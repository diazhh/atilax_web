"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Soluciones",
    href: "/soluciones",
    children: [
      {
        name: "Industria Petrolera",
        href: "/soluciones/petrolera",
        description: "Pozos, estaciones y tanques"
      },
      {
        name: "Infraestructura y Edificaciones",
        href: "/soluciones/infraestructura",
        description: "Residenciales, comerciales y servicios"
      },
      {
        name: "Mineria",
        href: "/soluciones/mineria",
        description: "Operaciones y procesamiento"
      },
      {
        name: "Agroindustria",
        href: "/soluciones/agroindustria",
        description: "Riego y maquinaria agricola"
      },
      {
        name: "Puertos y Logistica",
        href: "/soluciones/puertos",
        description: "Terminales y almacenamiento"
      },
      {
        name: "Zonas Industriales",
        href: "/soluciones/industria",
        description: "Manufactura y parques"
      },
      {
        name: "Gestion de Flota",
        href: "/soluciones/flota",
        description: "GPS y control vehicular"
      },
      {
        name: "Seguridad con IA",
        href: "/soluciones/seguridad",
        description: "Vigilancia perimetral"
      },
    ],
  },
  { name: "Plataforma", href: "/plataforma" },
  { name: "Empresa", href: "/empresa" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const showTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
      )}
    >
      <nav className="container-lg">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={showTransparent ? "/images/logos/Logotipo Atilax Blanco.png" : "/images/logos/Logotipo Atilax negro.png"}
              alt="ATILAX"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      showTransparent
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      pathname === item.href
                        ? showTransparent
                          ? "text-white bg-white/10"
                          : "text-primary bg-muted"
                        : showTransparent
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Megamenu */}
                <AnimatePresence>
                  {item.children && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-border p-4 min-w-[480px]">
                        <div className="grid grid-cols-2 gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                "block px-4 py-3 rounded-lg transition-colors",
                                pathname === child.href
                                  ? "bg-primary text-white"
                                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
                              )}
                            >
                              <div className="font-medium text-sm">{child.name}</div>
                              <div className={cn(
                                "text-xs mt-0.5",
                                pathname === child.href ? "text-white/70" : "text-muted-foreground"
                              )}>
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Link
                            href="/soluciones"
                            className="text-sm text-primary font-medium hover:underline"
                          >
                            Ver todas las soluciones →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://panel.atilax.io"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                showTransparent
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              )}
            >
              Acceder
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link href="/contacto">
              <Button
                className={cn(
                  "font-semibold",
                  showTransparent
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Solicitar Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={showTransparent ? "text-white" : "text-foreground"}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b">
                  <Image
                    src="/images/logos/Logotipo Atilax negro.png"
                    alt="ATILAX"
                    width={120}
                    height={35}
                    className="h-7 w-auto"
                  />
                </div>
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div className="space-y-1">
                          <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                            {item.name}
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                "block px-4 py-2.5 text-sm rounded-lg transition-colors ml-2",
                                pathname === child.href
                                  ? "bg-primary text-white"
                                  : "text-foreground hover:bg-muted"
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                            pathname === item.href
                              ? "bg-primary text-white"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="p-4 border-t space-y-2">
                  <a
                    href="https://panel.atilax.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-lg border hover:bg-muted transition-colors"
                  >
                    Acceder a la Plataforma
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link href="/contacto" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full bg-primary">Solicitar Demo</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
