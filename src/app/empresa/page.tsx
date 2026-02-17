import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Award, Users, Eye } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conozca ATILAX: expertos en tecnología IoT para la industria petrolera venezolana. Conocimiento local, tecnología global.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de resolver desafíos con tecnología.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Conocimiento petrolero profundo combinado con experiencia en IoT.",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "El éxito de nuestros clientes es nuestra prioridad.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Sin vendor lock-in, APIs abiertas. Sus datos son suyos.",
  },
];

const stats = [
  { value: "+5,000", label: "Instalaciones IoT globales" },
  { value: "24/7", label: "Soporte técnico" },
  { value: "100%", label: "Equipo en Venezuela" },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHeader
        title="Empresa"
        description="Expertos en tecnología IoT para la industria petrolera venezolana. Conocimiento local, tecnología global."
        badge="Nosotros"
      />

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nuestra Misión
              </h2>
              <p className="text-muted-foreground mb-6">
                Transformar la industria petrolera venezolana mediante la implementación
                de tecnología IoT de clase mundial, permitiendo a nuestros clientes
                tomar decisiones basadas en datos, optimizar sus operaciones y
                maximizar su rentabilidad.
              </p>
              <p className="text-muted-foreground">
                Creemos que la digitalización de las operaciones petroleras no es
                un lujo, sino una necesidad para mantenerse competitivo. Por eso
                desarrollamos soluciones accesibles, adaptadas a las condiciones
                locales y respaldadas por soporte técnico de primer nivel.
              </p>
            </div>
            <div>
              <Image
                src="/images/capturas/monitoreo/01_monitoreo_mosaico_63_pozos.png"
                alt="Centro de monitoreo ATILAX - 63 pozos en tiempo real"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-white">
        <div className="container-lg">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground">
              Los principios que guían cada decisión y acción en ATILAX.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why ATILAX */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/capturas/optimizacion/01_optimizacion_waterfall.png"
                alt="Resultados de optimizacion ATILAX - Waterfall de produccion"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Por qué ATILAX?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Diseñado para Venezuela",
                    desc: "Adaptado a pozos BCP, crudos pesados y condiciones de la Faja del Orinoco.",
                  },
                  {
                    title: "Tecnología Probada",
                    desc: "Plataforma IoT madura con mas de 5,000 instalaciones en 100+ paises.",
                  },
                  {
                    title: "Soporte Local",
                    desc: "Equipo técnico con conocimiento del sector petrolero nacional.",
                  },
                  {
                    title: "Energía Autónoma",
                    desc: "Soluciones con paneles solares para instalaciones remotas.",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Conozca cómo ATILAX puede transformar su operación petrolera.
          </p>
          <Link href="/contacto">
            <Button size="lg">
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
