import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Gauge,
  Thermometer,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Wind,
  Zap,
  Radio,
  Eye,
  Shield,
  Layers,
  TrendingUp,
  MapPin,
  Server,
  Bell,
  LineChart,
  CircleDot,
  Cpu,
  Droplets,
  Settings,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Monitoreo de Pozos Petroleros | ATILAX",
  description:
    "Monitoreo en tiempo real de pozos petroleros: ESP, Bombeo Mecanico, BCP y Gas Lift. Telemetria completa, deteccion automatica de anomalias y analitica avanzada.",
};

const benefits = [
  { value: "4", label: "Metodos de levantamiento", icon: Layers },
  { value: "24/7", label: "Telemetria continua", icon: Radio },
  { value: "20+", label: "Variables por pozo", icon: BarChart3 },
  { value: "<5min", label: "Deteccion de anomalias", icon: AlertTriangle },
];

const liftingMethods = [
  {
    id: "esp",
    title: "Bombeo Electrosumergible (ESP)",
    subtitle: "Variador de Frecuencia + Motor Sumergible + Bomba Centrifuga",
    icon: Zap,
    color: "bg-blue-500",
    colorLight: "bg-blue-50",
    colorText: "text-blue-600",
    description:
      "Sistema de alta capacidad para pozos de mediana a alta productividad. Monitoreo completo del conjunto motor-bomba sumergible con control de frecuencia via VSD.",
    telemetry: [
      { variable: "Caudal de produccion", unit: "BPD", key: "flow_rate_bpd" },
      { variable: "Frecuencia del VSD", unit: "Hz", key: "vsd_frequency_hz" },
      { variable: "Corriente del motor", unit: "A", key: "motor_current_a" },
      { variable: "Voltaje del motor", unit: "V", key: "motor_voltage_v" },
      { variable: "Potencia consumida", unit: "kW", key: "motor_power_kw" },
      { variable: "Temperatura del motor", unit: "F", key: "motor_temp_f" },
      { variable: "Presion de intake", unit: "PSI", key: "intake_pressure_psi" },
      { variable: "Presion de descarga", unit: "PSI", key: "discharge_pressure_psi" },
      { variable: "Vibracion (X, Y)", unit: "IPS", key: "vibration_ips" },
      { variable: "Presion en cabezal (THP)", unit: "PSI", key: "thp_psi" },
      { variable: "Presion de revestidor (CHP)", unit: "PSI", key: "chp_psi" },
      { variable: "Temperatura de cabezal", unit: "F", key: "tht_f" },
      { variable: "Resistencia de aislamiento", unit: "MOhm", key: "insulation_mohm" },
      { variable: "Eficiencia de bomba", unit: "%", key: "pump_efficiency_pct" },
    ],
    analytics: [
      "Punto de operacion vs BEP (Best Efficiency Point)",
      "Monitoreo de temperatura con umbrales dinamicos",
      "Analisis de vibracion para deteccion de desgaste",
      "Calculo de eficiencia hidraulica en tiempo real",
      "Seguimiento de resistencia de aislamiento del motor",
      "Deteccion de operacion fuera del rango optimo de bomba",
    ],
    anomalies: [
      "Degradacion de bomba (perdida de eficiencia progresiva)",
      "Sobrecalentamiento del motor (>350 F)",
      "Vibracion excesiva (>2.0 IPS)",
      "Interferencia de gas en la succion",
      "Fluctuacion electrica (voltaje/corriente)",
      "Deriva de sensores y lecturas atascadas",
    ],
    image: "pozos-esp-bomba-electrosumergible.jpg",
  },
  {
    id: "srp",
    title: "Bombeo Mecanico (SRP)",
    subtitle: "Balancin + Sarta de Cabillas + Bomba de Subsuelo",
    icon: Activity,
    color: "bg-amber-500",
    colorLight: "bg-amber-50",
    colorText: "text-amber-600",
    description:
      "El metodo de levantamiento mas utilizado. Monitoreo completo de la unidad de superficie con analisis de carta dinamometrica para diagnostico de la bomba de subsuelo.",
    telemetry: [
      { variable: "Caudal de produccion", unit: "BPD", key: "flow_rate_bpd" },
      { variable: "Carreras por minuto", unit: "SPM", key: "spm" },
      { variable: "Carga maxima del vastago", unit: "lb", key: "load_lb" },
      { variable: "Llenado de bomba (fillage)", unit: "%", key: "pump_fillage_pct" },
      { variable: "Corriente del motor", unit: "A", key: "motor_current_a" },
      { variable: "Potencia consumida", unit: "kW", key: "motor_power_kw" },
      { variable: "Presion en cabezal (THP)", unit: "PSI", key: "thp_psi" },
      { variable: "Presion de revestidor (CHP)", unit: "PSI", key: "chp_psi" },
      { variable: "Nivel de fluido", unit: "ft", key: "fluid_level_ft" },
      { variable: "Carta dinamometrica", unit: "JSON", key: "dynamo_card_surface" },
      { variable: "Contador de carreras", unit: "-", key: "stroke_counter" },
    ],
    analytics: [
      "Clasificacion automatica de carta dinamometrica",
      "Calculo de llenado de bomba (fillage) en tiempo real",
      "Deteccion de golpe de fluido por patron de carga",
      "Calculo de desplazamiento y eficiencia volumetrica",
      "Monitoreo de nivel de fluido en el anular",
      "Comparacion SPM actual vs recomendado",
    ],
    anomalies: [
      "Golpe de fluido (fluid pound)",
      "Interferencia de gas (gas lock)",
      "Fuga de valvula viajera o fija",
      "Plunger desgastado",
      "Cabilla partida o atascada",
      "Desbalance del contrabalance",
    ],
    image: "pozos-srp-bombeo-mecanico.jpg",
  },
  {
    id: "pcp",
    title: "Bombeo de Cavidad Progresiva (PCP)",
    subtitle: "Variador de superficie + Rotor helicoidal + Estator elastomerico",
    icon: Gauge,
    color: "bg-green-500",
    colorLight: "bg-green-50",
    colorText: "text-green-600",
    description:
      "Solucion preferida para crudos pesados y extra-pesados de la Faja del Orinoco. Alta tolerancia a arena, solidos y fluidos viscosos.",
    telemetry: [
      { variable: "Caudal de produccion", unit: "BPD", key: "flow_rate_bpd" },
      { variable: "RPM del variador", unit: "RPM", key: "speed_rpm" },
      { variable: "Torque del variador", unit: "ft-lb", key: "drive_torque_ftlb" },
      { variable: "Corriente del motor", unit: "A", key: "motor_current_a" },
      { variable: "Potencia consumida", unit: "kW", key: "motor_power_kw" },
      { variable: "Presion en cabezal (THP)", unit: "PSI", key: "thp_psi" },
      { variable: "Presion de revestidor (CHP)", unit: "PSI", key: "chp_psi" },
      { variable: "Presion de intake", unit: "PSI", key: "intake_pressure_psi" },
      { variable: "Porcentaje de arena", unit: "%", key: "sand_pct" },
      { variable: "Eficiencia volumetrica", unit: "%", key: "pump_efficiency_pct" },
    ],
    analytics: [
      "Calculo de torque vs diferencial de presion",
      "Indicador de desgaste del elastomero (0-1.0)",
      "Eficiencia volumetrica en tiempo real",
      "Monitoreo de torque como % del maximo permitido",
      "Deteccion de produccion de arena por tendencia de torque",
      "Estimacion de vida util restante del estator",
    ],
    anomalies: [
      "Desgaste critico del elastomero (indicador >0.7)",
      "Torque excesivo (>85% del maximo)",
      "Produccion de arena incrementada",
      "Bomba descebada (perdida de succion)",
      "Rotura de cabillas o sarta",
      "Falla del variador de superficie",
    ],
    image: "pozos-pcp-cavidad-progresiva.jpg",
  },
  {
    id: "gaslift",
    title: "Levantamiento por Gas (Gas Lift)",
    subtitle: "Compresor + Valvulas de inyeccion + Orificio calibrado",
    icon: Wind,
    color: "bg-purple-500",
    colorLight: "bg-purple-50",
    colorText: "text-purple-600",
    description:
      "Sistema de inyeccion continua de gas para pozos de alta productividad y crudos livianos. Control preciso del volumen de gas para maximizar la produccion.",
    telemetry: [
      { variable: "Caudal de produccion", unit: "BPD", key: "flow_rate_bpd" },
      { variable: "Tasa de inyeccion de gas", unit: "MSCFD", key: "gl_injection_rate_mscfd" },
      { variable: "Presion de inyeccion", unit: "PSI", key: "gl_injection_pressure_psi" },
      { variable: "Tamano del orificio (choke)", unit: "1/64\"", key: "choke_size_64ths" },
      { variable: "Presion en cabezal (THP)", unit: "PSI", key: "thp_psi" },
      { variable: "Presion de revestidor (CHP)", unit: "PSI", key: "chp_psi" },
      { variable: "Temperatura de cabezal", unit: "F", key: "tht_f" },
      { variable: "Corte de agua", unit: "%", key: "water_cut_pct" },
      { variable: "Relacion gas-aceite (GOR)", unit: "SCF/STB", key: "gor_scf_stb" },
    ],
    analytics: [
      "Curva GLPC (Gas Lift Performance Curve)",
      "Punto optimo de inyeccion vs actual",
      "Deteccion de casing heading (inestabilidad de flujo)",
      "Eficiencia de uso de gas inyectado",
      "Monitoreo de operacion de valvulas en profundidad",
      "Balance de gas a nivel de macolla/campo",
    ],
    anomalies: [
      "Casing heading (oscilacion de presion en revestidor)",
      "Valvula de inyeccion taponada o pegada",
      "Fuga en linea de inyeccion",
      "Pozo ahogado (exceso de liquido)",
      "Inyeccion sub-optima de gas",
      "Cambios bruscos en productividad del pozo",
    ],
    image: "pozos-gaslift-inyeccion-gas.jpg",
  },
];

const hierarchyLevels = [
  {
    level: "Campo",
    icon: MapPin,
    description: "Vista general de todas las operaciones",
    detail: "KPIs de produccion total, mapa con ubicacion de pozos, estado general del campo, ranking de pozos por produccion y eficiencia",
  },
  {
    level: "Macolla",
    icon: Layers,
    description: "Agrupacion de pozos por cluster",
    detail: "Produccion por pozo, tendencias de presion, monitoreo de temperatura, consumo energetico, salud de equipos, alarmas activas",
  },
  {
    level: "Pozo",
    icon: CircleDot,
    description: "Detalle individual de cada pozo",
    detail: "Telemetria en tiempo real con gauges, graficos de tendencia 7-30 dias, metricas especificas del tipo de levantamiento, historial de alarmas",
  },
  {
    level: "RTU / Dispositivo",
    icon: Cpu,
    description: "Unidad de telemetria remota",
    detail: "Estado de conexion, datos crudos del sensor, frecuencia de muestreo, diagnostico del equipo de campo, uptime de comunicacion",
  },
];

const wellDetailTabs = [
  {
    liftType: "ESP",
    color: "bg-blue-500",
    colorLight: "bg-blue-50",
    colorText: "text-blue-700",
    kpis: [
      { label: "Produccion", unit: "BPD", icon: "water_drop" },
      { label: "Frecuencia", unit: "Hz", icon: "speed" },
      { label: "Corriente", unit: "A", icon: "bolt" },
      { label: "Temperatura", unit: "F", icon: "thermostat" },
      { label: "Vibracion", unit: "IPS", icon: "vibration" },
      { label: "P. Intake", unit: "PSI", icon: "compress" },
    ],
    tabs: [
      { name: "Produccion", color: "bg-green-500", description: "Caudal vs frecuencia del VSD, con punto de operacion relativo al BEP. Grafico de tendencia mostrando produccion, frecuencia y presion de intake superpuestas." },
      { name: "Electrico", color: "bg-orange-500", description: "Corriente del motor, voltaje, potencia consumida y resistencia de aislamiento. Deteccion de fluctuaciones electricas y tendencias de degradacion." },
      { name: "Hidraulico", color: "bg-red-500", description: "Presion de intake, presion de descarga, presion de cabezal (THP) y presion de revestidor (CHP). Diferencial de presion de la bomba." },
      { name: "Bomba", color: "bg-orange-500", description: "Temperatura del motor, vibracion en ejes X/Y, eficiencia de la bomba vs BEP, y analisis de cabeza generada vs requerida." },
    ],
    mosaicKpi: "EFICIENCIA",
    mosaicDescription: "Cada tarjeta muestra la eficiencia de la bomba relativa al punto optimo de operacion (BEP), permitiendo identificar rapidamente pozos operando fuera de rango.",
  },
  {
    liftType: "SRP",
    color: "bg-amber-500",
    colorLight: "bg-amber-50",
    colorText: "text-amber-700",
    kpis: [
      { label: "Produccion", unit: "BPD", icon: "water_drop" },
      { label: "SPM", unit: "cpm", icon: "speed" },
      { label: "Carga Max", unit: "lb", icon: "fitness_center" },
      { label: "Fillage", unit: "%", icon: "water" },
      { label: "Corriente", unit: "A", icon: "bolt" },
      { label: "P. Cabezal", unit: "PSI", icon: "compress" },
    ],
    tabs: [
      { name: "Produccion", color: "bg-green-500", description: "Caudal de produccion, SPM (carreras por minuto), nivel de fluido en el anular y fillage de la bomba. Historico de tendencias y comparacion SPM actual vs recomendado." },
      { name: "Electrico", color: "bg-orange-500", description: "Corriente del motor del balancin, potencia consumida y factor de carga. Deteccion de sobrecargas y desbalance del contrabalance." },
      { name: "Hidraulico", color: "bg-red-500", description: "Presion de cabezal, presion de revestidor, nivel de fluido en el anular. Deteccion de cambios en el indice de productividad." },
      { name: "Dinamometrica", color: "bg-purple-500", description: "Carta de superficie en tiempo real con clasificacion automatica: normal, golpe de fluido, interferencia de gas, fuga de viajera, fuga de fija, plunger desgastado. Confianza de la clasificacion por IA." },
    ],
    mosaicKpi: "FILLAGE",
    mosaicDescription: "El fillage (porcentaje de llenado de la bomba) es el indicador principal: >90% operacion normal, 60-90% requiere ajuste de SPM, <60% indica problema de suministro o fuga.",
  },
  {
    liftType: "PCP",
    color: "bg-green-500",
    colorLight: "bg-green-50",
    colorText: "text-green-700",
    kpis: [
      { label: "Produccion", unit: "BPD", icon: "water_drop" },
      { label: "Corriente", unit: "A", icon: "bolt" },
      { label: "RPM", unit: "RPM", icon: "speed" },
      { label: "Torque", unit: "ft-lb", icon: "settings" },
      { label: "P. Intake", unit: "PSI", icon: "compress" },
      { label: "P. Tubing", unit: "PSI", icon: "compress" },
    ],
    tabs: [
      { name: "Produccion", color: "bg-green-500", description: "Caudal de produccion, RPM del variador, torque y corriente superpuestos en grafico de tendencia. Promedio y ultimo valor de cada variable." },
      { name: "Electrico", color: "bg-orange-500", description: "Corriente del motor con historico diario. Deteccion de picos de corriente que indican aumento de torque por desgaste del estator o produccion de arena." },
      { name: "Hidraulico", color: "bg-red-500", description: "Presion de intake y presion de tubing con tendencias. Calculo automatico del diferencial de presion para estimar la carga sobre la bomba." },
      { name: "Cavidad", color: "bg-orange-500", description: "RPM, torque y produccion superpuestos para analizar la relacion torque/RPM. Indicador de desgaste del elastomero basado en la perdida progresiva de eficiencia volumetrica." },
    ],
    mosaicKpi: "TORQUE",
    mosaicDescription: "El torque del variador es el indicador clave: permite detectar desgaste progresivo del elastomero, produccion de arena y problemas de succion en tiempo real.",
  },
  {
    liftType: "Gas Lift",
    color: "bg-purple-500",
    colorLight: "bg-purple-50",
    colorText: "text-purple-700",
    kpis: [
      { label: "Produccion", unit: "BPD", icon: "water_drop" },
      { label: "Inyeccion", unit: "MSCFD", icon: "air" },
      { label: "P. Inyeccion", unit: "PSI", icon: "compress" },
      { label: "Choke", unit: '1/64"', icon: "tune" },
      { label: "THP", unit: "PSI", icon: "compress" },
      { label: "CHP", unit: "PSI", icon: "compress" },
    ],
    tabs: [
      { name: "Produccion", color: "bg-green-500", description: "Caudal de produccion vs tasa de inyeccion de gas. Grafico de tendencia con produccion, inyeccion, THP y CHP para analizar la respuesta del pozo." },
      { name: "Inyeccion", color: "bg-blue-500", description: "Tasa de inyeccion actual vs optima (calculada por la curva GLPC), presion de inyeccion, tamano del orificio (choke). Eficiencia de uso de gas." },
      { name: "Hidraulico", color: "bg-red-500", description: "Presiones de cabezal y revestidor con deteccion automatica de casing heading (oscilaciones ciclicas de presion que indican inestabilidad de flujo)." },
      { name: "Valvulas", color: "bg-orange-500", description: "Estado de las valvulas de gas lift en profundidad, presion en cada punto de inyeccion, deteccion de valvulas taponadas o con fuga." },
    ],
    mosaicKpi: "INYECCION",
    mosaicDescription: "La tasa de inyeccion de gas (MSCFD) se compara contra el punto optimo de la curva GLPC. Desviaciones indican necesidad de ajustar choke o reasignar gas entre pozos.",
  },
];

const dashboardFeatures = [
  {
    title: "Mosaico de Pozos en Tiempo Real",
    icon: Eye,
    description: "Vista de tarjetas con los 63 pozos activos mostrando tipo de levantamiento, KPI principal, produccion en BPD y estado operacional. Filtros por campo, macolla y tipo de bomba.",
  },
  {
    title: "Mapa de Campo Interactivo",
    icon: MapPin,
    description: "Geolocalizacion de todos los pozos con indicadores de estado por color. Navegador de campos (Boscan, Cerro Negro, Anaco) con zoom automatico a cada ubicacion.",
  },
  {
    title: "Filtro por Tipo de Levantamiento",
    icon: Layers,
    description: "Un click para ver solo pozos ESP (18), SRP (20), PCP (16) o Gas Lift (9). Cada filtro muestra el KPI mas relevante del tipo: Eficiencia, Fillage, Torque o Inyeccion.",
  },
  {
    title: "Filtro por Estado Operacional",
    icon: Activity,
    description: "Filtros Optimo, Sub-optimo y Critico para priorizar atencion. Identificacion rapida de pozos que requieren intervencion inmediata con codigo de color.",
  },
  {
    title: "Detalle por Pozo con Tabs Especializados",
    icon: LineChart,
    description: "Click en cualquier pozo para ver su detalle completo: KPIs principales, grafico de tendencia y tabs por categoria (Produccion, Electrico, Hidraulico, Bomba/Cavidad).",
  },
  {
    title: "Sistema de Alarmas en Tiempo Real",
    icon: Bell,
    description: "Alarmas configurables por severidad (critica, mayor, advertencia) con evaluacion cada 5 minutos, notificaciones instantaneas y escalamiento automatico.",
  },
  {
    title: "Carta Dinamometrica (SRP)",
    icon: Activity,
    description: "Visualizacion y clasificacion automatica de la carta de superficie con IA para diagnostico del estado de la bomba: normal, golpe de fluido, gas lock, fuga.",
  },
  {
    title: "KPIs de Campo Consolidados",
    icon: BarChart3,
    description: "Produccion total actual, potencial optimizado, oportunidad de mejora en BPD, pozos activos, y distribucion de produccion por tipo de levantamiento con grafico de dona.",
  },
];

const alarmTypes = [
  { type: "Anomalia Detectada", severity: "Mayor", timing: "Tiempo real (5 min)", icon: AlertTriangle },
  { type: "Sensor Atascado", severity: "Advertencia", timing: "Tiempo real (5 min)", icon: Radio },
  { type: "Deriva de Sensor", severity: "Advertencia", timing: "Tiempo real (5 min)", icon: TrendingUp },
  { type: "Pozo Sub-optimo", severity: "Mayor", timing: "Cada hora", icon: Gauge },
  { type: "Degradacion de Bomba", severity: "Critica", timing: "Cada hora", icon: Settings },
];

export default function PozosPage() {
  return (
    <>
      <PageHeader
        title="Monitoreo de Pozos Petroleros"
        description="Supervision integral de todos los metodos de levantamiento artificial con telemetria en tiempo real, deteccion automatica de anomalias y analitica operacional avanzada."
        badge="Solucion Petrolera"
        variant="dark"
      />

      {/* Benefits Bar */}
      <section className="py-8 bg-primary text-white">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">{benefit.value}</div>
                  <div className="text-sm text-white/70">{benefit.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hierarchy / Architecture */}
      <section className="py-16 md:py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Jerarquia de Monitoreo
            </h2>
            <p className="text-lg text-muted-foreground">
              La plataforma organiza los activos en una estructura jerarquica que permite
              navegar desde la vision general del campo hasta el detalle de cada dispositivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hierarchyLevels.map((item, index) => (
              <Card key={item.level} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-bold text-lg">{item.level}</span>
                  </div>
                  <p className="font-medium text-sm mb-2">{item.description}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">Campos petroleros</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">7</div>
                <div className="text-sm text-muted-foreground">Macollas (clusters)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">63+</div>
                <div className="text-sm text-muted-foreground">Pozos monitoreados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetria por tipo de levantamiento */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Telemetria por Tipo de Levantamiento
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada metodo de levantamiento tiene variables, analitica y detecciones especificas.
              La plataforma adquiere entre 9 y 24 variables de telemetria por pozo segun el tipo de equipo instalado.
            </p>
          </div>

          <div className="space-y-20">
            {liftingMethods.map((method, index) => (
              <div key={method.id} id={method.id}>
                {/* Method Header */}
                <div className={`flex items-center gap-4 mb-8 pb-4 border-b-2`}>
                  <div className={`w-14 h-14 rounded-xl ${method.colorLight} flex items-center justify-center`}>
                    <method.icon className={`h-7 w-7 ${method.colorText}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold">{method.title}</h3>
                      <Badge variant="outline" className="font-mono uppercase">
                        {method.id}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 max-w-3xl">{method.description}</p>

                <div
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Left: Image + Telemetry Table */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <Image
                      src={
                        method.id === "esp" ? "/images/capturas/monitoreo/05_detalle_esp_kpis.png"
                        : method.id === "srp" ? "/images/capturas/monitoreo/05_detalle_srp_kpis.png"
                        : method.id === "pcp" ? "/images/capturas/monitoreo/06_detalle_esp_tendencia.png"
                        : "/images/capturas/optimizacion/03_optimizacion_detalle_ranking.png"
                      }
                      alt={`Monitoreo de ${method.title} - Dashboard de detalle en tiempo real`}
                      width={1920}
                      height={1080}
                      className="rounded-2xl w-full h-auto shadow-lg mb-8"
                    />

                    {/* Telemetry Variables Table */}
                    <div className="bg-white rounded-xl border overflow-hidden">
                      <div className={`px-4 py-3 ${method.color} text-white flex items-center gap-2`}>
                        <BarChart3 className="h-4 w-4" />
                        <span className="font-semibold text-sm">
                          Variables de Telemetria ({method.telemetry.length} variables)
                        </span>
                      </div>
                      <div className="divide-y">
                        {method.telemetry.map((t) => (
                          <div key={t.key} className="px-4 py-2.5 flex items-center justify-between hover:bg-muted/30">
                            <span className="text-sm">{t.variable}</span>
                            <Badge variant="secondary" className="font-mono text-xs">
                              {t.unit}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Analytics + Anomalies */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    {/* Analytics */}
                    <div>
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Analitica de Telemetria Basica
                      </h4>
                      <div className="space-y-3">
                        {method.analytics.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Anomaly Detection */}
                    <div>
                      <h4 className="font-semibold text-red-600 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Deteccion Automatica de Anomalias
                      </h4>
                      <div className="space-y-3">
                        {method.anomalies.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Shield className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interface per Well Type */}
      <section className="py-16 md:py-20">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interfaz de Monitoreo por Tipo de Pozo
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada tipo de levantamiento tiene su propia interfaz de detalle con KPIs especificos,
              graficos de tendencia y tabs de categoria. Al hacer click en cualquier pozo del mosaico,
              se despliega su vista completa.
            </p>
          </div>

          <div className="space-y-16">
            {wellDetailTabs.map((detail) => (
              <div key={detail.liftType} className="bg-white rounded-2xl border overflow-hidden shadow-sm">
                {/* Header */}
                <div className={`${detail.color} text-white px-6 py-4 flex items-center justify-between`}>
                  <div>
                    <h3 className="text-xl font-bold">Detalle de Pozo {detail.liftType}</h3>
                    <p className="text-white/80 text-sm">Vista individual con monitoreo en tiempo real</p>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30 text-sm">
                    {detail.liftType}
                  </Badge>
                </div>

                <div className="p-6">
                  {/* KPI Cards */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">KPIs en Tiempo Real</h4>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {detail.kpis.map((kpi) => (
                        <div key={kpi.label} className={`p-3 rounded-lg ${detail.colorLight} text-center`}>
                          <div className="text-xs text-muted-foreground mb-1">{kpi.label}</div>
                          <div className={`text-sm font-bold ${detail.colorText}`}>{kpi.unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabs Description */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Categorias de Monitoreo (Tabs)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {detail.tabs.map((tab) => (
                        <div key={tab.name} className="flex gap-3 p-4 rounded-lg bg-muted/30">
                          <div className={`w-1 rounded-full ${tab.color} shrink-0`} />
                          <div>
                            <div className="font-semibold text-sm mb-1">{tab.name}</div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{tab.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mosaic KPI */}
                  <div className={`mt-6 p-4 rounded-lg ${detail.colorLight} flex items-start gap-3`}>
                    <Eye className={`h-5 w-5 ${detail.colorText} shrink-0 mt-0.5`} />
                    <div>
                      <div className="text-sm font-semibold mb-1">
                        KPI en Mosaico: <span className={detail.colorText}>{detail.mosaicKpi}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{detail.mosaicDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Centro de Monitoreo de Pozos
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                El dashboard principal muestra los 63 pozos en formato mosaico con KPIs de produccion
                total (98,302 BPD), potencial optimizado (130,986 BPD), oportunidad de mejora (+32,684 BPD, +33.2%) y distribucion
                por tipo de levantamiento. Filtros instantaneos por campo, macolla, tipo de bomba
                y estado operacional.
              </p>
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
              <div className="bg-white rounded-2xl border p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-muted/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">98,302</div>
                    <div className="text-xs text-muted-foreground">Produccion BPD</div>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">63</div>
                    <div className="text-xs text-muted-foreground">Pozos Activos</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { type: "PCP", count: 16, bpd: "32,045", color: "bg-green-500", pct: 32 },
                    { type: "SRP", count: 20, bpd: "27,559", color: "bg-amber-500", pct: 28 },
                    { type: "ESP", count: 18, bpd: "25,447", color: "bg-blue-500", pct: 26 },
                    { type: "Gas Lift", count: 9, bpd: "14,446", color: "bg-purple-500", pct: 14 },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center gap-3">
                      <div className="w-16 text-xs font-medium">{item.type} ({item.count})</div>
                      <div className="flex-1 bg-muted/50 rounded-full h-4 overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                      <div className="text-xs font-mono w-16 text-right">{item.bpd}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden border shadow-xl">
            <Image
              src="/images/capturas/monitoreo/01_monitoreo_mosaico_63_pozos.png"
              alt="Vista mosaico de 63 pozos petroleros con KPIs en tiempo real"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm">{feature.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alarm System */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl border overflow-hidden">
                <div className="px-4 py-3 bg-red-500 text-white flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="font-semibold text-sm">Sistema de Alarmas Operativas</span>
                </div>
                <div className="divide-y">
                  {alarmTypes.map((alarm) => (
                    <div key={alarm.type} className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <alarm.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{alarm.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            alarm.severity === "Critica"
                              ? "destructive"
                              : alarm.severity === "Mayor"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {alarm.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alarm.timing}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-xs text-muted-foreground">Tipos de alarma</div>
                </div>
                <div className="p-4 bg-white rounded-lg border text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">Niveles de severidad</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Deteccion Inteligente de Anomalias
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                El sistema evalua continuamente la telemetria de cada pozo contra umbrales
                configurables y patrones aprendidos. Las anomalias se detectan en tiempo real
                y generan alarmas con escalamiento automatico.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Evaluacion cada 5 minutos</span>
                    <p className="text-sm text-muted-foreground">
                      Analisis continuo de todas las variables de telemetria en busca de patrones anomalos
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Deteccion por tipo de equipo</span>
                    <p className="text-sm text-muted-foreground">
                      Algoritmos especializados para cada metodo de levantamiento (ESP, SRP, PCP, Gas Lift)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Progresion de anomalias</span>
                    <p className="text-sm text-muted-foreground">
                      Seguimiento de la evolucion de cada anomalia con rampa de severidad gradual
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Baseline estadistico por pozo</span>
                    <p className="text-sm text-muted-foreground">
                      Calculo automatico de rangos normales (media, P05, P95) usando los ultimos 30 dias de datos
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="py-16 md:py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Arquitectura de Datos
            </h2>
            <p className="text-lg text-muted-foreground">
              Flujo completo desde el sensor en campo hasta el dashboard de monitoreo,
              con procesamiento en cadena para normalizacion, propagacion y alarmas.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Adquisicion",
                icon: Radio,
                detail: "RTU en campo captura telemetria del pozo cada 30 segundos via sensores industriales",
              },
              {
                step: "2",
                title: "Transmision",
                icon: Server,
                detail: "Datos enviados de forma segura a la plataforma central con operacion offline y reconexion automatica",
              },
              {
                step: "3",
                title: "Normalizacion",
                icon: Settings,
                detail: "Validacion de rangos, conversion de unidades y normalizacion de claves de telemetria",
              },
              {
                step: "4",
                title: "Propagacion",
                icon: Layers,
                detail: "Copia selectiva de variables clave del dispositivo al activo (pozo) para consulta rapida",
              },
              {
                step: "5",
                title: "Visualizacion",
                icon: Eye,
                detail: "Dashboards interactivos con graficos, gauges, alarmas y navegacion drill-down",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  {item.step}
                </div>
                <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Well Attributes */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Configuracion Integral del Pozo
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Cada pozo almacena entre 40 y 55 atributos estaticos que describen
                completamente su configuracion de reservorio, geometria de completacion,
                equipo instalado y parametros operacionales.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Identificacion",
                    items: ["Nombre del pozo (estandar PDVSA)", "Campo y macolla", "Tipo de levantamiento", "Estado operacional"],
                  },
                  {
                    title: "Reservorio",
                    items: ["Presion y temperatura de yacimiento", "Gravedad API y viscosidad", "Modelo IPR (Vogel, Darcy, Fetkovich)", "Indice de productividad"],
                  },
                  {
                    title: "Geometria",
                    items: ["Profundidad total (MD y TVD)", "Profundidad de instalacion de bomba", "Intervalo de perforaciones", "Diametros de revestidor y tuberia"],
                  },
                  {
                    title: "Equipo",
                    items: ["Modelo y capacidad del equipo", "Parametros nominales del motor", "Limites operacionales", "Umbrales de alarma personalizados"],
                  },
                ].map((group) => (
                  <div key={group.title} className="p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold text-sm text-primary mb-2">{group.title}</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {group.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/images/capturas/general/02_administracion_tabla_pozos.png"
                alt="Panel de administracion - Tabla de configuracion de 63 pozos"
                width={1920}
                height={1080}
                className="rounded-2xl w-full h-auto shadow-lg mb-6"
              />

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Droplets className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-bold text-lg">3 Campos</div>
                    <div className="text-xs text-muted-foreground">
                      Lago de Maracaibo, Faja del Orinoco, Oriente
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Gauge className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-bold text-lg">6-36 API</div>
                    <div className="text-xs text-muted-foreground">
                      Desde extra-pesado hasta liviano
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Monitoree sus pozos con ATILAX
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Solicite una evaluacion gratuita de su campo y descubra como nuestra plataforma
            puede darle visibilidad total sobre la operacion de sus pozos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contacto">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Solicitar evaluacion de campo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://panel.atilax.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Probar demo en vivo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
