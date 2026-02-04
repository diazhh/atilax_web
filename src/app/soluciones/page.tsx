import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Zap,
  Mountain,
  Wheat,
  Ship,
  Factory,
  Truck,
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Soluciones | ATILAX",
  description:
    "Soluciones IoT para todas las industrias: petroleo, infraestructura critica, mineria, agroindustria, puertos, manufactura, flota y seguridad perimetral.",
};

const industries = [
  {
    icon: Activity,
    title: "Industria Petrolera",
    description: "Monitoreo integral de pozos BM, BCP y Gas Lift, estaciones de flujo, tanques de almacenamiento y equipos de proceso. Optimizado para la Faja del Orinoco.",
    href: "/soluciones/petrolera",
    features: [
      "Deteccion automatica de fallas",
      "Variadores VFD via Modbus",
      "Balance de produccion",
      "Alertas en tiempo real"
    ],
    image: "soluciones-petrolera.jpg",
    color: "amber"
  },
  {
    icon: Zap,
    title: "Infraestructura y Edificaciones",
    description: "Soluciones integrales para conjuntos residenciales, centros comerciales, subestaciones electricas y sistemas de agua. Control de acceso, seguridad perimetral y monitoreo de servicios.",
    href: "/soluciones/infraestructura",
    features: [
      "Control de acceso vehicular y peatonal",
      "Vigilancia perimetral con IA",
      "Monitoreo de tanques y bombas",
      "Gestion de estacionamientos"
    ],
    image: "soluciones-infraestructura.jpg",
    color: "yellow"
  },
  {
    icon: Mountain,
    title: "Mineria",
    description: "Control de operaciones mineras: maquinaria pesada, plantas de procesamiento, seguridad perimetral y monitoreo ambiental en el Arco Minero del Orinoco.",
    href: "/soluciones/mineria",
    features: [
      "Telemetria de maquinaria pesada",
      "Plantas de procesamiento",
      "Control ambiental",
      "Trazabilidad de mineral"
    ],
    image: "soluciones-mineria.jpg",
    color: "orange"
  },
  {
    icon: Wheat,
    title: "Agroindustria",
    description: "Agricultura 4.0: riego tecnificado, bombeo solar, estaciones meteorologicas, gestion de maquinaria agricola y seguridad de instalaciones rurales.",
    href: "/soluciones/agroindustria",
    features: [
      "Riego inteligente automatizado",
      "Bombeo solar off-grid",
      "Datos climaticos en tiempo real",
      "GPS de tractores y cosechadoras"
    ],
    image: "soluciones-agroindustria.jpg",
    color: "green"
  },
  {
    icon: Ship,
    title: "Puertos y Logistica",
    description: "Soluciones para terminales portuarias y aereas: seguridad perimetral, gestion de flota, monitoreo de contenedores refrigerados y control de almacenes.",
    href: "/soluciones/puertos",
    features: [
      "Seguridad perimetral con IA",
      "Control de contenedores reefer",
      "Flota de montacargas",
      "Acceso vehicular automatizado"
    ],
    image: "soluciones-puertos.jpg",
    color: "blue"
  },
  {
    icon: Factory,
    title: "Zonas Industriales",
    description: "Digitalizacion de manufactura: monitoreo de equipos de produccion, variadores y motores, eficiencia energetica y seguridad de parques industriales.",
    href: "/soluciones/industria",
    features: [
      "OEE en tiempo real",
      "Mantenimiento predictivo",
      "Medicion energetica",
      "Industria 4.0"
    ],
    image: "soluciones-industria.jpg",
    color: "purple"
  },
];

const crossSolutions = [
  {
    icon: Truck,
    title: "Gestion de Flota",
    description: "Rastreo GPS en tiempo real, telemetria vehicular via OBD-II, control de combustible, geocercas y analisis de comportamiento del conductor. Aplicable a cualquier industria.",
    href: "/soluciones/flota",
    features: [
      "GPS precision <5 metros",
      "Datos OBD-II completos",
      "Geocercas configurables",
      "Optimizacion de rutas"
    ],
    image: "soluciones-flota.jpg"
  },
  {
    icon: Shield,
    title: "Seguridad con IA",
    description: "Vigilancia perimetral con inteligencia artificial: deteccion de intrusos, reconocimiento de vehiculos y placas, procesamiento Edge con 99% menos consumo de datos.",
    href: "/soluciones/seguridad",
    features: [
      "Deteccion automatica 24/7",
      "Lectura de placas OCR",
      "Procesamiento en el borde",
      "70-90% reduccion de robos"
    ],
    image: "soluciones-seguridad.jpg"
  },
];

const colorClasses: Record<string, string> = {
  amber: "bg-amber-500/10 text-amber-600 border-amber-200",
  yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  orange: "bg-orange-500/10 text-orange-600 border-orange-200",
  green: "bg-green-500/10 text-green-600 border-green-200",
  blue: "bg-blue-500/10 text-blue-600 border-blue-200",
  purple: "bg-purple-500/10 text-purple-600 border-purple-200",
};

export default function SolucionesPage() {
  return (
    <>
      <PageHeader
        title="Soluciones"
        description="Plataforma IoT adaptable a cualquier industria. Monitoreo de activos, gestion de flota y seguridad perimetral con inteligencia artificial."
        badge="Portafolio Completo"
      />

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Soluciones por Industria</h2>
            <p className="text-muted-foreground text-lg">
              ATILAX se adapta a las necesidades especificas de cada sector productivo de Venezuela.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <ImagePlaceholder
                      label={industry.image}
                      className="aspect-[4/3]"
                      iconSize="lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[industry.color].split(' ')[0]} flex items-center justify-center`}>
                      <industry.icon className={`h-6 w-6 ${colorClasses[industry.color].split(' ')[1]}`} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">
                    {industry.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={industry.href}>
                    <Button className="bg-primary">
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sector Solutions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Soluciones Transversales</h2>
            <p className="text-muted-foreground text-lg">
              Modulos que se integran con cualquier solucion sectorial para una gestion completa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {crossSolutions.map((solution) => (
              <Card key={solution.title} className="overflow-hidden border-dashed border-2">
                <div className="grid md:grid-cols-2">
                  <ImagePlaceholder
                    label={solution.image}
                    className="aspect-[4/3] md:aspect-auto md:h-full"
                    iconSize="md"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <solution.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Ver detalles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            No encuentra su industria?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            ATILAX es una plataforma flexible que se adapta a cualquier necesidad de monitoreo industrial.
            Contactenos para discutir su caso especifico.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Consultar mi caso
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
