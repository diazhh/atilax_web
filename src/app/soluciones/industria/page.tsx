import { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  Cog,
  Zap,
  Shield,
  Thermometer,
  Gauge,
  Activity,
  ArrowRight,
  CheckCircle2,
  Building2,
  Wrench,
  BarChart3,
  Cpu,
  Timer
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zonas Industriales | ATILAX",
  description:
    "Monitoreo IoT para manufactura y zonas industriales: equipos de produccion, variadores, motores, eficiencia energetica y seguridad perimetral.",
};

const stats = [
  { value: "45%", label: "Crecimiento industria 2024" },
  { value: "10-20%", label: "Ahorro energetico" },
  { value: "30-50%", label: "Reduccion de fallas" },
  { value: "24/7", label: "Monitoreo continuo" },
];

const solutions = [
  {
    icon: Cog,
    title: "Monitoreo de Equipos de Produccion",
    description: "Control en tiempo real de maquinaria y lineas de produccion para maximizar la disponibilidad y eficiencia.",
    features: [
      "Vibracion de motores y rodamientos",
      "Temperatura de operacion",
      "Conteo de ciclos y unidades producidas",
      "Deteccion de anomalias con IA",
      "Alertas de mantenimiento predictivo"
    ],
    image: "industria-linea-produccion.jpg"
  },
  {
    icon: Zap,
    title: "Variadores y Motores Electricos",
    description: "Lectura Modbus completa de VFDs y analisis de condicion de motores industriales.",
    features: [
      "Parametros en tiempo real (corriente, voltaje, RPM)",
      "Factor de potencia y eficiencia",
      "Historial de fallas y alarmas",
      "Consumo energetico por equipo",
      "Compatible con ABB, Siemens, Schneider, Allen-Bradley"
    ],
    image: "industria-variadores-motores.jpg"
  },
  {
    icon: BarChart3,
    title: "Eficiencia Energetica",
    description: "Medicion y optimizacion del consumo electrico para reducir costos operativos.",
    features: [
      "Medidores de energia multiparametros",
      "Desglose de consumo por area/equipo",
      "Deteccion de picos y penalizaciones",
      "Reportes para optimizacion de contratos",
      "Ahorro promedio del 10-20%"
    ],
    image: "industria-eficiencia-energetica.jpg"
  },
  {
    icon: Shield,
    title: "Seguridad de Parques Industriales",
    description: "Vigilancia perimetral con IA para proteger instalaciones manufactureras.",
    features: [
      "Deteccion de intrusos 24/7",
      "Control de acceso vehicular",
      "Reconocimiento de placas (OCR)",
      "Alertas con evidencia visual",
      "Integracion con guardias de seguridad"
    ],
    image: "industria-seguridad-parque.jpg"
  },
];

const sectors = [
  { icon: Factory, name: "Manufactura", examples: "Plasticos, alimentos, textiles" },
  { icon: Cog, name: "Metal-Mecanica", examples: "Autopartes, maquinaria, herreria" },
  { icon: Building2, name: "Construccion", examples: "Concreto, bloques, cementera" },
  { icon: Cpu, name: "Electronica", examples: "Ensamblaje, componentes" },
  { icon: Factory, name: "Petroquimica", examples: "Polimeros, fertilizantes" },
  { icon: Activity, name: "Farmaceutica", examples: "Medicamentos, cosmeticos" },
];

const zones = [
  { name: "Los Ruices", location: "Caracas", specialty: "Manufactura ligera" },
  { name: "La Urbina", location: "Caracas", specialty: "Tecnologia y servicios" },
  { name: "Valencia", location: "Carabobo", specialty: "Automotriz y metal" },
  { name: "Maracay", location: "Aragua", specialty: "Alimentos y textiles" },
  { name: "Barquisimeto", location: "Lara", specialty: "Agroindustria" },
  { name: "Ciudad Guayana", location: "Bolivar", specialty: "Siderurgica y aluminio" },
];

const industria40 = {
  title: "Industria 4.0 para Venezuela",
  description: "La Cuarta Revolucion Industrial llega a la manufactura venezolana con IoT, IA y automatizacion.",
  features: [
    {
      icon: Cpu,
      title: "Fabricas Inteligentes",
      description: "Conectividad total de equipos y procesos"
    },
    {
      icon: Activity,
      title: "Analisis Predictivo",
      description: "IA para deteccion temprana de fallas"
    },
    {
      icon: Timer,
      title: "OEE en Tiempo Real",
      description: "Efectividad total de equipos medida automaticamente"
    },
    {
      icon: Wrench,
      title: "CMMS Integrado",
      description: "Ordenes de trabajo automaticas por condicion"
    },
  ],
  image: "industria-fabrica-inteligente-4.0.jpg"
};

export default function IndustriaPage() {
  return (
    <>
      <PageHeader
        title="Zonas Industriales"
        description="Soluciones IoT para manufactura y parques industriales: monitoreo de equipos, eficiencia energetica, mantenimiento predictivo y seguridad."
        badge="Sector Manufactura"
      />

      {/* Stats Bar */}
      <section className="py-8 bg-primary text-white">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-12 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">Sectores que atendemos</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <sector.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{sector.name}</div>
                  <div className="text-xs text-muted-foreground">{sector.examples}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Digitalizacion de la Manufactura Venezolana
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                La industria venezolana esta en proceso de recuperacion y modernizacion.
                ATILAX permite a las fabricas dar el salto hacia la Industria 4.0 con
                monitoreo inteligente de equipos, eficiencia energetica y mantenimiento predictivo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Compatible con equipos existentes (Modbus, OPC-UA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Implementacion gradual sin detener produccion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>ROI demostrable en 12-18 meses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Soporte tecnico local especializado</span>
                </li>
              </ul>
              <Link href="/contacto">
                <Button size="lg" className="bg-primary">
                  Solicitar evaluacion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/stock/industria_factory.jpg"
                alt="Zona industrial venezolana - Manufactura con monitoreo IoT"
                width={1200}
                height={675}
                className="aspect-[4/3] rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluciones para Manufactura
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitoreo integral de todos los activos criticos de su planta industrial.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src="/images/stock/industria_manufactura.jpg"
                    alt="Linea de produccion industrial - Monitoreo de equipos en tiempo real"
                    width={1200}
                    height={800}
                    className="aspect-[4/3] rounded-2xl object-cover w-full"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{solution.description}</p>

                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industria 4.0 */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">{industria40.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                {industria40.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {industria40.features.map((feature) => (
                  <Card key={feature.title}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/stock/iot_platform_2.jpg"
                alt="Industria 4.0 - Fabrica inteligente con automatizacion y IoT"
                width={1200}
                height={800}
                className="aspect-[4/3] rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Zones */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Zonas Industriales de Venezuela</h2>
            <p className="text-muted-foreground">
              Presencia en los principales polos manufactureros del pais
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone) => (
              <Card key={zone.name}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">{zone.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {zone.location} - {zone.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Dashboard de Planta Industrial
            </h2>
            <p className="text-muted-foreground text-lg">
              Visualice el estado de toda su planta en tiempo real:
              produccion, equipos, energia y seguridad en un solo lugar.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/stock/iot_dashboard.jpg"
              alt="Dashboard de planta industrial - Centro de control IoT integrado"
              width={1200}
              height={673}
              className="aspect-[16/9] rounded-2xl shadow-2xl object-cover w-full"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/contacto">
              <Button size="lg" className="bg-primary">
                Solicitar demostracion
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Modernice su planta industrial
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Contactenos para una evaluacion gratuita de sus instalaciones.
            Descubra como ATILAX puede aumentar la eficiencia y reducir costos operativos.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Agendar visita tecnica
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
