import { Metadata } from "next";
import Link from "next/link";
import {
  Gauge,
  Droplets,
  Flame,
  Navigation,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Zap,
  Clock,
  TrendingDown,
  TrendingUp,
  FileText,
  Server,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Perforacion Direccional | ATILAX",
  description:
    "Monitoreo inteligente de perforacion petrolera: parametros mecanicos, lodo, gas, trayectoria y BOP en tiempo real. Desde el primer metro hasta la profundidad total.",
};

const benefits = [
  { value: "7", label: "Dashboards operacionales" },
  { value: "25+", label: "Alarmas inteligentes" },
  { value: "24/7", label: "Monitoreo continuo" },
  { value: "<48h", label: "Tiempo de instalacion" },
];

const modules = [
  {
    title: "Parametros Mecanicos",
    icon: Gauge,
    description:
      "ROP, WOB, Torque, RPM, SPP, Hook Load en tiempo real con gauges operacionales y calculo automatico de MSE.",
    features: [
      "6 gauges radiales en tiempo real",
      "Tendencias multi-eje 6h",
      "Calculo MSE automatico",
      "Drag & Torque vs baseline",
    ],
  },
  {
    title: "Sistema de Lodo y Pits",
    icon: Droplets,
    description:
      "Control completo del fluido: pit gain/loss, ECD, fill factor, deteccion temprana de influjos con diagrama SCADA animado.",
    features: [
      "Diagrama SVG animado de pits",
      "ECD vs ventana operacional",
      "Fill factor en tiempo real",
      "Propiedades de lodo por turno",
    ],
  },
  {
    title: "Gas Logging",
    icon: Flame,
    description:
      "Monitoreo C1-C5, H2S, CO2 con alertas de seguridad en tiempo real, correlacion con profundidad e indices geoquimicos.",
    features: [
      "Monitor H2S dedicado 3 niveles",
      "Cromatografia C1-C5 continua",
      "Ratios: Wetness, Character, Balance",
      "Correlacion gas vs profundidad",
    ],
  },
  {
    title: "Trayectoria Direccional",
    icon: Navigation,
    description:
      "Visualizacion VSP y vista en planta de la trayectoria del pozo vs. plan con tabla de encuestas MWD.",
    features: [
      "Diagrama VSP (TVD vs Departure)",
      "Vista en planta Norte vs Este",
      "Desviacion del plan en metros",
      "Factor de separacion anti-colision",
    ],
  },
  {
    title: "Estado del BOP",
    icon: Shield,
    description:
      "Monitoreo continuo del equipo de control de pozo mas critico de la operacion con diagrama del stack en tiempo real.",
    features: [
      "Estado visual del BOP stack",
      "Presion acumulador hidraulico",
      "Valvulas choke y kill line",
      "Historial de pruebas BOP",
    ],
  },
  {
    title: "KPIs y NPT",
    icon: BarChart3,
    description:
      "Analisis de desempeno: ROP promedio, clasificacion del tiempo productivo vs NPT, costos por metro y reportes automaticos.",
    features: [
      "Curva D vs T (plan vs real)",
      "Clasificacion NPT por categoria",
      "Costo por metro perforado",
      "Reporte DDR automatico",
    ],
  },
];

const earlyDetection = [
  {
    title: "Deteccion de KICK",
    severity: "CRITICAL",
    severityColor: "bg-red-500",
    description:
      "Sistema multi-condicion que detecta influjos antes de que se conviertan en blowouts. Combina pit gain, fill factor y presion de bombas con logica de Rule Engine.",
    conditions: [
      "Pit gain > 10 bbl sostenido por 2 min",
      "Fill factor < 75% con bomba activa",
      "Caida abrupta de SPP > 500 psi en < 60s",
      "Perdida de retorno > 30% del flujo inyectado",
    ],
  },
  {
    title: "Deteccion de H2S",
    severity: "CRITICAL / MAJOR / MINOR",
    severityColor: "bg-orange-500",
    description:
      "3 niveles de alerta (5ppm, 10ppm, 20ppm) con escalacion automatica a protocolo HSE. Monitor dedicado con indicador visual permanente.",
    conditions: [
      "Nivel 1 (>1 ppm): Alerta Perforador + HSE",
      "Nivel 2 (>10 ppm): Activar protocolo H2S",
      "Nivel 3 (>20 ppm): Evacuacion inmediata",
      "Notificacion SMS + WhatsApp + Telegram",
    ],
  },
  {
    title: "Alertas Hidraulicas",
    severity: "MAJOR",
    severityColor: "bg-amber-500",
    description:
      "Monitoreo continuo de ECD vs ventana operacional para prevenir perdidas de circulacion y fracturas de formacion.",
    conditions: [
      "ECD cerca de gradiente de fractura (-0.3 ppg)",
      "Perdida parcial de circulacion (retorno < 70%)",
      "Sobrepresion de bombas (SPP > limite)",
      "Temperatura de lodo fuera de rango (>80C)",
    ],
  },
];

const protocols = [
  {
    protocol: "WITS Level 0",
    version: "Serial/TCP",
    usage: "Equipos legacy, MWD, sensores de superficie",
  },
  {
    protocol: "WITSML",
    version: "1.x, 2.0",
    usage: "Plataformas modernas, integracion Halliburton/SLB",
  },
  {
    protocol: "MQTT",
    version: "3.x, 5.0",
    usage: "Sensores IoT, gateways industriales",
  },
  {
    protocol: "Modbus TCP/RTU",
    version: "—",
    usage: "PLCs de bombas, BOP controller, sensores",
  },
];

const dashboardPreviews = [
  {
    label: "Vista general del pozo en tiempo real",
    tag: "drilling_overview",
    description:
      "KPIs mecanicos, profundidad, gas total, ECD, pit gain y alarmas activas en una sola pantalla",
  },
  {
    label: "Gauges operacionales del perforador",
    tag: "drilling_mechanical",
    description:
      "6 gauges radiales: ROP, WOB, Torque, RPM, SPP, Hook Load con tendencias multi-eje",
  },
  {
    label: "Monitor de gases con alerta H2S activa",
    tag: "drilling_gas",
    description:
      "Cromatografia C1-C5, monitor H2S dedicado, indices geoquimicos y correlacion con profundidad",
  },
  {
    label: "Diagrama VSP de trayectoria direccional",
    tag: "drilling_trajectory",
    description:
      "Seccion vertical y vista en planta con trayectoria real vs plan y tabla de encuestas MWD",
  },
];

const competitorComparison = [
  {
    feature: "Costo de licencia",
    atilax: { value: "Competitivo", status: "check" },
    pason: { value: "Premium US", status: "cross" },
    wellview: { value: "Premium US", status: "cross" },
    nov: { value: "Premium US", status: "cross" },
  },
  {
    feature: "Personalizacion",
    atilax: { value: "Total", status: "check" },
    pason: { value: "Limitada", status: "warn" },
    wellview: { value: "Limitada", status: "warn" },
    nov: { value: "Limitada", status: "warn" },
  },
  {
    feature: "Soporte local Venezuela",
    atilax: { value: "Si", status: "check" },
    pason: { value: "No", status: "cross" },
    wellview: { value: "No", status: "cross" },
    nov: { value: "No", status: "cross" },
  },
  {
    feature: "Integracion WITS/WITSML",
    atilax: { value: "Si", status: "check" },
    pason: { value: "Si", status: "check" },
    wellview: { value: "Si", status: "check" },
    nov: { value: "Si", status: "check" },
  },
  {
    feature: "Analisis con IA/ML",
    atilax: { value: "Trendz", status: "check" },
    pason: { value: "Basico", status: "cross" },
    wellview: { value: "Limitado", status: "warn" },
    nov: { value: "No", status: "cross" },
  },
  {
    feature: "Demo en produccion",
    atilax: { value: "Disponible", status: "check" },
    pason: { value: "No", status: "cross" },
    wellview: { value: "No", status: "cross" },
    nov: { value: "No", status: "cross" },
  },
];

function ImagePlaceholder({
  label,
  tag,
  className = "",
}: {
  label: string;
  tag: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex flex-col items-center justify-center text-white/80 p-8 ${className}`}
    >
      <Activity className="h-12 w-12 mb-4 text-teal-400" />
      <p className="text-sm font-medium text-center mb-2">{label}</p>
      <span className="text-xs text-white/40 font-mono">[{tag}]</span>
    </div>
  );
}

function StatusIcon({ status }: { status: string }) {
  if (status === "check")
    return <span className="text-green-500 font-bold">&#10003;</span>;
  if (status === "cross")
    return <span className="text-red-500 font-bold">&#10007;</span>;
  return <span className="text-amber-500 font-bold">&#9888;</span>;
}

export default function PerforacionPage() {
  return (
    <>
      <PageHeader
        title="Monitoreo Inteligente de Perforacion"
        description="Atilax Drilling transforma los datos de tu taladro en decisiones operacionales en tiempo real. Monitorea parametros mecanicos, hidraulica, gases, trayectoria y BOP desde cualquier dispositivo, con alarmas inteligentes que alertan antes de que los problemas se conviertan en perdidas."
        badge="Desde el primer metro hasta la profundidad total"
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

      {/* Hero Image + CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Visibilidad completa de tu operacion
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Desde el spud hasta la profundidad total, Atilax Drilling te da
                control completo de lo que pasa en tu taladro. 7 dashboards
                especializados, 25+ alarmas inteligentes y reportes automaticos
                que eliminan horas de trabajo manual.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    Adquisicion via WITS Level 0, WITSML, MQTT y Modbus
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    Deteccion multi-condicion de KICK con 3 variables
                    simultaneas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    Reporte DDR automatico cada 12 horas sin intervencion manual
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    Instalacion en menos de 48 horas sobre taladro en operacion
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://panel.atilax.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary">
                    Ver Demo en Vivo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/contacto">
                  <Button size="lg" variant="outline">
                    Solicitar Propuesta
                  </Button>
                </Link>
              </div>
            </div>
            <ImagePlaceholder
              label="Operaciones de perforacion — sala de control con dashboards Atilax Drilling"
              tag="operaciones-perforacion-hero"
              className="aspect-[16/10] w-full"
            />
          </div>
        </div>
      </section>

      {/* Monitoring Modules */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modulos de Monitoreo
            </h2>
            <p className="text-lg text-muted-foreground">
              6 modulos especializados que cubren cada aspecto critico de la
              operacion de perforacion. Todos integrados, todos en tiempo real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <Card key={mod.title} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <mod.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{mod.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {mod.description}
                  </p>
                  <ul className="space-y-2">
                    {mod.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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

      {/* Early Detection Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="h-4 w-4" />
                Deteccion Temprana
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Capacidades de Deteccion Temprana
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                25+ alarmas inteligentes organizadas por severidad: CRITICAL,
                MAJOR, MINOR e INFO. Las alarmas criticas combinan multiples
                condiciones simultaneas para minimizar falsos positivos.
              </p>

              <div className="space-y-6">
                {earlyDetection.map((detection) => (
                  <div
                    key={detection.title}
                    className="bg-white rounded-xl border p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-2 py-0.5 text-xs font-bold text-white rounded ${detection.severityColor}`}
                      >
                        {detection.severity}
                      </span>
                      <h3 className="font-bold">{detection.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {detection.description}
                    </p>
                    <ul className="space-y-1.5">
                      {detection.conditions.map((condition) => (
                        <li
                          key={condition}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <AlertTriangle className="h-3 w-3 mt-0.5 text-red-400 shrink-0" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-24">
              <ImagePlaceholder
                label="Sistema de alarmas multi-condicion — deteccion de KICK con 3 variables simultaneas"
                tag="alarmas-perforacion-multicondicion"
                className="aspect-[4/5] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Protocols */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Server className="h-4 w-4" />
              Integracion con Equipos de Campo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protocolos Industriales Soportados
            </h2>
            <p className="text-lg text-muted-foreground">
              Atilax Drilling se conecta a cualquier equipo de perforacion
              mediante protocolos estandar de la industria. Sin hardware
              propietario.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Protocolo
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Version
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Uso Tipico
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {protocols.map((proto, idx) => (
                    <tr
                      key={proto.protocol}
                      className={idx % 2 === 0 ? "bg-muted/20" : ""}
                    >
                      <td className="px-6 py-4 font-semibold text-sm">
                        {proto.protocol}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {proto.version}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {proto.usage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Mapeo automatico de WITS Records 1, 2, 6 y 7 a telemetria Atilax.
              Compatible con equipos Halliburton, Schlumberger, Baker Hughes y
              equipos legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Previews */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              7 Dashboards Especializados
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada rol operacional tiene su vista optimizada: perforador,
              supervisor, ingeniero direccional, geologo, mud engineer, HSE y
              gerencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dashboardPreviews.map((preview) => (
              <Card key={preview.tag} className="overflow-hidden">
                <ImagePlaceholder
                  label={preview.label}
                  tag={preview.tag}
                  className="aspect-[16/9] rounded-none"
                />
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{preview.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {preview.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with real data */}
      <section className="py-20 bg-primary text-white">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios para Empresas de Perforacion
            </h2>
            <p className="text-lg text-white/70">
              Numeros reales basados en operaciones de perforacion en Venezuela y
              benchmarks internacionales de la industria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: TrendingDown,
                value: "30-50%",
                label: "Reduccion en tiempo NPT",
                desc: "Deteccion temprana de problemas mecanicos, hidraulicos y geologicos antes de que escalen",
              },
              {
                icon: TrendingUp,
                value: "15-25%",
                label: "Mejora en ROP promedio",
                desc: "Analisis de MSE y optimizacion de parametros WOB/RPM/Torque por formacion",
              },
              {
                icon: Shield,
                value: "70%",
                label: "Reduccion riesgo blowout",
                desc: "Deteccion multi-condicion de KICK combinando pit gain, fill factor y presion",
              },
              {
                icon: FileText,
                value: "2h/dia",
                label: "Ahorro en reportes DDR",
                desc: "Reporte diario de perforacion generado automaticamente cada 12 horas",
              },
              {
                icon: Clock,
                value: "99.9%",
                label: "Uptime del sistema",
                desc: "Arquitectura de alta disponibilidad disenada para operaciones 24/7",
              },
              {
                icon: Zap,
                value: "<48h",
                label: "Instalacion sobre taladro",
                desc: "Conexion rapida via WITS/MQTT sin modificar los sistemas existentes del rig",
              },
            ].map((benefit) => (
              <div
                key={benefit.label}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <benefit.icon className="h-8 w-8 text-secondary mb-3" />
                <div className="text-2xl font-bold text-secondary mb-1">
                  {benefit.value}
                </div>
                <div className="font-semibold mb-2">{benefit.label}</div>
                <p className="text-sm text-white/60">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Atilax vs. Competencia Internacional
            </h2>
            <p className="text-lg text-muted-foreground">
              Comparativa objetiva con los principales proveedores de monitoreo
              de perforacion a nivel mundial.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-4 text-left text-sm font-semibold">
                      Caracteristica
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-bold text-primary">
                      ATILAX
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground">
                      PASON
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground">
                      Wellview
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-muted-foreground">
                      NOV IntelliServ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={idx % 2 === 0 ? "bg-muted/10" : ""}
                    >
                      <td className="px-4 py-3 text-sm font-medium">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center text-sm">
                        <StatusIcon status={row.atilax.status} />{" "}
                        <span className="font-medium">{row.atilax.value}</span>
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                        <StatusIcon status={row.pason.status} />{" "}
                        {row.pason.value}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                        <StatusIcon status={row.wellview.status} />{" "}
                        {row.wellview.value}
                      </td>
                      <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                        <StatusIcon status={row.nov.status} /> {row.nov.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tienes un taladro perforando ahora mismo?
          </h2>
          <p className="text-lg text-white/70 mb-2 max-w-2xl mx-auto">
            Conecta Atilax Drilling en menos de 48 horas.
          </p>
          <p className="text-xl font-semibold text-secondary mb-8">
            Primeros 30 dias gratis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Solicitar Demo Tecnica
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Hablar con un Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
