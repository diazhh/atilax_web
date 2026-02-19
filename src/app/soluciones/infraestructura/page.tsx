import { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Droplets,
  Radio,
  Thermometer,
  Gauge,
  Activity,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Building2,
  Cable,
  Waves,
  Antenna,
  Home,
  ShoppingBag,
  Car,
  Users,
  Lock,
  Camera,
  Bell,
  Cpu,
  Smartphone,
  Shield,
  MapPin,
  Timer,
  BadgeCheck,
  Fingerprint,
  ScanLine,
  CircleParking,
  Warehouse,
  Lightbulb,
  Wind,
  Fuel,
  LayoutDashboard
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Infraestructura y Edificaciones | ATILAX",
  description:
    "Monitoreo IoT para infraestructura critica, conjuntos residenciales y centros comerciales: subestaciones electricas, sistemas de agua, control de acceso, seguridad perimetral y automatizacion.",
};

const stats = [
  { value: "24/7", label: "Monitoreo continuo" },
  { value: "99%", label: "Disponibilidad del sistema" },
  { value: "<3s", label: "Tiempo de alerta" },
  { value: "70-90%", label: "Reduccion de incidentes" },
];

const sectors = [
  {
    id: "electrico",
    title: "Sector Electrico",
    subtitle: "Subestaciones y Redes de Distribucion",
    icon: Zap,
    color: "yellow",
    description: "Garantice la continuidad del servicio electrico con monitoreo inteligente de subestaciones, transformadores y redes de distribucion. Detecte anomalias antes de que se conviertan en fallas criticas.",
    solutions: [
      {
        title: "Monitoreo de Transformadores",
        description: "Temperatura del aceite, nivel, gases disueltos (DGA), vibraciones y corriente de carga.",
        icon: Thermometer
      },
      {
        title: "Deteccion de Sobrecargas",
        description: "Alertas tempranas de sobrecarga, desbalance de fases y factor de potencia bajo.",
        icon: Activity
      },
      {
        title: "Seguridad Perimetral",
        description: "Camaras con IA para deteccion de intrusos en subestaciones criticas 24/7.",
        icon: ShieldAlert
      },
      {
        title: "Control de Acceso",
        description: "Registro biometrico de entrada/salida de personal autorizado con alertas en tiempo real.",
        icon: Fingerprint
      }
    ],
    benefits: [
      "Prevencion de fallas en transformadores",
      "Reduccion de tiempos de respuesta",
      "Proteccion contra vandalismo y robos",
      "Cumplimiento de normativas de seguridad"
    ],
    image: "/images/stock/infraestructura_subestacion.jpg"
  },
  {
    id: "agua",
    title: "Sistemas de Agua",
    subtitle: "Bombeo, Tratamiento y Distribucion",
    icon: Droplets,
    color: "blue",
    description: "Optimice la operacion de estaciones de bombeo, plantas de tratamiento y redes de distribucion. Maximice la eficiencia y garantice el suministro continuo de agua.",
    solutions: [
      {
        title: "Monitoreo de Bombas",
        description: "Vibracion, temperatura de rodamientos, corriente del motor, presion y caudal en tiempo real.",
        icon: Activity
      },
      {
        title: "Control de Nivel de Tanques",
        description: "Nivel de tanques, reservorios y cisternas con alertas de nivel bajo y rebose.",
        icon: Gauge
      },
      {
        title: "Deteccion de Fugas",
        description: "Analisis de variaciones de presion para identificar fugas en tuberias principales.",
        icon: Waves
      },
      {
        title: "Eficiencia Energetica",
        description: "Optimizacion de horarios de bombeo segun demanda y tarifas electricas.",
        icon: Zap
      }
    ],
    benefits: [
      "Reduccion de consumo energetico 10-20%",
      "Deteccion temprana de fallas en bombas",
      "Mejor gestion del inventario de agua",
      "Menor tiempo de respuesta ante emergencias"
    ],
    image: "/images/stock/infraestructura_bombeo_agua.jpg"
  },
  {
    id: "telecom",
    title: "Telecomunicaciones",
    subtitle: "Torres, Antenas y Nodos de Red",
    icon: Radio,
    color: "purple",
    description: "Proteja y monitoree torres de telecomunicaciones, cuartos de equipos y nodos de red. Garantice la disponibilidad del servicio y la seguridad de los activos.",
    solutions: [
      {
        title: "Deteccion de Intrusos",
        description: "Sensores de apertura de puertas, vibracion en cercas y camaras con IA para alertas inmediatas.",
        icon: ShieldAlert
      },
      {
        title: "Monitoreo de Energia",
        description: "Estado de baterias, generadores de respaldo, UPS y consumo electrico en tiempo real.",
        icon: Zap
      },
      {
        title: "Control de Temperatura",
        description: "Monitoreo de aire acondicionado, humedad y temperatura de equipos criticos.",
        icon: Thermometer
      },
      {
        title: "Alertas de Conectividad",
        description: "Deteccion de perdida de enlace, latencia y cortes de fibra optica.",
        icon: Cable
      }
    ],
    benefits: [
      "Proteccion contra robos de equipos",
      "Mayor tiempo de actividad del servicio",
      "Respuesta rapida ante fallas",
      "Optimizacion del mantenimiento preventivo"
    ],
    image: "/images/stock/infraestructura_telecomunicaciones.jpg"
  },
  {
    id: "residencial",
    title: "Conjuntos Residenciales",
    subtitle: "Urbanizaciones, Condominios y Torres",
    icon: Home,
    color: "green",
    description: "Brinde seguridad y tranquilidad a los residentes con sistemas inteligentes de control de acceso, vigilancia perimetral y monitoreo de servicios comunes.",
    solutions: [
      {
        title: "Control de Acceso Vehicular",
        description: "Lectura automatica de placas (LPR), tags RFID, control de visitantes y registro fotografico.",
        icon: Car
      },
      {
        title: "Acceso Peatonal Inteligente",
        description: "Torniquetes con tarjetas, biometria facial o huella, y registro de entradas/salidas.",
        icon: Users
      },
      {
        title: "Vigilancia Perimetral con IA",
        description: "Camaras con deteccion de personas, vehiculos sospechosos y comportamientos anomalos.",
        icon: Camera
      },
      {
        title: "Monitoreo de Tanques de Agua",
        description: "Nivel de cisternas y tanques elevados con alertas de nivel critico y rebose.",
        icon: Droplets
      },
      {
        title: "Control de Bombas",
        description: "Estado de bombas de agua, presion del sistema y deteccion de fallas electricas.",
        icon: Activity
      },
      {
        title: "Alertas a Residentes",
        description: "Notificaciones push, WhatsApp y email sobre visitantes, entregas y emergencias.",
        icon: Smartphone
      }
    ],
    benefits: [
      "Mayor seguridad para residentes",
      "Control total de accesos 24/7",
      "Gestion eficiente de visitantes",
      "Reduccion de robos y hurtos 70-90%",
      "Tranquilidad y confianza"
    ],
    image: "/images/stock/infraestructura_residencial.jpg"
  },
  {
    id: "comercial",
    title: "Centros Comerciales",
    subtitle: "Malls, Plazas y Locales Comerciales",
    icon: ShoppingBag,
    color: "orange",
    description: "Proteja sus espacios comerciales con sistemas avanzados de seguridad, control de estacionamientos y monitoreo de infraestructura critica para garantizar la mejor experiencia a clientes y comerciantes.",
    solutions: [
      {
        title: "Gestion de Estacionamientos",
        description: "Conteo de espacios disponibles, lectura de placas, tarifas automaticas y senalizacion LED.",
        icon: CircleParking
      },
      {
        title: "Seguridad Perimetral",
        description: "Camaras con IA en entradas, pasillos y areas comunes. Deteccion de comportamientos sospechosos.",
        icon: Shield
      },
      {
        title: "Control de Acceso de Personal",
        description: "Acceso biometrico a areas restringidas, bodegas, oficinas y cuartos tecnicos.",
        icon: Lock
      },
      {
        title: "Monitoreo de Sistemas HVAC",
        description: "Temperatura, humedad y consumo de aire acondicionado en locales y areas comunes.",
        icon: Wind
      },
      {
        title: "Control de Energia",
        description: "Medidores inteligentes por local, alertas de consumo excesivo y gestion de horarios.",
        icon: Lightbulb
      },
      {
        title: "Sistemas de Bombeo",
        description: "Monitoreo de bombas de agua potable, contraincendios y sistemas de riego.",
        icon: Gauge
      }
    ],
    benefits: [
      "Experiencia mejorada para clientes",
      "Gestion eficiente de estacionamientos",
      "Reduccion de perdidas por robos",
      "Optimizacion del consumo energetico",
      "Cumplimiento de normativas de seguridad"
    ],
    image: "/images/stock/infraestructura_comercial.jpg"
  }
];

const additionalSolutions = [
  {
    title: "Zonas Perimetrales",
    description: "Proteccion integral del perimetro con camaras termicas, sensores de movimiento, cercas electricas monitoreadas y deteccion de intrusion por IA.",
    icon: Shield,
    features: ["Camaras termicas nocturnas", "Sensores de vibracion en cercas", "Deteccion de corte de cercas", "Mapeo de zonas de intrusion"]
  },
  {
    title: "Tanques y Cisternas",
    description: "Monitoreo continuo de nivel, temperatura y calidad del agua en tanques elevados, cisternas subterraneas y reservorios.",
    icon: Droplets,
    features: ["Sensores de nivel ultrasonicos", "Alertas de nivel critico", "Deteccion de fugas", "Historial de consumo"]
  },
  {
    title: "Sistemas de Bombeo",
    description: "Control y monitoreo de bombas centrifugas, sumergibles y de presion constante con analisis de vibracion y corriente.",
    icon: Activity,
    features: ["Vibracion y temperatura", "Corriente y voltaje", "Presion de descarga", "Horas de operacion"]
  },
  {
    title: "Control de Acceso Peatonal",
    description: "Torniquetes, puertas automaticas y barreras con multiples tecnologias de identificacion para maximo control.",
    icon: Users,
    features: ["Tarjetas RFID/NFC", "Biometria facial", "Huella dactilar", "QR temporales para visitantes"]
  },
  {
    title: "Control de Acceso Vehicular",
    description: "Barreras automaticas, lectores de placas y tags para control total de entrada y salida de vehiculos.",
    icon: Car,
    features: ["Lectura de placas (LPR)", "Tags RFID vehiculares", "Control de visitantes", "Registro fotografico"]
  },
  {
    title: "Centro de Monitoreo",
    description: "Dashboard centralizado para visualizar todos los sistemas, gestionar alarmas y generar reportes automaticos.",
    icon: LayoutDashboard,
    features: ["Vista unificada de sistemas", "Gestion de alarmas", "Reportes automaticos", "Acceso movil 24/7"]
  }
];

const targetClients = [
  { name: "Conjuntos Residenciales", icon: Home, examples: "Urbanizaciones, condominios, torres" },
  { name: "Centros Comerciales", icon: ShoppingBag, examples: "Malls, plazas, galerias" },
  { name: "Empresas de Servicios", icon: Building2, examples: "Electricidad, agua, telecomunicaciones" },
  { name: "Edificios Corporativos", icon: Warehouse, examples: "Oficinas, torres empresariales" },
  { name: "Instituciones Publicas", icon: BadgeCheck, examples: "Gobernaciones, alcaldias, ministerios" },
];

export default function InfraestructuraPage() {
  return (
    <>
      <PageHeader
        title="Infraestructura y Edificaciones"
        description="Monitoreo inteligente para servicios criticos, conjuntos residenciales y centros comerciales. Seguridad, control de acceso y automatizacion en una sola plataforma."
        badge="Soluciones Integrales"
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
                Proteccion y control inteligente
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                ATILAX ofrece soluciones integrales de monitoreo IoT para infraestructura critica,
                conjuntos residenciales y centros comerciales. Desde el control de acceso hasta
                el monitoreo de sistemas vitales, todo en una sola plataforma.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Control de acceso vehicular y peatonal con multiples tecnologias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Vigilancia perimetral con inteligencia artificial</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Monitoreo de tanques de agua, bombas y sistemas criticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Alertas instantaneas por WhatsApp, email y app movil</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              {/*
                IMAGEN: infraestructura-hero-edificaciones.jpg
                Descripcion: Vista panoramica que muestre la diversidad de aplicaciones:
                conjunto residencial moderno, edificio corporativo y/o centro comercial.
                Estilo: Fotografia profesional, luz natural, ambiente urbano venezolano.
                Resolucion: 1920x1440px (4:3)
              */}
              <Image
                src="/images/stock/infraestructura_power.jpg"
                alt="Infraestructura critica - Monitoreo de edificaciones y servicios"
                width={1200}
                height={800}
                className="aspect-[4/3] rounded-2xl object-cover w-full"
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
                sector.color === "blue" ? "bg-blue-500/10" :
                sector.color === "purple" ? "bg-purple-500/10" :
                sector.color === "green" ? "bg-green-500/10" : "bg-orange-500/10"
              }`}>
                <sector.icon className={`h-7 w-7 ${
                  sector.color === "yellow" ? "text-yellow-600" :
                  sector.color === "blue" ? "text-blue-600" :
                  sector.color === "purple" ? "text-purple-600" :
                  sector.color === "green" ? "text-green-600" : "text-orange-600"
                }`} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{sector.title}</h2>
                <p className="text-muted-foreground">{sector.subtitle}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Image and Benefits */}
              <div>
                <Image
                  src={sector.image}
                  alt={`${sector.title} - Monitoreo IoT para infraestructura`}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] rounded-2xl mb-6 object-cover w-full"
                />
                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Beneficios Clave
                  </h4>
                  <ul className="space-y-2">
                    {sector.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-green-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        {benefit}
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

      {/* Additional Solutions Grid */}
      <section className="py-20 bg-primary/5">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Soluciones Especializadas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Componentes modulares que se adaptan a las necesidades especificas de cada instalacion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSolutions.map((solution) => (
              <Card key={solution.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
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

      {/* Target Clients */}
      <section className="py-16">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Para quien es ATILAX</h2>
            <p className="text-muted-foreground">
              Soluciones adaptadas a cada tipo de instalacion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {targetClients.map((client) => (
              <div
                key={client.name}
                className="p-6 bg-white rounded-xl shadow-sm border text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <client.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold mb-1">{client.name}</div>
                <div className="text-xs text-muted-foreground">{client.examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/*
                IMAGEN: infraestructura-dashboard-unificado.jpg
                Descripcion: Captura de pantalla del dashboard mostrando:
                - Mapa con ubicaciones de instalaciones
                - Graficos de estado de sistemas
                - Panel de alarmas activas
                - Indicadores de acceso vehicular/peatonal
                Estilo: Interfaz moderna, colores corporativos ATILAX
                Resolucion: 1920x1440px (4:3)
              */}
              <Image
                src="/images/stock/iot_dashboard.jpg"
                alt="Centro de control unificado - Dashboard IoT para infraestructura"
                width={1200}
                height={673}
                className="aspect-[4/3] rounded-2xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">
                Centro de Control Unificado
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Visualice todos sus sistemas en un solo dashboard. Control de acceso,
                seguridad perimetral, tanques de agua y bombas: todo integrado y accesible
                desde cualquier dispositivo.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Vista geografica</span>
                    <p className="text-sm text-muted-foreground">
                      Mapa interactivo con ubicacion y estado de todas las instalaciones
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Bell className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Gestion de alarmas</span>
                    <p className="text-sm text-muted-foreground">
                      Prioridades, escalamiento automatico y registro de acciones
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Timer className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Historial completo</span>
                    <p className="text-sm text-muted-foreground">
                      Registro de accesos, eventos y tendencias historicas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Acceso movil 24/7</span>
                    <p className="text-sm text-muted-foreground">
                      Monitoree y reciba alertas desde su smartphone en cualquier momento
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
            Proteja su infraestructura con tecnologia inteligente
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Contactenos para una evaluacion de sus instalaciones y descubra
            como ATILAX puede mejorar la seguridad, eficiencia y control de sus operaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Contactar a un especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://panel.atilax.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver demo en vivo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/*
================================================================================
DOCUMENTACION DE IMAGENES REQUERIDAS - SECCION INFRAESTRUCTURA
================================================================================

1. infraestructura-hero-edificaciones.jpg
   - Descripcion: Vista panoramica mostrando diversidad de aplicaciones
   - Elementos: Conjunto residencial moderno, edificio corporativo y/o centro comercial
   - Estilo: Fotografia profesional, luz natural, ambiente urbano
   - Contexto: Venezuela, arquitectura moderna
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion introductoria principal

2. infraestructura-subestacion-electrica.jpg
   - Descripcion: Subestacion electrica moderna con transformadores
   - Elementos: Transformadores, lineas de alta tension, cercas de seguridad
   - Estilo: Fotografia industrial, cielo despejado
   - Contexto: Infraestructura electrica venezolana
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion Sector Electrico

3. infraestructura-estacion-bombeo-agua.jpg
   - Descripcion: Estacion de bombeo de agua potable
   - Elementos: Bombas industriales, tuberias, panel de control, tanques
   - Estilo: Fotografia industrial limpia
   - Contexto: Instalacion de servicios de agua
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion Sistemas de Agua

4. infraestructura-torre-telecomunicaciones.jpg
   - Descripcion: Torre de telecomunicaciones con antenas
   - Elementos: Torre metalica, antenas de diferentes tipos, caseta de equipos
   - Estilo: Fotografia tecnica, angulo que muestre altura
   - Contexto: Telecomunicaciones en Venezuela
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion Telecomunicaciones

5. infraestructura-conjunto-residencial.jpg
   - Descripcion: Entrada principal de conjunto residencial moderno
   - Elementos: Caseta de vigilancia, barrera vehicular, torniquete peatonal,
     camaras de seguridad, area verde
   - Estilo: Fotografia arquitectonica, luz diurna
   - Contexto: Urbanizacion o condominio en Venezuela
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion Conjuntos Residenciales

6. infraestructura-centro-comercial.jpg
   - Descripcion: Entrada o area comun de centro comercial
   - Elementos: Fachada moderna, estacionamiento, camaras de seguridad visibles,
     senalizacion de estacionamiento
   - Estilo: Fotografia comercial, bien iluminada
   - Contexto: Centro comercial venezolano
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion Centros Comerciales

7. infraestructura-dashboard-unificado.jpg
   - Descripcion: Captura de pantalla del dashboard ATILAX
   - Elementos:
     * Mapa con ubicaciones de instalaciones
     * Graficos de estado de sistemas (tanques, bombas)
     * Panel de alarmas activas
     * Indicadores de control de acceso
     * Estadisticas en tiempo real
   - Estilo: Interfaz moderna, colores corporativos ATILAX (azul #1E3A5F, naranja #F59E0B)
   - Formato: Screenshot o mockup profesional
   - Resolucion: 1920x1440px (4:3)
   - Uso: Seccion Centro de Control Unificado

NOTAS ADICIONALES:
- Todas las imagenes deben ser de alta calidad y profesionales
- Preferir contexto venezolano cuando sea posible
- Evitar marcas visibles de terceros
- Formato JPG para fotografias, PNG para graficos con transparencia
- Optimizar para web (compresion sin perdida visible de calidad)

================================================================================
*/
