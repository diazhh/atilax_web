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
import Image from "next/image";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Industria Petrolera | ATILAX",
  description:
    "Monitoreo IoT integral para operaciones petroleras: pozos BM, BCP y Gas Lift, estaciones de flujo, tanques de almacenamiento y equipos de proceso.",
};

const benefits = [
  { value: "+33%", label: "Potencial de produccion" },
  { value: "63", label: "Pozos monitoreados" },
  { value: "15", label: "Motores de IA" },
  { value: "<5min", label: "Deteccion de anomalias" },
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
              <Image
                src="/images/capturas/monitoreo/01_monitoreo_mosaico_63_pozos.png"
                alt="Centro de monitoreo ATILAX - 63 pozos en tiempo real con KPIs de produccion"
                width={1920}
                height={1080}
                className="rounded-2xl w-full h-auto shadow-xl"
                priority
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
                  {method.id === "bm" ? (
                    <Image
                      src="/images/capturas/monitoreo/05_detalle_srp_kpis.png"
                      alt="Detalle de pozo SRP - KPIs de bombeo mecanico en tiempo real"
                      width={1920}
                      height={1080}
                      className="rounded-2xl w-full h-auto shadow-lg"
                    />
                  ) : method.id === "bcp" ? (
                    <Image
                      src="/images/capturas/monitoreo/05_detalle_esp_kpis.png"
                      alt="Detalle de pozo ESP - KPIs de bombeo electrosumergible"
                      width={1920}
                      height={1080}
                      className="rounded-2xl w-full h-auto shadow-lg"
                    />
                  ) : (
                    <Image
                      src="/images/capturas/optimizacion/03_optimizacion_detalle_ranking.png"
                      alt="Ranking de optimizacion de pozos Gas Lift"
                      width={1920}
                      height={1080}
                      className="rounded-2xl w-full h-auto shadow-lg"
                    />
                  )}
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
            {infrastructure.map((item, idx) => (
              <Card key={item.title} className="overflow-hidden">
                <Image
                  src={idx === 0 ? "/images/capturas/monitoreo/02_monitoreo_mosaico_scroll.png"
                    : idx === 1 ? "/images/capturas/general/02_administracion_tabla_pozos.png"
                    : idx === 2 ? "/images/capturas/monitoreo/06_detalle_esp_tendencia.png"
                    : "/images/capturas/general/04_thingsboard_dashboards.png"}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto aspect-[16/9] object-cover"
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

      {/* Production Results */}
      <section className="py-20 bg-primary text-white">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados Comprobados
            </h2>
            <p className="text-lg text-white/70">
              Plataforma validada con datos reales de 3 campos petroleros venezolanos,
              63 pozos y 4 metodos de levantamiento artificial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { field: "Cerro Negro", region: "Faja del Orinoco", crude: "Extra-pesado (6-12 API)", wells: 27, bpd: "45,225" },
              { field: "Boscan", region: "Lago de Maracaibo", crude: "Pesado/Mediano (18-25 API)", wells: 24, bpd: "40,249" },
              { field: "Anaco", region: "Oriente", crude: "Liviano (28-36 API)", wells: 12, bpd: "12,828" },
            ].map((f) => (
              <div key={f.field} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-secondary mb-1">{f.field}</h3>
                <p className="text-sm text-white/60 mb-4">{f.region}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-white/70">Crudo</span><span>{f.crude}</span></div>
                  <div className="flex justify-between"><span className="text-white/70">Pozos</span><span className="font-bold">{f.wells}</span></div>
                  <div className="flex justify-between"><span className="text-white/70">Produccion</span><span className="font-bold text-secondary">{f.bpd} BPD</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 rounded-xl p-8">
            {[
              { value: "98,302", label: "BPD Produccion actual" },
              { value: "130,986", label: "BPD Produccion optimizada" },
              { value: "+32,684", label: "BPD Ganancia potencial" },
              { value: "+33.2%", label: "Incremento de produccion" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{s.value}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
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
                33 Widgets Especializados en 4 Dashboards
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Visualice el estado de los 63 pozos en tiempo real con navegacion jerarquica:
                campo, macolla, pozo, subsistema. Dashboards de monitoreo, optimizacion y administracion.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Analisis nodal integrado</span>
                    <p className="text-sm text-muted-foreground">
                      Curvas IPR y VLP con punto de operacion, 5 modelos IPR + Beggs & Brill
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Waterfall de produccion</span>
                    <p className="text-sm text-muted-foreground">
                      Visualizacion del impacto de cada optimizacion: base, ganancias por pozo, total optimizado
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Well Health Score 0-100</span>
                    <p className="text-sm text-muted-foreground">
                      Evaluacion de salud con radar de 5 componentes: mecanico, electrico, hidraulico, produccion, eficiencia
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/soluciones/pozos">
                  <Button variant="outline">Ver monitoreo de pozos</Button>
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
              <Image
                src="/images/capturas/monitoreo/06_detalle_srp_tendencia.png"
                alt="Dashboard de campo petrolero - Tendencias de produccion en tiempo real"
                width={1920}
                height={1080}
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              <TrendingUp className="h-4 w-4" />
              Motor de Optimizacion con IA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              15 Motores de Calculo con Inteligencia Artificial
            </h2>
            <p className="text-lg text-muted-foreground">
              Procesamiento continuo en tres capas: monitoreo en tiempo real (cada 5 min),
              diagnostico y anomalias (horario), y optimizacion avanzada (diario).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Analisis Nodal", desc: "5 modelos IPR + VLP Beggs & Brill para encontrar el punto optimo de operacion de cada pozo" },
              { title: "Pronostico DCA", desc: "Curvas de declinacion Arps + Monte Carlo probabilistico con bandas P10/P50/P90" },
              { title: "Deteccion de Anomalias", desc: "Sistema hibrido: CUSUM estadistico + 24 reglas especificas + LSTM-Autoencoder por pozo" },
              { title: "Prediccion de Fallas", desc: "XGBoost clasificador que anticipa fallas ESP con 30 dias de anticipacion" },
              { title: "NSGA-II Multi-Objetivo", desc: "Optimizacion simultanea de produccion, energia y vida util del equipo con frente de Pareto" },
              { title: "Reinforcement Learning", desc: "Agente PPO con safety gates para control autonomo supervisado de setpoints" },
            ].map((cap) => (
              <div key={cap.title} className="bg-white rounded-xl p-6 border shadow-sm">
                <h3 className="font-bold text-primary mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Optimizacion por Tipo de Levantamiento</h3>
              <div className="space-y-4">
                {[
                  { type: "ESP", variable: "Frecuencia (30-90 Hz)", desc: "Evaluacion BEP, leyes de afinidad, consumo especifico kWh/bbl" },
                  { type: "SRP", variable: "SPM (4-14 cpm)", desc: "Fillage vs SPM, carta dinamometrica Gibbs, clasificacion IA" },
                  { type: "PCP", variable: "RPM (50-400)", desc: "Balance torque/desgaste, modelo Arrhenius para vida del elastomero" },
                  { type: "Gas Lift", variable: "Inyeccion (MSCFD)", desc: "Curvas GLPC, deteccion casing heading, asignacion multi-pozo equal-slope" },
                ].map((opt) => (
                  <div key={opt.type} className="flex gap-4 p-4 bg-white rounded-lg border">
                    <div className="font-bold text-primary shrink-0 w-20">{opt.type}</div>
                    <div>
                      <div className="text-sm font-medium">{opt.variable}</div>
                      <div className="text-xs text-muted-foreground">{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/soluciones/optimizacion">
                  <Button size="lg" className="bg-primary">
                    Conocer el servicio de optimizacion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/capturas/optimizacion/02_optimizacion_ranking_scatter.png"
                alt="Ranking de oportunidades y scatter eficiencia vs salud"
                width={1920}
                height={1080}
                className="rounded-2xl w-full h-auto shadow-xl"
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
