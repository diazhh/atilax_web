import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  industrias: [
    { name: "Industria Petrolera", href: "/soluciones/petrolera" },
    { name: "Infraestructura Critica", href: "/soluciones/infraestructura" },
    { name: "Mineria", href: "/soluciones/mineria" },
    { name: "Agroindustria", href: "/soluciones/agroindustria" },
    { name: "Puertos y Logistica", href: "/soluciones/puertos" },
    { name: "Zonas Industriales", href: "/soluciones/industria" },
  ],
  soluciones: [
    { name: "Simulador Interactivo", href: "/soluciones/simulador" },
    { name: "Gestion de Flota", href: "/soluciones/flota" },
    { name: "Seguridad con IA", href: "/soluciones/seguridad" },
    { name: "Monitoreo de Activos", href: "/plataforma" },
    { name: "Todas las Soluciones", href: "/soluciones" },
  ],
  empresa: [
    { name: "Plataforma", href: "/plataforma" },
    { name: "Nosotros", href: "/empresa" },
    { name: "Contacto", href: "/contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/Logotipo Atilax Blanco.png"
                alt="ATILAX"
                width={150}
                height={45}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Plataforma IoT para la industria. Monitoreo inteligente de activos,
              flota y seguridad perimetral con inteligencia artificial.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@atilax.io"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@atilax.io
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4" />
                Soporte 24/7
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4" />
                Venezuela
              </div>
            </div>

            {/* Platform Access */}
            <a
              href="https://panel.atilax.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
            >
              Acceder a la Plataforma
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industrias</h4>
            <ul className="space-y-3">
              {footerLinks.industrias.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-3">
              {footerLinks.soluciones.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & CTA */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-secondary/90 transition-colors"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Technology Partner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
          <span className="text-xs text-white/40 uppercase tracking-wider">Desarrollado por</span>
          <Image
            src="/images/logos/ControlTech B.png"
            alt="ControlTech"
            width={120}
            height={35}
            className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} ATILAX by ControlTech. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white transition-colors">
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
