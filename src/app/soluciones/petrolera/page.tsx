import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Gauge,
  Database,
  Zap,
  AlertTriangle,
  TrendingUp,
  Thermometer,
  Droplets,
  Wind,
  ArrowRight,
  CheckCircle2,
  BarChart3
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Industria Petrolera | ATILAX",
  description:
    "Monitoreo IoT integral para operaciones petroleras: pozos BM, BCP y Gas Lift, estaciones de flujo, tanques de almacenamiento y equipos de proceso.",
};

const benefits = [
  { value: "5-10%", label: "Incremento de produccion" },
  { value: "30-50%", label: "Reduccion de fallas" },
  { value: "60-70%", label: "Menos visitas a campo" },
  { value: "24/7", label: "Monitoreo continuo" },
];

const liftingMethods = [
  {
    id: "bm",
    title: "Bombeo Mecanico (BM)",
    subtitle: "Balancines y Unidades de Bombeo",
    icon: Activity,
    description: "Monitoreo completo de unidades de bombeo mecanico con deteccion automatica de anomalias y fallas.",
    variables: [
      "Corriente trifasica del motor",
      "Voltaje por fase",
      "Patron de consumo energetico",
      "Ciclos por minuto (SPM)",
      "Factor de potencia"
    ],
    detections: [
      "Correa rota o deslizada",
      "Varilla atascada o partida",
      "Polea desalineada",
      "Desbalance electrico",
      "Sobrecarga del motor"
    ],
    image: "petrolera-bombeo-mecanico.jpg"
  },
  {
    id: "bcp",
    title: "Bombeo de Cavidad Progresiva (BCP)",
    subtitle: "Ideal para crudos pesados de la Faja del Orinoco",
    icon: Gauge,
    description: "Solucion optimizada para pozos con crudos pesados y extra-pesados, con alta tolerancia a arena y solidos.",
    variables: [
      "Corriente del motor (variador)",
      "Presion en cabezal",
      "Frecuencia / RPM",
      "Temperatura de operacion",
      "Torque estimado"
    ],
    detections: [
      "Desgaste de estator/rotor",
      "Presencia de solidos excesiva",
      "Bomba descebada",
      "Operacion fuera de rango",
      "Falla de variador (VFD)"
    ],
    image: "petrolera-bcp-cavidad.jpg"
  },
  {
    id: "lag",
    title: "Levantamiento Artificial por Gas (LAG)",
    subtitle: "Gas Lift - Inyeccion de gas para produccion",
    icon: Wind,
    description: "Control preciso de sistemas de inyeccion de gas con optimizacion de consumo y deteccion de anomalias.",
    variables: [
      "Presion de fluido en cabezal",
      "Volumen de gas inyectado",
      "Temperatura de linea",
      "Presion de inyeccion",
      "Caudal de produccion"
    ],
    detections: [
      "Pozo ahogado",
      "Taponamiento de valvula",
      "Fuga en linea de inyeccion",
      "Valvula operando fuera de rango",
      "Desbalance de inyeccion"
    ],
    image: "petrolera-gas-lift.jpg"
  },
];

const infrastructure = [
  {
    title: "Estaciones de Flujo",
    icon: Droplets,
    description: "Multiples de produccion, separadores bifasicos y trifasicos, tratamiento de crudo.",
    features: ["Diagramas P&ID interactivos", "Balance automatico", "Control de valvulas"],
    image: "petrolera-estacion-flujo.jpg"
  },
  {
    title: "Tanques de Almacenamiento",
    icon: Database,
    description: "Control de nivel, inventario en tiempo real y deteccion de fugas o derrames.",
    features: ["Medicion ultrasonica", "Alertas de nivel", "Calculo de volumen"],
    image: "petrolera-tanques.jpg"
  },
  {
    title: "Equipos de Proceso",
    icon: Thermometer,
    description: "Separadores, calentadores, bombas de transferencia y compresores.",
    features: ["Monitoreo de vibracion", "Temperatura de operacion", "Presion diferencial"],
    image: "petrolera-equipos-proceso.jpg"
  },
  {
    title: "Variadores de Frecuencia",
    icon: Zap,
    description: "Lectura Modbus completa de VFDs ABB, Schneider, Allen-Bradley, Siemens.",
    features: ["Parametros en tiempo real", "Historico de fallas", "Eficiencia energetica"],
    image: "petrolera-variadores-vfd.jpg"
  },
];

export default function PetroleraPage() {
  return (
    <>
      <PageHeader
        title="Industria Petrolera"
        description="Plataforma IoT disenada para las condiciones unicas del sector petrolero venezolano. Monitoreo de pozos, estaciones y tanques con inteligencia artificial."
        badge="Sector Energetico"
      />

      {/* Benefits Bar */}
      <section className="py-8 bg-primary text-white">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">
                  {benefit.value}
                </div>
                <div className="text-sm text-white/70">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Disenado para la Faja del Orinoco
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                ATILAX esta optimizado para las condiciones especificas del sector petrolero
                venezolano: crudos pesados y extra-pesados, pozos BCP de alta demanda,
                operaciones remotas con conectividad limitada y entornos hostiles.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Conectividad LoRaWAN para zonas sin cobertura celular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Edge computing con operacion autonoma offline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Energia solar para instalaciones remotas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Equipos industriales IP67 para ambientes hostiles</span>
                </li>
              </ul>
              <Link href="/contacto">
                <Button size="lg" className="bg-primary">
                  Solicitar evaluacion de campo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <ImagePlaceholder
                label="petrolera-hero-faja-orinoco.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lifting Methods */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Metodos de Levantamiento
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitoreo especializado para cada tipo de sistema de produccion,
              con variables y detecciones especificas.
            </p>
          </div>

          <div className="space-y-16">
            {liftingMethods.map((method, index) => (
              <div
                key={method.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <ImagePlaceholder
                    label={method.image}
                    className="aspect-[4/3] rounded-2xl"
                    iconSize="lg"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{method.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Variables Monitoreadas
                      </h4>
                      <ul className="space-y-2">
                        {method.variables.map((variable) => (
                          <li key={variable} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {variable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-red-600 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Deteccion Automatica
                      </h4>
                      <ul className="space-y-2">
                        {method.detections.map((detection) => (
                          <li key={detection} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            {detection}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Infraestructura de Superficie
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitoreo integral de toda la infraestructura de produccion y procesamiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructure.map((item) => (
              <Card key={item.title} className="overflow-hidden">
                <ImagePlaceholder
                  label={item.image}
                  className="aspect-[16/9]"
                  iconSize="lg"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Dashboard de Campo Petrolero
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Visualice el estado de todos sus activos en tiempo real desde cualquier
                dispositivo. Dashboards personalizados por rol de usuario.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Graficos en tiempo real</span>
                    <p className="text-sm text-muted-foreground">
                      Curvas de produccion, tendencias y analisis historico
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Estado de pozos en vivo</span>
                    <p className="text-sm text-muted-foreground">
                      Indicadores LED, gauges y alertas instantaneas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Reportes automaticos</span>
                    <p className="text-sm text-muted-foreground">
                      Produccion diaria, eficiencia y balance de campo
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/plataforma">
                  <Button variant="outline">Ver plataforma</Button>
                </Link>
                <a href="https://panel.atilax.io" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary">
                    Probar demo en vivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <ImagePlaceholder
                label="petrolera-dashboard-preview.jpg"
                className="aspect-[4/3] rounded-2xl shadow-2xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Optimice su operacion petrolera
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Solicite una evaluacion gratuita de su campo y descubra como ATILAX
            puede incrementar su produccion y reducir costos operativos.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Agendar evaluacion de campo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
