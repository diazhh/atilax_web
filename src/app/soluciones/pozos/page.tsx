import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Gauge, Thermometer, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Monitoreo de Pozos Petroleros",
  description:
    "Monitoreo en tiempo real de pozos petroleros: Bombeo Mecánico, BCP y Gas Lift. Detección automática de anomalías y prevención de fallas.",
};

const liftingMethods = [
  {
    name: "Bombeo Mecánico",
    abbr: "BM",
    description: "El método más utilizado. Monitoreo de balancines y detección de problemas en la cadena cinemática.",
    variables: ["Corriente trifásica", "Voltaje", "Patrón de consumo", "Temperatura del motor"],
    detections: ["Correa rota", "Varilla atascada", "Polea desalineada", "Desbalance eléctrico"],
    color: "bg-amber-500",
  },
  {
    name: "Bombeo de Cavidad Progresiva",
    abbr: "BCP",
    description: "Ideal para crudos pesados de la Faja del Orinoco. Optimización de la vida útil del equipo.",
    variables: ["Corriente del motor", "Presión en cabezal", "RPM del variador", "Temperatura"],
    detections: ["Desgaste de estator", "Presencia de sólidos", "Bomba descebada", "Falla de variador"],
    color: "bg-blue-500",
  },
  {
    name: "Gas Lift",
    abbr: "LAG",
    description: "Para pozos de alta productividad. Optimización de la inyección de gas.",
    variables: ["Presión de fluido", "Volumen de gas", "Temperatura", "Presión de línea"],
    detections: ["Pozo ahogado", "Válvula taponada", "Fuga en línea", "Cambios de productividad"],
    color: "bg-emerald-500",
  },
];

const benefits = [
  { icon: Zap, label: "5-10%", description: "Incremento en producción" },
  { icon: AlertTriangle, label: "30-50%", description: "Menos fallas inesperadas" },
  { icon: Gauge, label: "10-20%", description: "Eficiencia energética" },
  { icon: Thermometer, label: "24/7", description: "Monitoreo continuo" },
];

export default function PozosPage() {
  return (
    <>
      <PageHeader
        title="Pozos Petroleros"
        description="Supervise en tiempo real todos sus métodos de levantamiento artificial. Detecte anomalías antes de que se conviertan en fallas."
        badge="Solución"
        variant="dark"
      />

      {/* Benefits Bar */}
      <section className="py-8 bg-muted border-b">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-primary">{benefit.label}</div>
                  <div className="text-sm text-muted-foreground">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifting Methods */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Métodos de Levantamiento
            </h2>
            <p className="text-muted-foreground">
              Soporte especializado para cada tipo de pozo con variables y detecciones específicas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {liftingMethods.map((method) => (
              <Card key={method.abbr} className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${method.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      {method.abbr}
                    </Badge>
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Variables monitoreadas</h4>
                    <ul className="space-y-1">
                      {method.variables.map((v) => (
                        <li key={v} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Detecciones automáticas</h4>
                    <ul className="space-y-1">
                      {method.detections.map((d) => (
                        <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${method.color}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Dashboard de Monitoreo
              </h2>
              <p className="text-muted-foreground mb-6">
                Visualice el estado de todos sus pozos en una sola pantalla. Gráficos en tiempo real,
                indicadores de estado y alertas instantáneas.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vista de mapa con ubicación de pozos",
                  "Gráficos de tendencias en tiempo real",
                  "Alertas configurables por severidad",
                  "Reportes automáticos de producción",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/plataforma">
                <Button>
                  Conocer la plataforma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <ImagePlaceholder
                label="pozos-dashboard.png"
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
              Optimice sus pozos con ATILAX
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Solicite una demostración y descubra cómo podemos ayudarle a incrementar
              la producción y reducir las fallas en su operación.
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
