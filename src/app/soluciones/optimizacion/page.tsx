import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  Gauge,
  Wind,
  Zap,
  TrendingUp,
  TrendingDown,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Target,
  Timer,
  Shield,
  Cpu,
  LineChart,
  Layers,
  Heart,
  Factory,
  Settings2,
  RefreshCcw,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Optimizacion de Pozos | ATILAX",
  description:
    "Servicio de optimizacion inteligente de pozos petroleros: recomendaciones autonomas por tipo de levantamiento, prediccion de fallas con IA, analisis nodal automatizado y optimizacion a nivel de campo.",
};

const benefits = [
  { value: "3-8%", label: "Incremento de produccion de campo" },
  { value: "10-20%", label: "Reduccion de costo energetico" },
  { value: "20-40%", label: "Menos tiempo no productivo" },
  { value: "15-25%", label: "Mayor vida util de equipos" },
];

const capabilities = [
  {
    icon: Settings2,
    title: "Optimizacion por Tipo de Levantamiento",
    description:
      "Motores especializados para ESP, Bombeo Mecanico, Gas Lift y BCP que entienden la fisica especifica de cada sistema.",
    benefit: "Recomendaciones precisas adaptadas a cada tecnologia de produccion",
  },
  {
    icon: AlertTriangle,
    title: "Deteccion Temprana de Anomalias",
    description:
      "Algoritmos de Machine Learning que identifican patrones anormales antes de que se conviertan en fallas.",
    benefit: "Reduccion de tiempo no productivo y costos de reparacion",
  },
  {
    icon: LineChart,
    title: "Pronostico de Produccion",
    description:
      "Modelos predictivos que estiman la produccion futura y calculan reservas remanentes con DCA y XGBoost.",
    benefit: "Planificacion informada de inversiones y operaciones",
  },
  {
    icon: Factory,
    title: "Optimizacion de Campo",
    description:
      "Analisis multi-pozo que optimiza la asignacion de recursos compartidos: gas, electricidad y capacidad de procesamiento.",
    benefit: "Maximizacion del valor a nivel de campo, no solo de pozo individual",
  },
];

const liftingSystems = [
  {
    id: "esp",
    abbr: "ESP",
    title: "Bombeo Electrosumergible",
    subtitle: "Pozos de alto caudal",
    icon: Zap,
    color: "bg-blue-500",
    description:
      "Bomba centrifuga sumergida accionada por motor electrico en el fondo del pozo. Tecnologia preferida para pozos de alto caudal.",
    controlVariable: "Frecuencia del variador de velocidad (VSD) en Hz",
    optimization:
      "Mantener la bomba operando cerca de su Punto de Mejor Eficiencia (BEP), donde la relacion entre produccion y consumo energetico es optima.",
    indicators: [
      "Frecuencia del VSD",
      "Corriente del motor",
      "Temperatura del motor",
      "Vibracion",
      "Presion de intake",
      "Presion de descarga",
      "Tasa de produccion",
    ],
    healthWeights: [
      { name: "Eficiencia de bomba", weight: "25%" },
      { name: "Vibracion", weight: "20%" },
      { name: "Produccion vs objetivo", weight: "20%" },
    ],
    failurePrediction:
      "Prediccion de quemado de motor y desgaste de rodamientos basada en tendencias de temperatura, corriente y vibracion.",
  },
  {
    id: "srp",
    abbr: "BM",
    title: "Bombeo Mecanico",
    subtitle: "Pozos de baja a media produccion",
    icon: Activity,
    color: "bg-amber-500",
    description:
      "Unidad de bombeo en superficie que acciona varillas conectadas a una bomba reciprocante en el fondo. Tecnologia mas comun en la industria.",
    controlVariable: "Carreras por minuto (SPM)",
    optimization:
      "Lograr un fillage (llenado) optimo entre 60% y 95%, evitando sub-llenado y condiciones de fluid pound.",
    indicators: [
      "SPM (carreras por minuto)",
      "Cargas de varilla",
      "Posicion de la bomba",
      "Fillage (% llenado)",
      "Carta dinamometrica",
    ],
    healthWeights: [
      { name: "Fillage", weight: "30%" },
      { name: "Condicion de bomba", weight: "25%" },
    ],
    failurePrediction:
      "Diagnostico automatico de condiciones de bomba a partir de la forma de la carta dinamometrica.",
  },
  {
    id: "gaslift",
    abbr: "GL",
    title: "Gas Lift",
    subtitle: "Inyeccion de gas para produccion",
    icon: Wind,
    color: "bg-emerald-500",
    description:
      "Inyeccion de gas comprimido en la columna de produccion para reducir la densidad del fluido. No requiere equipo sumergido.",
    controlVariable: "Tasa de inyeccion de gas (MSCFD)",
    optimization:
      "Encontrar la tasa de inyeccion que maximiza la produccion neta, considerando incremento productivo y costo del gas.",
    indicators: [
      "Tasa de inyeccion",
      "Presion de casing",
      "Presion de tubing",
      "Produccion de fluido",
      "Relacion gas-liquido",
    ],
    healthWeights: [
      { name: "Eficiencia de inyeccion", weight: "25%" },
      { name: "Produccion vs objetivo", weight: "25%" },
      { name: "Heading (oscilaciones)", weight: "20%" },
    ],
    failurePrediction:
      "Deteccion automatica de heading (oscilaciones ciclicas de presion) y desbalance de flujo.",
  },
  {
    id: "pcp",
    abbr: "BCP",
    title: "Bombeo de Cavidad Progresiva",
    subtitle: "Crudos pesados y alto corte de arena",
    icon: Gauge,
    color: "bg-purple-500",
    description:
      "Rotor helicoidal metalico dentro de un estator elastomerico que crea cavidades progresivas para desplazar el fluido. Ideal para crudos pesados.",
    controlVariable: "Velocidad de rotacion (RPM)",
    optimization:
      "Balancear la produccion contra el torque y desgaste del estator, maximizando la vida util del equipo.",
    indicators: [
      "RPM",
      "Torque",
      "Eficiencia volumetrica",
      "Temperatura del fluido",
      "Tasa de produccion",
    ],
    healthWeights: [
      { name: "Eficiencia volumetrica", weight: "25%" },
      { name: "Torque", weight: "20%" },
      { name: "Desgaste de estator", weight: "20%" },
    ],
    failurePrediction:
      "Estimacion de vida util del estator a partir de la tendencia de eficiencia volumetrica.",
  },
];

const executionCycles = [
  {
    name: "Tiempo Real",
    frequency: "Cada 5 min",
    purpose: "Deteccion rapida de anomalias y condiciones criticas",
    icon: Zap,
  },
  {
    name: "Horario",
    frequency: "Cada hora",
    purpose: "Optimizacion individual de pozos y analisis nodal",
    icon: Timer,
  },
  {
    name: "Diario",
    frequency: "6:00 AM",
    purpose: "Curvas de declinacion y KPIs consolidados",
    icon: BarChart3,
  },
  {
    name: "Semanal",
    frequency: "Lunes 7 AM",
    purpose: "Benchmarking entre pozos similares",
    icon: Layers,
  },
  {
    name: "Mensual",
    frequency: "Dia 1, 8 AM",
    purpose: "Reportes integrales y reentrenamiento de modelos ML",
    icon: RefreshCcw,
  },
];

const healthScoreRanges = [
  {
    range: "80 - 100",
    status: "Optimo",
    color: "bg-green-500",
    textColor: "text-green-700",
    bgColor: "bg-green-50",
    description: "Opera eficientemente dentro de parametros normales",
    action: "Monitoreo de rutina",
  },
  {
    range: "60 - 79",
    status: "Suboptimo",
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    bgColor: "bg-yellow-50",
    description: "Existen oportunidades de mejora en uno o mas parametros",
    action: "Revisar recomendaciones del sistema",
  },
  {
    range: "40 - 59",
    status: "Atencion",
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgColor: "bg-orange-50",
    description: "Signos de deterioro que requieren intervencion",
    action: "Programar inspeccion y ajustes",
  },
  {
    range: "0 - 39",
    status: "Critico",
    color: "bg-red-500",
    textColor: "text-red-700",
    bgColor: "bg-red-50",
    description: "Condiciones que pueden provocar falla o dano al equipo",
    action: "Intervencion inmediata requerida",
  },
];

const nodalAnalysis = [
  {
    title: "Curva IPR",
    subtitle: "Inflow Performance Relation",
    description:
      "Describe la capacidad del yacimiento para entregar fluido al fondo del pozo. Implementa modelos Vogel, Fetkovich y Darcy lineal.",
    icon: TrendingDown,
  },
  {
    title: "Curva VLP",
    subtitle: "Vertical Lift Performance",
    description:
      "Calcula la presion requerida para levantar el fluido desde el fondo hasta la superficie con correlaciones de flujo multifasico.",
    icon: TrendingUp,
  },
  {
    title: "Punto Operativo",
    subtitle: "Interseccion IPR-VLP",
    description:
      "Define la tasa de produccion y presion de fondo natural del pozo. Permite identificar si esta sub-produciendo o sobre-produciendo.",
    icon: Target,
  },
];

const outputIndicators = [
  "Estado de optimizacion: optimo, suboptimo o critico",
  "Tasa actual vs. tasa recomendada (barriles por dia)",
  "Ganancia potencial estimada (absoluta y porcentual)",
  "Eficiencia del sistema de levantamiento",
  "Consumo energetico por barril producido",
  "Puntaje de salud del pozo (0-100)",
  "Accion recomendada en lenguaje descriptivo",
];

export default function OptimizacionPage() {
  return (
    <>
      <PageHeader
        title="Optimizacion Inteligente de Pozos"
        description="Transforme el monitoreo pasivo en optimizacion proactiva. Recomendaciones autonomas por tipo de levantamiento, prediccion de fallas con IA y analisis nodal automatizado."
        badge="Nuevo"
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

      {/* Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
                Servicio de Optimizacion
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                De monitoreo pasivo a optimizacion proactiva
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                El Servicio de Optimizacion de ATILAX analiza continuamente la
                telemetria de cada pozo, identifica oportunidades de mejora y
                genera recomendaciones autonomas adaptadas al tipo de sistema de
                levantamiento artificial instalado.
              </p>
              <p className="text-muted-foreground mb-6">
                El resultado es un incremento medible en la eficiencia
                productiva, una reduccion del consumo energetico y una extension
                de la vida util de los equipos. Un solo servicio monitorea y
                optimiza cientos de pozos simultaneamente.
              </p>
              <div className="bg-white border rounded-xl p-6">
                <p className="text-sm font-medium text-primary mb-2">
                  El desafio actual
                </p>
                <p className="text-sm text-muted-foreground">
                  Un ingeniero puede monitorear activamente entre 20 y 40 pozos,
                  insuficiente para campos con cientos de unidades. Las
                  condiciones cambian en minutos, pero las revisiones manuales
                  ocurren en dias o semanas. El servicio de optimizacion elimina
                  esta brecha.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder
                label="optimizacion-hero-dashboard.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Capabilities */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Capacidades Principales
            </h2>
            <p className="text-lg text-muted-foreground">
              Cuatro capacidades fundamentales que trabajan de forma coordinada
              para maximizar el valor de cada pozo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {cap.description}
                  </p>
                  <div className="flex items-start gap-2 bg-green-50 text-green-800 rounded-lg p-3">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    <span className="text-sm">{cap.benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifting Systems */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sistemas de Levantamiento Artificial
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada tipo de levantamiento tiene su propia fisica, sus propias
              variables criticas y su propio enfoque de optimizacion. Motores
              independientes adaptados a cada realidad.
            </p>
          </div>

          <div className="space-y-8">
            {liftingSystems.map((system, index) => (
              <Card key={system.id} className="overflow-hidden">
                <div className={`h-1.5 ${system.color}`} />
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${system.color}/10 flex items-center justify-center`}
                        >
                          <system.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">
                              {system.title}
                            </h3>
                            <Badge variant="outline" className="font-mono">
                              {system.abbr}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {system.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {system.description}
                      </p>
                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="text-xs font-semibold text-primary mb-1">
                          Variable de control
                        </p>
                        <p className="text-sm">{system.controlVariable}</p>
                      </div>
                    </div>

                    {/* Optimization & Indicators */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Concepto de Optimizacion
                      </h4>
                      <p className="text-sm text-muted-foreground mb-6">
                        {system.optimization}
                      </p>

                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        Indicadores Monitoreados
                      </h4>
                      <ul className="space-y-1.5">
                        {system.indicators.map((ind) => (
                          <li
                            key={ind}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {ind}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Health & Prediction */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        Pesos en Puntaje de Salud
                      </h4>
                      <div className="space-y-2 mb-6">
                        {system.healthWeights.map((hw) => (
                          <div
                            key={hw.name}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-muted-foreground">
                              {hw.name}
                            </span>
                            <Badge variant="secondary" className="font-mono">
                              {hw.weight}
                            </Badge>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-orange-500" />
                        Prediccion de Fallas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {system.failurePrediction}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Cycles */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ciclos de Ejecucion
            </h2>
            <p className="text-lg text-muted-foreground">
              No todas las tareas analiticas requieren la misma frecuencia. El
              sistema implementa cinco ciclos, cada uno con un proposito
              especifico.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {executionCycles.map((cycle, index) => (
              <Card key={cycle.name} className="text-center relative">
                {index < executionCycles.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <cycle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{cycle.name}</h3>
                  <p className="text-xs text-primary font-semibold mb-2">
                    {cycle.frequency}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cycle.purpose}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Well Health Score */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100">
                Indicador Clave
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Well Health Score
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Un puntaje unico de 0 a 100 que resume la condicion operativa
                global de cada pozo. Simplifica la toma de decisiones al
                convertir multiples variables tecnicas en un numero comprensible.
              </p>
              <p className="text-muted-foreground mb-8">
                Se calcula como un promedio ponderado de metricas especificas
                para cada tipo de levantamiento. Los pesos reflejan la
                importancia relativa de cada factor para la salud operativa del
                sistema.
              </p>

              <div className="space-y-3">
                {healthScoreRanges.map((range) => (
                  <div
                    key={range.range}
                    className={`${range.bgColor} rounded-xl p-4 flex items-start gap-4`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${range.color} mt-1 shrink-0`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-bold ${range.textColor}`}>
                          {range.range}
                        </span>
                        <Badge
                          variant="outline"
                          className={`${range.textColor} border-current text-xs`}
                        >
                          {range.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {range.description}
                      </p>
                      <p className="text-xs font-medium mt-1">
                        {range.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <ImagePlaceholder
                label="optimizacion-health-score-dashboard.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Resultados por Pozo</h3>
                  <ul className="space-y-2">
                    {outputIndicators.map((indicator) => (
                      <li
                        key={indicator}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {indicator}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Intelligence */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Inteligencia Predictiva
            </h2>
            <p className="text-lg text-muted-foreground">
              Combine curvas de declinacion clasicas con Machine Learning para
              pronosticos mas precisos y deteccion temprana de problemas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Forecast */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle>Pronostico de Produccion</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Curvas de Declinacion (DCA)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ajusta automaticamente modelos exponencial, hiperbolico y
                    armonico a datos historicos. Estima la Recuperacion Ultima
                    (EUR) para planificacion de inversiones.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Machine Learning (XGBoost)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Pronosticos de corto plazo (30 periodos) que capturan
                    patrones complejos incorporando variables del sistema de
                    levantamiento: frecuencia, RPM, corte de agua.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Anomaly Detection */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-orange-600" />
                  </div>
                  <CardTitle>Deteccion de Anomalias</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Isolation Forest (ML)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Aprende el comportamiento normal del pozo y detecta
                    desviaciones significativas en el espacio multivariable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Reglas Heuristicas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Deteccion de sensores atascados, drift de calibracion y
                    puntos de cambio abrupto. Clasificacion por severidad:
                    informativa, advertencia y critica.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nodal Analysis */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analisis Nodal Automatizado
            </h2>
            <p className="text-lg text-muted-foreground">
              Herramienta fundamental de ingenieria de produccion, ahora
              automatizada para cada pozo en tiempo real.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nodalAnalysis.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Field Optimization */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
                Multi-pozo
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Optimizacion a Nivel de Campo
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                El optimo global no siempre es la suma de los optimos
                individuales. La optimizacion de campo reconoce que los pozos
                comparten recursos limitados.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Asignacion de Gas</h4>
                  <p className="text-sm text-muted-foreground">
                    Metodo de pendiente igual (Equal-Slope) que distribuye el gas
                    de forma que se maximice la produccion marginal total.
                    Cada unidad adicional de gas produce el mismo incremento de
                    petroleo en cualquier pozo del sistema.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold mb-3">Restricciones Operativas</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Capacidad del separador", desc: "Limite de fluido total" },
                  { label: "Gas disponible", desc: "Volumen de inyeccion" },
                  { label: "Potencia electrica", desc: "Alimentacion de bombas" },
                  { label: "Manejo de agua", desc: "Plantas de tratamiento" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-muted/50 rounded-lg p-3"
                  >
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImagePlaceholder
                label="optimizacion-campo-multipozo.jpg"
                className="aspect-[4/3] rounded-2xl"
                iconSize="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Flow */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Ciclo continuo de cuatro fases que se repite automaticamente para
              cada pozo del campo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Recoleccion",
                description:
                  "La telemetria fluye desde los sensores de campo hacia el servicio, donde se valida, enriquece y almacena en un buffer de alta velocidad.",
                icon: Cpu,
              },
              {
                step: "02",
                title: "Analisis",
                description:
                  "Los motores procesan telemetria reciente (ventana de 24 horas) junto con datos historicos para evaluar el estado actual y su tendencia.",
                icon: Brain,
              },
              {
                step: "03",
                title: "Recomendacion",
                description:
                  "Se genera el estado del pozo, la accion recomendada, la ganancia potencial estimada y un puntaje de salud.",
                icon: Target,
              },
              {
                step: "04",
                title: "Publicacion",
                description:
                  "Los resultados quedan disponibles en dashboards, alertas configurables, aplicaciones moviles y API REST para integraciones.",
                icon: BarChart3,
              },
            ].map((step) => (
              <Card key={step.step} className="relative">
                <CardContent className="p-6">
                  <div className="text-4xl font-black text-primary/10 mb-3">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios Estrategicos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Escalabilidad",
                description:
                  "Un solo servicio monitorea y optimiza cientos de pozos simultaneamente, sin incremento proporcional de personal.",
                icon: Layers,
              },
              {
                title: "Consistencia",
                description:
                  "Cada pozo recibe el mismo nivel de atencion analitica, eliminando la variabilidad del analisis manual.",
                icon: Shield,
              },
              {
                title: "Trazabilidad",
                description:
                  "Historial completo de recomendaciones y resultados para auditoria y mejora continua.",
                icon: BarChart3,
              },
              {
                title: "Base para decision",
                description:
                  "Datos cuantitativos que respaldan decisiones de inversion, intervencion y abandono.",
                icon: Brain,
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Maximice el rendimiento de su campo
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Solicite una evaluacion gratuita y descubra como el servicio de
            optimizacion de ATILAX puede incrementar su produccion entre un 3% y
            8% con recomendaciones inteligentes por pozo.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Solicitar evaluacion
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/soluciones/petrolera">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Ver solucion petrolera
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
