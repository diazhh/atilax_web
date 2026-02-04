import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Estaciones de Flujo",
  description:
    "Monitoreo integral de estaciones de flujo, múltiples de producción, separadores y tanques de almacenamiento.",
};

const components = [
  {
    title: "Múltiples de Producción",
    description: "Control de válvulas y enrutamiento de flujo desde cada pozo.",
    features: ["Estado de válvulas", "Presiones de línea", "Control de enrutamiento"],
  },
  {
    title: "Separadores",
    description: "Supervisión de separadores bifásicos y trifásicos.",
    features: ["Niveles de interfase", "Presión de operación", "Temperatura"],
  },
  {
    title: "Tanques",
    description: "Control de nivel e inventario en tiempo real.",
    features: ["Medición de nivel", "Volumen calculado", "Alertas de derrame"],
  },
  {
    title: "Bombas y Compresores",
    description: "Monitoreo de condición de equipos rotativos.",
    features: ["Vibración", "Temperatura", "Horas de operación"],
  },
];

export default function EstacionesPage() {
  return (
    <>
      <PageHeader
        title="Estaciones de Flujo"
        description="Control centralizado de toda su infraestructura de superficie. Desde los múltiples hasta los equipos de proceso."
        badge="Solución"
        variant="dark"
      />

      {/* Components Grid */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Componentes Monitoreados
            </h2>
            <p className="text-muted-foreground">
              Visibilidad completa de cada elemento de su estación de flujo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component) => (
              <Card key={component.title}>
                <CardHeader>
                  <CardTitle>{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* P&ID Diagrams */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Diagramas P&ID Interactivos
              </h2>
              <p className="text-muted-foreground mb-6">
                Visualice su estación con diagramas de proceso que muestran el estado real de cada componente.
                Haga clic en cualquier equipo para ver detalles y tendencias.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Representación gráfica de la instalación",
                  "Valores en tiempo real sobre el diagrama",
                  "Cambio de color según estado",
                  "Navegación intuitiva entre áreas",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/plataforma">
                <Button>
                  Ver la plataforma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <ImagePlaceholder
                label="pid-diagram.png"
                className="aspect-[4/3] rounded-xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Centralice el control de sus estaciones
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Una sola plataforma para monitorear toda su infraestructura de superficie.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Solicitar Demostración
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
