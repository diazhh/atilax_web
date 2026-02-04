import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Cpu, Bell, Shield } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Seguridad Perimetral con IA",
  description:
    "Vigilancia inteligente con visión artificial. Detección automática de intrusos, vehículos y comportamientos sospechosos.",
};

const capabilities = [
  {
    icon: Eye,
    title: "Detección de Personas",
    description: "Identificación automática de presencia humana en zonas restringidas.",
  },
  {
    icon: Shield,
    title: "Detección de Vehículos",
    description: "Clasificación de vehículos y alertas de acceso no autorizado.",
  },
  {
    icon: Cpu,
    title: "Lectura de Placas",
    description: "Reconocimiento automático de matrículas vehiculares (OCR).",
  },
  {
    icon: Bell,
    title: "Alertas Instantáneas",
    description: "Notificaciones en tiempo real con evidencia visual.",
  },
];

const stats = [
  { value: "99%", label: "Menos consumo de datos" },
  { value: "70-90%", label: "Reducción de robos" },
  { value: "<3s", label: "Tiempo de alerta" },
];

const steps = [
  { step: "1", title: "Captura", description: "Cámaras IP capturan video 24/7" },
  { step: "2", title: "Procesamiento", description: "IA analiza video localmente (Edge)" },
  { step: "3", title: "Detección", description: "Algoritmos identifican amenazas" },
  { step: "4", title: "Alerta", description: "Notificación con evidencia visual" },
];

export default function SeguridadPage() {
  return (
    <>
      <PageHeader
        title="Seguridad con IA"
        description="Vigilancia inteligente que detecta amenazas automáticamente. Proteja sus instalaciones con el poder de la Inteligencia Artificial."
        badge="Solución"
        variant="dark"
      />

      {/* Stats */}
      <section className="py-8 bg-emerald-600 text-white">
        <div className="container-lg">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground">
              Procesamiento de video con IA directamente en cámaras Edge.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Capacidades de Detección
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <cap.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Centro de Control
              </h2>
              <p className="text-muted-foreground mb-6">
                Panel unificado con todas sus cámaras, alertas activas y registro de eventos.
                Acceso desde cualquier dispositivo.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vista en vivo de todas las cámaras",
                  "Historial de detecciones",
                  "Configuración de zonas y horarios",
                  "Reportes de seguridad",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
              <ImagePlaceholder
                label="security-dashboard.png"
                className="aspect-[4/3] rounded-xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Proteja sus instalaciones con ATILAX
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Vigilancia inteligente las 24 horas sin necesidad de operadores permanentes.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Solicitar Demostración
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
