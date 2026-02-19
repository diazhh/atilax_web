import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Fuel, User, Route } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gestión de Flota",
  description:
    "Rastreo GPS en tiempo real, control de combustible, análisis de comportamiento del conductor y optimización de rutas.",
};

const features = [
  {
    icon: MapPin,
    title: "GPS en Tiempo Real",
    description: "Ubicación precisa (<5m) de cada vehículo con histórico de recorridos.",
  },
  {
    icon: Fuel,
    title: "Control de Combustible",
    description: "Detección de fugas, robos y consumo excesivo con sensores de tanque.",
  },
  {
    icon: User,
    title: "Comportamiento del Conductor",
    description: "Aceleraciones bruscas, frenados, excesos de velocidad.",
  },
  {
    icon: Route,
    title: "Optimización de Rutas",
    description: "Algoritmos que reducen el kilometraje hasta un 20%.",
  },
];

const stats = [
  { value: "15-20%", label: "Reducción de km" },
  { value: "10-15%", label: "Ahorro en combustible" },
  { value: "<5m", label: "Precisión GPS" },
];

export default function FlotaPage() {
  return (
    <>
      <PageHeader
        title="Gestión de Flota"
        description="Control total de sus vehículos: ubicación, consumo, comportamiento del conductor y optimización de rutas."
        badge="Solución"
        variant="dark"
      />

      {/* Stats */}
      <section className="py-8 bg-muted border-b">
        <div className="container-lg">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Mapa en Tiempo Real
              </h2>
              <p className="text-muted-foreground mb-6">
                Visualice todos sus vehículos en un mapa interactivo. Filtre por estado,
                zona o conductor. Reproduzca recorridos históricos.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vista de todos los vehículos",
                  "Historial de recorridos",
                  "Geocercas con alertas",
                  "Integración con Google Maps",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contacto">
                <Button>
                  Solicitar demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src="/images/stock/flota_gps_tracking.jpg"
                alt="Gestion de flota vehicular con GPS - Rastreo y control en tiempo real"
                width={1200}
                height={795}
                className="aspect-[4/3] rounded-xl object-cover w-full"
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
              Optimice su flota con ATILAX
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Reduzca costos de combustible y mantenimiento con datos en tiempo real.
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
