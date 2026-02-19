import { Metadata } from "next";
import Link from "next/link";
import {
  Mountain,
  Truck,
  Shield,
  Gauge,
  Activity,
  AlertTriangle,
  MapPin,
  Thermometer,
  Droplets,
  ArrowRight,
  CheckCircle2,
  HardHat,
  Pickaxe,
  Scale,
  Leaf
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mineria | ATILAX",
  description:
    "Monitoreo IoT para operaciones mineras: maquinaria pesada, plantas de procesamiento, seguridad perimetral y control ambiental en el Arco Minero del Orinoco.",
};

const stats = [
  { value: "+13%", label: "Crecimiento del sector Q1 2025" },
  { value: "32%", label: "Aumento produccion oro 2024" },
  { value: "24/7", label: "Monitoreo continuo" },
  { value: "70-90%", label: "Reduccion de robos" },
];

const solutions = [
  {
    icon: Truck,
    title: "Monitoreo de Maquinaria Pesada",
    description: "Control en tiempo real de excavadoras, cargadores, camiones mineros y equipos de perforacion.",
    features: [
      "Horas de operacion y consumo de combustible",
      "Temperatura de motor y transmision",
      "Presion hidraulica y nivel de aceite",
      "Ubicacion GPS y geocercas",
      "Alertas de mantenimiento preventivo"
    ],
    image: "mineria-maquinaria-pesada.jpg"
  },
  {
    icon: Activity,
    title: "Plantas de Procesamiento",
    description: "Monitoreo de molinos, trituradoras, celdas de flotacion y equipos de lixiviacion.",
    features: [
      "Vibracion de molinos de bolas",
      "Nivel de tanques de lixiviacion",
      "Densidad de pulpa",
      "Temperatura de proceso",
      "Eficiencia de recuperacion"
    ],
    image: "mineria-planta-procesamiento.jpg"
  },
  {
    icon: Shield,
    title: "Seguridad Perimetral con IA",
    description: "Proteccion contra la mineria ilegal y el robo de mineral con camaras inteligentes.",
    features: [
      "Deteccion de intrusos 24/7",
      "Reconocimiento de vehiculos y placas",
      "Control de acceso biometrico",
      "Alertas con evidencia visual",
      "Reduccion 70-90% de robos"
    ],
    image: "mineria-seguridad-perimetral.jpg"
  },
  {
    icon: Leaf,
    title: "Monitoreo Ambiental",
    description: "Cumplimiento de regulaciones ambientales con sensores de calidad de agua y aire.",
    features: [
      "Calidad de agua (pH, turbidez, metales)",
      "Particulas en suspension (PM2.5, PM10)",
      "Nivel de ruido ambiental",
      "Alertas de derrames",
      "Reportes para entes reguladores"
    ],
    image: "mineria-monitoreo-ambiental.jpg"
  },
];

const fleetManagement = {
  title: "Gestion de Flota Minera",
  description: "Control completo de todos los vehiculos y equipos moviles en la operacion minera.",
  features: [
    {
      icon: MapPin,
      title: "Ubicacion en tiempo real",
      description: "GPS de alta precision (<5m) para toda la flota"
    },
    {
      icon: Gauge,
      title: "Telemetria vehicular",
      description: "Consumo, velocidad, RPM y codigos de falla OBD-II"
    },
    {
      icon: HardHat,
      title: "Comportamiento del operador",
      description: "Aceleraciones bruscas, excesos de velocidad, fatiga"
    },
    {
      icon: Scale,
      title: "Control de carga",
      description: "Peso de carga, ciclos de acarreo y productividad"
    },
  ],
  image: "mineria-flota-camiones.jpg"
};

const arcoMinero = {
  title: "Disenado para el Arco Minero del Orinoco",
  description: "Soluciones adaptadas a las condiciones unicas de la mineria venezolana.",
  challenges: [
    "Zonas remotas sin cobertura celular",
    "Entornos hostiles con polvo y humedad",
    "Necesidad de operacion autonoma",
    "Requirimiento de trazabilidad de mineral"
  ],
  solutions: [
    "Conectividad LoRaWAN y satelital",
    "Equipos industriales IP67",
    "Edge computing con almacenamiento local",
    "Integracion con sistemas de pesaje"
  ],
  image: "mineria-arco-minero-orinoco.jpg"
};

const minerals = [
  { name: "Oro", icon: "Au", color: "yellow" },
  { name: "Hierro", icon: "Fe", color: "red" },
  { name: "Bauxita", icon: "Al", color: "gray" },
  { name: "Coltan", icon: "Ta", color: "blue" },
  { name: "Diamantes", icon: "C", color: "cyan" },
  { name: "Carbón", icon: "C", color: "slate" },
];

export default function MineriaPage() {
  return (
    <>
      <PageHeader
        title="Mineria"
        description="Plataforma IoT para operaciones mineras: desde la extraccion hasta el procesamiento. Seguridad, productividad y cumplimiento ambiental en una sola solucion."
        badge="Sector Minero"
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

      {/* Minerals Supported */}
      <section className="py-12 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">Aplicable a diversos minerales</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {minerals.map((mineral) => (
              <div
                key={mineral.name}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-sm border"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${
                  mineral.color === "yellow" ? "bg-yellow-500" :
                  mineral.color === "red" ? "bg-red-500" :
                  mineral.color === "gray" ? "bg-gray-500" :
                  mineral.color === "blue" ? "bg-blue-500" :
                  mineral.color === "cyan" ? "bg-cyan-500" : "bg-slate-700"
                }`}>
                  {mineral.icon}
                </div>
                <span className="font-medium">{mineral.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluciones para Operaciones Mineras
            </h2>
            <p className="text-lg text-muted-foreground">
              Monitoreo integral desde la extraccion hasta el despacho de mineral procesado.
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
                    src="/images/stock/mineria_operacion.jpg"
                    alt="Monitoreo de maquinaria pesada minera - Excavadoras y camiones instrumentados"
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

      {/* Fleet Management */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">{fleetManagement.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                {fleetManagement.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {fleetManagement.features.map((feature) => (
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
                src="/images/stock/mineria_excavadora.jpg"
                alt="Gestion de flota minera - Camiones y maquinaria pesada con telemetria"
                width={1200}
                height={800}
                className="aspect-[4/3] rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arco Minero Section */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/stock/mineria_procesamiento.jpg"
                alt="Arco Minero del Orinoco - Operaciones mineras con monitoreo digital"
                width={1200}
                height={800}
                className="aspect-[4/3] rounded-2xl object-cover w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold">{arcoMinero.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {arcoMinero.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Desafios
                  </h4>
                  <ul className="space-y-2">
                    {arcoMinero.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-sm text-red-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Soluciones ATILAX
                  </h4>
                  <ul className="space-y-2">
                    {arcoMinero.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-2 text-sm text-green-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Centro de Control Minero
            </h2>
            <p className="text-muted-foreground text-lg">
              Dashboard unificado para visualizar toda la operacion minera en tiempo real.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/stock/iot_dashboard.jpg"
              alt="Centro de control minero - Dashboard IoT de monitoreo integrado"
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
            Optimice su operacion minera
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Desde pequenas operaciones hasta grandes minas a cielo abierto,
            ATILAX se adapta a sus necesidades de monitoreo y control.
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
