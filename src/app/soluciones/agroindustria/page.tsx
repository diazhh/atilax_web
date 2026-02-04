import { Metadata } from "next";
import Link from "next/link";
import {
  Wheat,
  Droplets,
  Sun,
  Tractor,
  Thermometer,
  CloudRain,
  MapPin,
  Gauge,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sprout,
  Beef,
  Factory,
  Shield
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Agroindustria | ATILAX",
  description:
    "Monitoreo IoT para el sector agroindustrial: riego tecnificado, bombeo solar, maquinaria agricola y seguridad de instalaciones rurales.",
};

const stats = [
  { value: "20-70%", label: "Incremento de productividad" },
  { value: "60%", label: "Reduccion de costos" },
  { value: "30%", label: "Ahorro de agua" },
  { value: "24/7", label: "Monitoreo automatico" },
];

const solutions = [
  {
    icon: Droplets,
    title: "Riego Tecnificado e Inteligente",
    description: "Optimizacion del uso del agua con sensores de humedad y sistemas de riego automatizado.",
    features: [
      "Sensores de humedad del suelo en multiples profundidades",
      "Control automatico de valvulas y bombas",
      "Programacion por zonas y horarios",
      "Integracion con datos meteorologicos",
      "Ahorro de agua hasta 30%"
    ],
    image: "agroindustria-riego-tecnificado.jpg"
  },
  {
    icon: Sun,
    title: "Sistemas de Bombeo Solar",
    description: "Monitoreo de bombas solares para riego en zonas remotas sin acceso a red electrica.",
    features: [
      "Estado de paneles solares y generacion",
      "Nivel de bateria y autonomia",
      "Caudal y presion de bombeo",
      "Alertas de falla y mantenimiento",
      "Operacion 100% off-grid"
    ],
    image: "agroindustria-bombeo-solar.jpg"
  },
  {
    icon: Tractor,
    title: "Gestion de Maquinaria Agricola",
    description: "Rastreo GPS y telemetria de tractores, cosechadoras y equipos de siembra.",
    features: [
      "Ubicacion en tiempo real de toda la flota",
      "Horas de operacion y consumo de combustible",
      "Geocercas para control de areas de trabajo",
      "Comportamiento del operador",
      "Optimizacion de rutas de cosecha"
    ],
    image: "agroindustria-maquinaria-tractores.jpg"
  },
  {
    icon: Factory,
    title: "Plantas de Procesamiento",
    description: "Monitoreo de plantas de procesamiento agricola: molinos, silos, empacadoras.",
    features: [
      "Temperatura y humedad de silos",
      "Nivel de llenado de tanques y tolvas",
      "Vibracion de motores y equipos",
      "Control de cadena de frio",
      "Eficiencia de lineas de produccion"
    ],
    image: "agroindustria-planta-procesamiento.jpg"
  },
];

const weatherStation = {
  title: "Estaciones Meteorologicas",
  description: "Datos climaticos en tiempo real para toma de decisiones agricolas.",
  variables: [
    { icon: Thermometer, name: "Temperatura ambiente", unit: "C" },
    { icon: Droplets, name: "Humedad relativa", unit: "%" },
    { icon: CloudRain, name: "Precipitacion", unit: "mm" },
    { icon: Sun, name: "Radiacion solar", unit: "W/m2" },
    { icon: Activity, name: "Velocidad del viento", unit: "km/h" },
    { icon: Gauge, name: "Presion atmosferica", unit: "hPa" },
  ],
  image: "agroindustria-estacion-meteorologica.jpg"
};

const sectors = [
  { icon: Wheat, name: "Cereales y Granos", examples: "Maiz, arroz, sorgo" },
  { icon: Sprout, name: "Hortalizas", examples: "Tomate, pimenton, cebolla" },
  { icon: Sun, name: "Fruticultura", examples: "Citricos, mango, pina" },
  { icon: Beef, name: "Ganaderia", examples: "Bovino, porcino, avicola" },
  { icon: Factory, name: "Agroindustria", examples: "Procesamiento, almacenamiento" },
];

const regions = [
  { name: "Llanos", description: "Barinas, Portuguesa, Cojedes - Cereales y ganaderia" },
  { name: "Andes", description: "Merida, Tachira, Trujillo - Hortalizas y cafe" },
  { name: "Centro-Occidental", description: "Lara, Yaracuy - Cana de azucar y hortalizas" },
  { name: "Oriente", description: "Monagas, Anzoategui - Ganaderia y palma" },
];

export default function AgroindustriaPage() {
  return (
    <>
      <PageHeader
        title="Agroindustria"
        description="Agricultura 4.0 para Venezuela: riego inteligente, bombeo solar, monitoreo de maquinaria y estaciones meteorologicas conectadas."
        badge="Sector Agricola"
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
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <sector.icon className="h-5 w-5 text-green-600" />
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
                Agricultura de Precision para Venezuela
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                La Agricultura 4.0 esta transformando el sector agricola venezolano.
                ATILAX integra IoT, sensores de campo y analisis de datos para
                optimizar la produccion y reducir costos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Alianza con AVAT (Asociacion Venezolana de Agrotecnologia)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Compatible con sensores Metos y estaciones climaticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Conectividad rural con LoRaWAN y satelite</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>Energia solar para zonas sin acceso a red electrica</span>
                </li>
              </ul>
              <Link href="/contacto">
                <Button size="lg" className="bg-primary">
                  Solicitar asesoria agricola
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <ImagePlaceholder
                label="agroindustria-hero-campo-venezolano.jpg"
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
              Soluciones para el Campo
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnologia adaptada a las necesidades del productor agricola venezolano.
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
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <solution.icon className="h-6 w-6 text-green-600" />
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

      {/* Weather Station */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <CloudRain className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">{weatherStation.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                {weatherStation.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {weatherStation.variables.map((variable) => (
                  <div
                    key={variable.name}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <variable.icon className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium">{variable.name}</div>
                      <div className="text-xs text-muted-foreground">{variable.unit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImagePlaceholder
                label={weatherStation.image}
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Cobertura Regional</h2>
            <p className="text-muted-foreground">
              Presencia en las principales zonas agricolas de Venezuela
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <Card key={region.name}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">{region.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder
                label="agroindustria-seguridad-finca.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">Seguridad Rural</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Proteja sus instalaciones agricolas con vigilancia inteligente.
                Camaras con IA para deteccion de intrusos en fincas, galeras y almacenes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Deteccion de personas y vehiculos no autorizados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Alertas instantaneas al celular</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Grabacion local con bajo consumo de datos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>Operacion con energia solar</span>
                </li>
              </ul>
              <Link href="/soluciones/seguridad">
                <Button variant="outline">
                  Ver solucion de seguridad
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Dashboard Agricola
            </h2>
            <p className="text-muted-foreground text-lg">
              Visualice el estado de su finca desde cualquier dispositivo.
              Datos de clima, riego, maquinaria y seguridad en un solo lugar.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              label="agroindustria-dashboard-finca.jpg"
              className="aspect-[16/9] rounded-2xl shadow-2xl"
              iconSize="lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Modernice su operacion agricola
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Contactenos para una evaluacion gratuita de su finca o planta agroindustrial.
            Descubra como la tecnologia puede incrementar su productividad.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Agendar visita a finca
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
