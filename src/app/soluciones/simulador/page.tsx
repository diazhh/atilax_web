import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Gauge,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  SlidersHorizontal,
  Clock,
  Shield,
  GitCompare,
  PlayCircle,
  RefreshCw,
  LineChart,
  AlertTriangle,
  Layers,
  Target,
  Cpu,
  Timer,
  Lock,
  FlaskConical,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Simulador Interactivo What-If | ATILAX",
  description:
    "Evalua escenarios hipoteticos en tiempo real sin afectar la operacion. Modifica parametros operativos y visualiza el impacto en produccion, eficiencia y pronostico.",
};

const benefits = [
  { value: "What-If", label: "Analisis en tiempo real" },
  { value: "12h", label: "Proyeccion futura" },
  { value: "4", label: "Tipos de levantamiento" },
  { value: "0%", label: "Riesgo operacional" },
];

const workflowSteps = [
  {
    step: 1,
    title: "Seleccion del Pozo",
    description: "El operador selecciona un pozo desde el dashboard de Monitoreo y navega al estado de Simulacion.",
    icon: Target,
  },
  {
    step: 2,
    title: "Visualizacion Inicial",
    description: "El dashboard muestra datos REALES del pozo: produccion, eficiencia, curvas nodal IPR/VLP y pronostico de produccion.",
    icon: LineChart,
  },
  {
    step: 3,
    title: "Modificacion de Parametros",
    description: "Ajuste de controles interactivos: frecuencia VSD, velocidad SPM, RPM, tasa de inyeccion, corte de agua, presion de yacimiento.",
    icon: SlidersHorizontal,
  },
  {
    step: 4,
    title: "Simulacion Automatica",
    description: "Al cambiar un parametro, el sistema recalcula automaticamente produccion, eficiencia y pronostico con los nuevos valores.",
    icon: Cpu,
  },
  {
    step: 5,
    title: "Resultados en Tiempo Real",
    description: "KPIs simulados vs reales, deltas con indicadores, curvas nodal simuladas, proyeccion de 12 horas futuras con lineas punteadas.",
    icon: GitCompare,
  },
  {
    step: 6,
    title: "Cierre de Sesion",
    description: "Al cerrar la simulacion, todos los datos simulados se eliminan automaticamente. El pozo vuelve a mostrar solo datos reales.",
    icon: RefreshCw,
  },
];

const liftingParams = [
  {
    type: "ESP",
    title: "Bombeo Electrosumergible",
    color: "bg-blue-500",
    params: [
      { name: "Frecuencia VSD", unit: "Hz", range: "35 - 65", effect: "Controla caudal y cabeza de la bomba" },
      { name: "Profundidad de bomba", unit: "ft", range: "3,000 - 15,000", effect: "Afecta presion de succion y sumergencia" },
      { name: "Corte de agua", unit: "%", range: "0 - 99", effect: "Modifica propiedades del fluido" },
      { name: "Presion de yacimiento", unit: "psi", range: "500 - 8,000", effect: "Simula deplecion o estimulacion" },
      { name: "Factor de dano (skin)", unit: "-", range: "-5 a 50", effect: "Simula estimulacion o dano de formacion" },
    ],
    telemetry: ["sim_frequency_hz", "sim_flow_rate_bpd", "sim_intake_pressure_psi"],
  },
  {
    type: "SRP",
    title: "Bombeo Mecanico",
    color: "bg-purple-500",
    params: [
      { name: "Velocidad de bombeo", unit: "SPM", range: "2 - 15", effect: "Controla tasa de desplazamiento" },
      { name: "Longitud de carrera", unit: "in", range: "36 - 192", effect: "Afecta volumen por ciclo" },
      { name: "Profundidad de bomba", unit: "ft", range: "3,000 - 12,000", effect: "Modifica carga de varillas" },
      { name: "Corte de agua", unit: "%", range: "0 - 99", effect: "Afecta gravedad del fluido" },
      { name: "Presion de yacimiento", unit: "psi", range: "500 - 8,000", effect: "Simula deplecion" },
    ],
    telemetry: ["sim_spm", "sim_flow_rate_bpd", "sim_pump_fillage_pct"],
  },
  {
    type: "PCP",
    title: "Cavidad Progresiva",
    color: "bg-orange-500",
    params: [
      { name: "RPM", unit: "rev/min", range: "50 - 500", effect: "Controla caudal (proporcional)" },
      { name: "Profundidad de bomba", unit: "ft", range: "1,000 - 6,000", effect: "Afecta torque y desgaste" },
      { name: "Corte de agua", unit: "%", range: "0 - 99", effect: "Modifica viscosidad efectiva" },
      { name: "Presion de yacimiento", unit: "psi", range: "500 - 8,000", effect: "Simula deplecion" },
    ],
    telemetry: ["sim_drive_rpm", "sim_flow_rate_bpd", "sim_motor_power_kw"],
  },
  {
    type: "Gas Lift",
    title: "Levantamiento por Gas",
    color: "bg-cyan-500",
    params: [
      { name: "Tasa de inyeccion", unit: "MSCFD", range: "50 - 5,000", effect: "Controla aligeramiento de columna" },
      { name: "Corte de agua", unit: "%", range: "0 - 99", effect: "Afecta densidad de mezcla" },
      { name: "Presion de yacimiento", unit: "psi", range: "500 - 8,000", effect: "Simula deplecion" },
    ],
    telemetry: ["sim_gas_injection_rate_mscfd", "sim_flow_rate_bpd", "sim_injection_pressure_psi"],
  },
];

const simulationModels = [
  {
    title: "Analisis Nodal (IPR x VLP)",
    description: "Recalcula curvas IPR y VLP con los nuevos parametros. Encuentra el nuevo punto de operacion y genera curvas simuladas de 100 puntos.",
    icon: LineChart,
  },
  {
    title: "Prediccion de Produccion (DCA)",
    description: "Ajusta el modelo DCA con los nuevos setpoints. Genera pronostico a 60 meses con EUR simulado vs real, basado en 180 dias de historial.",
    icon: TrendingUp,
  },
  {
    title: "Evaluacion de Restricciones",
    description: "Verifica que los parametros simulados no violen restricciones: presion de intake minima, temperatura maxima, vibracion, corriente y torque.",
    icon: AlertTriangle,
  },
  {
    title: "Comparacion Real vs Simulado",
    description: "Calcula deltas de produccion (BPD y %), eficiencia, consumo energetico (kWh/bbl) y genera recomendaciones automaticas.",
    icon: GitCompare,
  },
];

const securityFeatures = [
  {
    title: "Solo lectura sobre datos reales",
    description: "La simulacion nunca modifica atributos ni telemetria real del pozo.",
    icon: Lock,
  },
  {
    title: "Aislamiento por prefijo sim_",
    description: "Todo dato simulado usa el prefijo sim_ — imposible confundir con datos reales.",
    icon: Shield,
  },
  {
    title: "Limpieza automatica garantizada",
    description: "Al cerrar sesion, el sistema elimina todos los datos sim_* del asset automaticamente.",
    icon: RefreshCw,
  },
  {
    title: "TTL de seguridad (2 horas)",
    description: "Sesiones abandonadas se cierran automaticamente tras 2 horas de inactividad.",
    icon: Timer,
  },
  {
    title: "Una sesion por pozo",
    description: "Previene conflictos de datos entre operadores simulando el mismo pozo.",
    icon: Target,
  },
  {
    title: "Sin propagacion a Kafka",
    description: "Los datos sim_* no se propagan a Kafka ni al detector de anomalias.",
    icon: Layers,
  },
];

const businessValues = [
  {
    title: "Decisiones informadas",
    description: "Ingenieros evaluan el impacto de cambios operativos ANTES de implementarlos en campo.",
  },
  {
    title: "Reduccion de riesgo",
    description: "Identifica violaciones de restricciones antes de que ocurran en la operacion real.",
  },
  {
    title: "Optimizacion acelerada",
    description: "What-if analysis en segundos vs horas con software de escritorio como PIPESIM o Prosper.",
  },
  {
    title: "Integrado en el flujo de trabajo",
    description: "Sin cambiar de herramienta — todo dentro del dashboard de monitoreo en tiempo real.",
  },
  {
    title: "Basado en datos reales",
    description: "Usa el estado actual del pozo como punto de partida, no modelos genericos.",
  },
  {
    title: "Colaborativo y trazable",
    description: "Multiples operadores simulan distintos pozos simultaneamente. Cada sesion queda registrada.",
  },
];

export default function SimuladorPage() {
  return (
    <main>
      <PageHeader
        title="Simulador Interactivo What-If"
        description="Evalua escenarios hipoteticos en tiempo real. Modifica parametros operativos y visualiza el impacto en produccion, eficiencia y pronostico — sin afectar la operacion real del pozo."
      />

      {/* Benefits Bar */}
      <section className="bg-primary text-white py-6">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {benefits.map((b) => (
              <div key={b.label}>
                <div className="text-2xl md:text-3xl font-bold text-secondary">{b.value}</div>
                <div className="text-sm text-white/80 mt-1">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">El Problema que Resuelve</h2>
            <p className="text-lg text-muted-foreground">
              En la operacion petrolera, los ingenieros necesitan responder preguntas criticas constantemente:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Que pasa si aumento la frecuencia del VSD de 50 a 60 Hz?",
              "Cuanto pierde el pozo si el corte de agua sube al 90%?",
              "Vale la pena profundizar la bomba 500 ft?",
              "Cual es el impacto de una caida de presion del yacimiento?",
            ].map((q, i) => (
              <Card key={i} className="border-l-4 border-l-secondary">
                <CardContent className="p-5">
                  <FlaskConical className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-sm font-medium">{q}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Hoy estas preguntas se responden con hojas de calculo, software de escritorio (PIPESIM, Prosper) o estimaciones empiricas.
            El Simulador Interactivo integra estos analisis directamente en la plataforma de monitoreo, usando los datos reales del pozo como punto de partida.
          </p>
        </div>
      </section>

      {/* How it Works - Workflow */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Flujo de Trabajo del Operador</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desde la seleccion del pozo hasta la visualizacion de resultados, todo ocurre en el mismo dashboard.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <Card key={step.step} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{step.step}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="py-16 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Dashboard de Simulacion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              53 widgets especializados en 5 estados: tabla de pozos, y simulacion especifica para ESP, SRP, PCP y Gas Lift.
              Cada estado incluye controles, KPIs, graficos con proyeccion y tablas de comparacion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg border">
              <Image
                src="/images/capturas/monitoreo/05_detalle_esp_kpis.png"
                alt="Detalle ESP con KPIs - punto de partida para simulacion"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="bg-white p-4">
                <p className="text-sm font-medium">Detalle ESP - Datos reales del pozo</p>
                <p className="text-xs text-muted-foreground">KPIs en tiempo real: 1,772 BPD, 7.2A, 186.9 F, 1867.6 PSI, 56.7 Hz</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border">
              <Image
                src="/images/capturas/optimizacion/01_optimizacion_waterfall.png"
                alt="Waterfall de produccion - resultado de optimizacion simulada"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="bg-white p-4">
                <p className="text-sm font-medium">Resultado de Optimizacion</p>
                <p className="text-xs text-muted-foreground">Cascada mostrando produccion actual vs ganancias por pozo vs total optimizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parameters by Lifting Type */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Parametros por Tipo de Levantamiento</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada tipo de levantamiento artificial tiene parametros especificos que el operador puede modificar
              para evaluar diferentes escenarios.
            </p>
          </div>
          <div className="space-y-8">
            {liftingParams.map((lift) => (
              <Card key={lift.type} className="overflow-hidden">
                <div className={`${lift.color} h-1`} />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${lift.color}`}>
                      {lift.type}
                    </span>
                    <h3 className="text-lg font-semibold">{lift.title}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Parametro</th>
                          <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Unidad</th>
                          <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Rango</th>
                          <th className="text-left py-2 font-medium text-muted-foreground">Efecto</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lift.params.map((p) => (
                          <tr key={p.name} className="border-b last:border-0">
                            <td className="py-2 pr-4 font-medium">{p.name}</td>
                            <td className="py-2 pr-4 text-muted-foreground">{p.unit}</td>
                            <td className="py-2 pr-4 font-mono text-xs">{p.range}</td>
                            <td className="py-2 text-muted-foreground">{p.effect}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Telemetria de proyeccion:</span>{" "}
                      {lift.telemetry.map((t, i) => (
                        <code key={t} className="bg-muted px-1.5 py-0.5 rounded text-xs mx-0.5">{t}</code>
                      ))}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Models */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Modelos de Simulacion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Utiliza los mismos modelos de ingenieria del Motor de Optimizacion, pero ejecutados con los parametros modificados por el operador.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {simulationModels.map((model) => (
              <Card key={model.title}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{model.title}</h3>
                    <p className="text-sm text-muted-foreground">{model.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Projection */}
      <section className="py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Proyeccion en Tiempo Real</h2>
              <p className="text-muted-foreground mb-6">
                Cada simulacion genera 144 puntos de telemetria con timestamps futuros (12 horas hacia adelante
                a intervalos de 5 minutos), permitiendo que los graficos muestren la produccion simulada como
                extension visual del historico real con lineas punteadas.
              </p>
              <div className="space-y-4">
                {[
                  "Ventana temporal de 36 horas (24h historico + 12h proyeccion)",
                  "Series punteadas con colores mas claros para datos simulados",
                  "Tabla de comparacion de parametros: original vs modificado",
                  "KPIs con deltas e indicadores de mejora/deterioro",
                  "Curvas nodal IPR/VLP reales vs simuladas superpuestas",
                  "Pronostico DCA basado en 180 dias de historial de produccion",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border">
              <Image
                src="/images/capturas/monitoreo/06_detalle_esp_tendencia.png"
                alt="Grafico de tendencia ESP con datos en tiempo real"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="bg-white p-4">
                <p className="text-sm font-medium">Grafico de Produccion Real + Simulada</p>
                <p className="text-xs text-muted-foreground">Series solidas (historico real) y punteadas (proyeccion simulada de 12h)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Isolation */}
      <section className="py-20 bg-primary text-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seguridad y Aislamiento</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Los datos de simulacion coexisten en el mismo asset que los datos reales, pero con aislamiento total.
              Nunca se afecta la operacion real del pozo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-muted/30">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Arquitectura Tecnica</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flujo de datos reactivo: cuando el operador cambia un parametro, ThingsBoard detecta el cambio y dispara la simulacion automaticamente.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <SlidersHorizontal className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Widget de Control</h4>
                    <p className="text-xs text-muted-foreground mt-1">Operador modifica sim_param_*</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <Cpu className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Motor de Reglas TB</h4>
                    <p className="text-xs text-muted-foreground mt-1">Detecta cambio y envia HTTP POST</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Servicio de Simulacion</h4>
                    <p className="text-xs text-muted-foreground mt-1">FastAPI ejecuta modelo y publica resultados</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-sm">Los resultados se publican como server attributes y telemetria con timestamps futuros</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div className="grid md:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs font-medium">KPIs Simulados</p>
                    <p className="text-xs text-muted-foreground">sim_opt_production_bpd</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs font-medium">Deltas</p>
                    <p className="text-xs text-muted-foreground">sim_compare_*</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs font-medium">Curvas Nodal</p>
                    <p className="text-xs text-muted-foreground">sim_opt_ipr/vlp_curve</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs font-medium">Proyeccion 12h</p>
                    <p className="text-xs text-muted-foreground">144 puntos futuros</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Session Management */}
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-semibold text-center mb-6">Gestion de Sesiones</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-sm font-medium mt-1">Sesion por pozo</p>
                  <p className="text-xs text-muted-foreground mt-1">Sin conflictos entre operadores</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-2xl font-bold text-primary">10</p>
                  <p className="text-sm font-medium mt-1">Sesiones simultaneas</p>
                  <p className="text-xs text-muted-foreground mt-1">Limite configurable global</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-2xl font-bold text-primary">2h</p>
                  <p className="text-sm font-medium mt-1">TTL automatico</p>
                  <p className="text-xs text-muted-foreground mt-1">Expiracion por inactividad</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-20">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Valor para el Negocio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la telemetria a la accion: What-If analysis en segundos, sin riesgo operacional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessValues.map((value, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Experimenta el Simulador Interactivo</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Solicita una demostracion para ver como el simulador what-if puede optimizar
            la toma de decisiones en tus operaciones petroleras.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Solicitar Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/soluciones/petrolera">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Ver Industria Petrolera
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
