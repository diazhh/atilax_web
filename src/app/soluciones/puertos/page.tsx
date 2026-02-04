import { Metadata } from "next";
import Link from "next/link";
import {
  Ship,
  Anchor,
  Container,
  Truck,
  Shield,
  Camera,
  MapPin,
  Gauge,
  Activity,
  ArrowRight,
  CheckCircle2,
  Warehouse,
  Scale,
  Clock,
  Plane
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Puertos y Logistica | ATILAX",
  description:
    "Monitoreo IoT para puertos, terminales y operaciones logisticas: seguridad perimetral, gestion de flota, control de almacenes y equipos portuarios.",
};

const stats = [
  { value: "24/7", label: "Monitoreo continuo" },
  { value: "70-90%", label: "Reduccion de robos" },
  { value: "15-20%", label: "Optimizacion de flota" },
  { value: "99%", label: "Disponibilidad" },
];

const solutions = [
  {
    icon: Shield,
    title: "Seguridad Perimetral con IA",
    description: "Proteccion integral del perimetro portuario con camaras inteligentes y deteccion automatica de amenazas.",
    features: [
      "Deteccion de intrusos en tiempo real",
      "Reconocimiento de placas vehiculares (OCR)",
      "Control de acceso de camiones y contenedores",
      "Alertas instantaneas con evidencia visual",
      "Integracion con sistemas de vigilancia existentes"
    ],
    image: "puertos-seguridad-perimetral.jpg"
  },
  {
    icon: Truck,
    title: "Gestion de Flota Portuaria",
    description: "Control de montacargas, gruas moviles, camiones de patio y vehiculos de servicio.",
    features: [
      "Ubicacion GPS en tiempo real",
      "Telemetria de equipos (horas, consumo, fallas)",
      "Geocercas por zonas operativas",
      "Optimizacion de movimientos de carga",
      "Historial de recorridos y tiempos"
    ],
    image: "puertos-flota-montacargas.jpg"
  },
  {
    icon: Container,
    title: "Monitoreo de Contenedores",
    description: "Seguimiento y control de condiciones de contenedores refrigerados y carga sensible.",
    features: [
      "Ubicacion en patio de contenedores",
      "Temperatura de contenedores reefer",
      "Estado de puerta (abierta/cerrada)",
      "Alertas de desviacion de temperatura",
      "Integracion con sistemas TOS"
    ],
    image: "puertos-contenedores-reefer.jpg"
  },
  {
    icon: Warehouse,
    title: "Almacenes y Bodegas",
    description: "Monitoreo de condiciones ambientales y seguridad en areas de almacenamiento.",
    features: [
      "Temperatura y humedad ambiental",
      "Deteccion de movimiento fuera de horario",
      "Control de acceso por zonas",
      "Inventario con sensores de peso",
      "Alertas de condiciones fuera de rango"
    ],
    image: "puertos-almacen-bodega.jpg"
  },
];

const equipment = [
  {
    icon: Anchor,
    title: "Gruas de Muelle",
    description: "Monitoreo de gruas STS, RTG y MHC",
    metrics: ["Ciclos de operacion", "Carga levantada", "Vibracion"]
  },
  {
    icon: Scale,
    title: "Basculas Portuarias",
    description: "Pesaje automatizado de camiones",
    metrics: ["Peso bruto/neto", "Registro fotografico", "Integracion ERP"]
  },
  {
    icon: Gauge,
    title: "Sistemas de Combustible",
    description: "Control de despacho y tanques",
    metrics: ["Nivel de tanques", "Consumo por equipo", "Alertas de fuga"]
  },
  {
    icon: Activity,
    title: "Generadores de Respaldo",
    description: "Monitoreo de energia de emergencia",
    metrics: ["Estado de operacion", "Combustible", "Horas de uso"]
  },
];

const ports = [
  { name: "Puerto Cabello", location: "Carabobo", type: "Principal" },
  { name: "La Guaira", location: "Vargas", type: "Maritimo/Aereo" },
  { name: "Puerto de Maracaibo", location: "Zulia", type: "Petrolero" },
  { name: "Puerto Ordaz", location: "Bolivar", type: "Minero" },
  { name: "Guamache", location: "Nueva Esparta", type: "Turistico" },
  { name: "El Guamache", location: "Sucre", type: "Pesquero" },
];

export default function PuertosPage() {
  return (
    <>
      <PageHeader
        title="Puertos y Logistica"
        description="Soluciones IoT para operaciones portuarias: seguridad perimetral, gestion de flota, monitoreo de contenedores y control de almacenes."
        badge="Sector Logistico"
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

      {/* Ports Coverage */}
      <section className="py-12 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">Aplicable a puertos de Venezuela</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {ports.map((port) => (
              <div
                key={port.name}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border"
              >
                <Ship className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">{port.name}</div>
                  <div className="text-xs text-muted-foreground">{port.location} - {port.type}</div>
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
                Infraestructura Portuaria Inteligente
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Los puertos venezolanos son puntos estrategicos para la economia nacional.
                Puerto Cabello y La Guaira manejan la mayor parte del comercio maritimo del pais.
                ATILAX ofrece monitoreo integral para proteger y optimizar estas operaciones criticas.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Redes de vigilancia con drones integrados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Control de acceso vehicular automatizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Trazabilidad de contenedores y carga</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Integracion con sistemas aduaneros</span>
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
              <ImagePlaceholder
                label="puertos-hero-puerto-cabello.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
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
              Soluciones para Operaciones Portuarias
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnologia adaptada a las necesidades especificas del sector logistico.
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
                  <ImagePlaceholder
                    label={solution.image}
                    className="aspect-[4/3] rounded-2xl"
                    iconSize="lg"
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

      {/* Equipment Monitoring */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Monitoreo de Equipos Portuarios
            </h2>
            <p className="text-muted-foreground text-lg">
              Control de todos los activos criticos de la operacion portuaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder
                label="puertos-aeropuerto-maiquetia.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Terminales Aereas</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Las mismas soluciones de seguridad y logistica son aplicables a terminales aereas
                como Maiquetia y otros aeropuertos del pais.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Seguridad perimetral de hangares y carga</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Control de vehiculos en plataforma</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Monitoreo de equipos de handling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Control de cadena de frio para carga perecedera</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Centro de Control Portuario
            </h2>
            <p className="text-muted-foreground text-lg">
              Dashboard unificado para visualizar toda la operacion portuaria:
              seguridad, flota, contenedores y equipos.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              label="puertos-dashboard-control.jpg"
              className="aspect-[16/9] rounded-2xl shadow-2xl"
              iconSize="lg"
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
            Proteja y optimice su terminal
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Contactenos para una evaluacion de sus instalaciones portuarias o logisticas.
            Descubra como ATILAX puede mejorar la seguridad y eficiencia de sus operaciones.
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
