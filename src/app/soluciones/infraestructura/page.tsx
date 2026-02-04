import { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Droplets,
  Radio,
  AlertTriangle,
  Thermometer,
  Gauge,
  Activity,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Building2,
  Cable,
  Waves,
  Antenna
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Infraestructura Critica | ATILAX",
  description:
    "Monitoreo IoT para infraestructura critica: subestaciones electricas, sistemas de bombeo de agua, plantas de tratamiento y torres de telecomunicaciones.",
};

const stats = [
  { value: "+400", label: "Subestaciones en Venezuela" },
  { value: "600 MW", label: "Consumo de bombeo de agua" },
  { value: "24/7", label: "Monitoreo continuo" },
  { value: "99%", label: "Disponibilidad del sistema" },
];

const sectors = [
  {
    id: "electrico",
    title: "Sector Electrico",
    subtitle: "Subestaciones y Redes de Distribucion",
    icon: Zap,
    color: "yellow",
    description: "Venezuela cuenta con mas de 400 subestaciones y 24,000 km de lineas de alta tension que requieren monitoreo constante para prevenir fallas y apagones.",
    problems: [
      "Solo 12-14 GW disponibles de 34 GW instalados",
      "Explosiones frecuentes de transformadores",
      "Falta de mantenimiento predictivo",
      "513 protestas ciudadanas por fallas en 2024"
    ],
    solutions: [
      {
        title: "Monitoreo de Transformadores",
        description: "Temperatura del aceite, nivel, gases disueltos (DGA), vibraciones y corriente.",
        icon: Thermometer
      },
      {
        title: "Deteccion de Sobrecargas",
        description: "Alertas tempranas de sobrecarga, desbalance de fases y factor de potencia bajo.",
        icon: AlertTriangle
      },
      {
        title: "Seguridad Perimetral",
        description: "Camaras con IA para deteccion de intrusos en subestaciones criticas.",
        icon: ShieldAlert
      },
      {
        title: "Control de Acceso",
        description: "Registro de entrada/salida de personal autorizado con alertas en tiempo real.",
        icon: Building2
      }
    ],
    image: "infraestructura-subestacion-electrica.jpg"
  },
  {
    id: "agua",
    title: "Sistemas de Agua",
    subtitle: "Bombeo, Tratamiento y Distribucion",
    icon: Droplets,
    color: "blue",
    description: "Las 14 estaciones de bombeo principales de Venezuela consumen 600 MW de potencia. Hidroven y sus filiales enfrentan retos criticos de mantenimiento.",
    problems: [
      "Tuy I y II al 50% de capacidad",
      "Deterioro de motores y turbinas",
      "30% de poblacion con racionamiento",
      "Falta de monitoreo en tiempo real"
    ],
    solutions: [
      {
        title: "Monitoreo de Bombas",
        description: "Vibracion, temperatura de rodamientos, corriente del motor y caudal.",
        icon: Activity
      },
      {
        title: "Control de Nivel",
        description: "Nivel de tanques, reservorios y estaciones de bombeo con alertas automaticas.",
        icon: Gauge
      },
      {
        title: "Deteccion de Fugas",
        description: "Analisis de cambios de presion para identificar fugas en tuberias principales.",
        icon: Waves
      },
      {
        title: "Eficiencia Energetica",
        description: "Optimizacion de horarios de bombeo segun demanda y tarifas electricas.",
        icon: Zap
      }
    ],
    image: "infraestructura-estacion-bombeo-agua.jpg"
  },
  {
    id: "telecom",
    title: "Telecomunicaciones",
    subtitle: "Torres, Antenas y Nodos de Red",
    icon: Radio,
    color: "purple",
    description: "Venezuela tiene mas de 6,300 antenas de telecomunicaciones que sufren robos, vandalismo y fallas por problemas electricos.",
    problems: [
      "Robos y vandalismo a torres",
      "Fallas por inestabilidad electrica",
      "Dificultad de acceso a zonas remotas",
      "CANTV activo linea 0800-ANTENAS para denuncias"
    ],
    solutions: [
      {
        title: "Deteccion de Intrusos",
        description: "Sensores de apertura de puertas, vibracion en cercas y camaras con IA.",
        icon: ShieldAlert
      },
      {
        title: "Monitoreo de Energia",
        description: "Estado de baterias, generadores de respaldo y UPS en tiempo real.",
        icon: Zap
      },
      {
        title: "Control de Temperatura",
        description: "Monitoreo de aire acondicionado y temperatura de equipos criticos.",
        icon: Thermometer
      },
      {
        title: "Alertas de Conectividad",
        description: "Deteccion de perdida de enlace y cortes de fibra optica.",
        icon: Cable
      }
    ],
    image: "infraestructura-torre-telecomunicaciones.jpg"
  },
];

const clients = [
  { name: "CORPOELEC", type: "Electricidad" },
  { name: "HIDROVEN", type: "Agua" },
  { name: "HIDROCAPITAL", type: "Agua" },
  { name: "HIDROCENTRO", type: "Agua" },
  { name: "CANTV", type: "Telecom" },
  { name: "Gobernaciones", type: "Gobierno" },
];

export default function InfraestructuraPage() {
  return (
    <>
      <PageHeader
        title="Infraestructura Critica"
        description="Monitoreo inteligente de subestaciones electricas, sistemas de bombeo de agua y torres de telecomunicaciones. Proteja los servicios esenciales de Venezuela."
        badge="Servicios Publicos"
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

      {/* Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Proteja los servicios esenciales
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                La infraestructura critica de Venezuela enfrenta desafios unicos: falta de mantenimiento,
                obsolescencia tecnologica y amenazas de seguridad. ATILAX ofrece monitoreo 24/7
                para anticipar fallas y optimizar operaciones.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Deteccion temprana de fallas antes de que causen apagones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Reduccion de visitas de campo innecesarias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Seguridad perimetral contra robos y vandalismo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Optimizacion del consumo energetico</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <ImagePlaceholder
                label="infraestructura-hero-servicios-publicos.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Detail */}
      {sectors.map((sector, sectorIndex) => (
        <section
          key={sector.id}
          className={`py-20 ${sectorIndex % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="container-lg">
            {/* Sector Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                sector.color === "yellow" ? "bg-yellow-500/10" :
                sector.color === "blue" ? "bg-blue-500/10" : "bg-purple-500/10"
              }`}>
                <sector.icon className={`h-7 w-7 ${
                  sector.color === "yellow" ? "text-yellow-600" :
                  sector.color === "blue" ? "text-blue-600" : "text-purple-600"
                }`} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{sector.title}</h2>
                <p className="text-muted-foreground">{sector.subtitle}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Image and Problems */}
              <div>
                <ImagePlaceholder
                  label={sector.image}
                  className="aspect-[4/3] rounded-2xl mb-6"
                  iconSize="lg"
                />
                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Problematica Actual
                  </h4>
                  <ul className="space-y-2">
                    {sector.problems.map((problem) => (
                      <li key={problem} className="flex items-start gap-2 text-sm text-red-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="text-muted-foreground text-lg mb-6">
                  {sector.description}
                </p>
                <h4 className="font-semibold text-primary mb-4">Soluciones ATILAX</h4>
                <div className="grid gap-4">
                  {sector.solutions.map((solution) => (
                    <Card key={solution.title} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <solution.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold mb-1">{solution.title}</h5>
                            <p className="text-sm text-muted-foreground">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Target Clients */}
      <section className="py-16 bg-primary/5">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Clientes Objetivo</h2>
            <p className="text-muted-foreground">
              Organizaciones que protegen la infraestructura critica de Venezuela
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border flex items-center gap-3"
              >
                <Building2 className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">{client.name}</div>
                  <div className="text-xs text-muted-foreground">{client.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder
                label="infraestructura-dashboard-scada.jpg"
                className="aspect-[4/3] rounded-2xl shadow-2xl"
                iconSize="lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">
                Centro de Control Unificado
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Visualice todas sus instalaciones criticas en un solo dashboard.
                Reciba alertas instantaneas y tome decisiones basadas en datos en tiempo real.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Antenna className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Vista geografica</span>
                    <p className="text-sm text-muted-foreground">
                      Mapa con ubicacion y estado de todas las instalaciones
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Gestion de alarmas</span>
                    <p className="text-sm text-muted-foreground">
                      Prioridades, escalamiento y registro de acciones
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Reportes automaticos</span>
                    <p className="text-sm text-muted-foreground">
                      Disponibilidad, fallas y mantenimiento preventivo
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contacto">
                <Button className="bg-primary">
                  Solicitar demostracion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proteja la infraestructura de Venezuela
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Contactenos para una evaluacion de sus instalaciones criticas y descubra
            como ATILAX puede mejorar la disponibilidad y seguridad de sus servicios.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Contactar a un especialista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
