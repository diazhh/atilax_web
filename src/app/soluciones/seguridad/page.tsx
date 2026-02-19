import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  Shield,
  Flame,
  HardHat,
  Leaf,
  Camera,
  Cpu,
  BarChart3,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
  AlertTriangle,
  Radio,
  Wrench,
  Target,
  TrendingDown,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "ATILAX Vision | Vigilancia Inteligente con IA",
  description:
    "Plataforma de vigilancia inteligente y seguridad operacional con IA para la industria petrolera. Transforma camaras existentes en sensores inteligentes.",
};

const stats = [
  { value: "<2s", label: "Tiempo de respuesta" },
  { value: "50+", label: "Clases de objetos" },
  { value: "3-6", label: "Meses ROI tipico" },
  { value: "24/7", label: "Monitoreo continuo" },
];

const modules = [
  {
    icon: Shield,
    title: "Seguridad Perimetral Inteligente",
    color: "bg-red-500",
    description: "Proteccion continua del perimetro con deteccion automatica de amenazas.",
    features: [
      "Deteccion de intrusos en zonas de exclusion",
      "Seguimiento vehicular automatico",
      "Lectura de placas (ALPR) en puntos de acceso",
      "Seguimiento multi-camara entre zonas",
      "Clasificacion de amenazas por nivel de riesgo",
    ],
  },
  {
    icon: HardHat,
    title: "Cumplimiento HSE Automatizado",
    color: "bg-amber-500",
    description: "Verificacion continua del uso de equipos de proteccion y cumplimiento de normas de seguridad.",
    features: [
      "Deteccion de EPP: casco, chaleco, gafas, guantes, mascarilla",
      "Monitoreo de zonas rojas y areas restringidas",
      "Deteccion de persona caida (man-down)",
      "Lone worker detection en areas aisladas",
      "Reportes automaticos de cumplimiento HSE",
    ],
  },
  {
    icon: Flame,
    title: "Deteccion de Emergencias",
    color: "bg-orange-500",
    description: "Identificacion temprana de fuego, humo y situaciones de emergencia criticas.",
    features: [
      "Deteccion de fuego y humo en tiempo real",
      "Monitoreo de antorchas (flare monitoring)",
      "Alertas multinivel con escalamiento automatico",
      "Verificacion visual antes de activar protocolos",
      "Integracion con sistemas de supresion",
    ],
  },
  {
    icon: Wrench,
    title: "Inspeccion de Infraestructura",
    color: "bg-blue-500",
    description: "Deteccion visual de deterioro y danos en equipos e instalaciones.",
    features: [
      "Deteccion de corrosion en tuberias y tanques",
      "Identificacion de fugas visibles",
      "Inspeccion con drones automatizada",
      "Deteccion de dano mecanico en equipos",
      "Documentacion automatica de hallazgos",
    ],
  },
  {
    icon: Leaf,
    title: "Monitoreo Ambiental",
    color: "bg-green-500",
    description: "Supervision de emisiones, derrames y cumplimiento ambiental con camaras especializadas.",
    features: [
      "Deteccion de emisiones de gas y metano (camaras OGI)",
      "Identificacion de derrames de crudo",
      "Documentacion automatica para auditorias",
      "Monitoreo continuo de puntos criticos",
      "Alertas tempranas de eventos ambientales",
    ],
  },
];

const architecture = [
  {
    layer: "1",
    title: "Capa de Captura",
    subtitle: "RTSP / ONVIF",
    icon: Camera,
    color: "bg-blue-50 text-blue-600",
    description: "Compatible con camaras IP existentes. Sin reemplazar infraestructura. Soporta camaras termicas, PTZ y drones.",
  },
  {
    layer: "2",
    title: "Capa Edge AI",
    subtitle: "NVIDIA Jetson",
    icon: Cpu,
    color: "bg-green-50 text-green-600",
    description: "Procesamiento local con respuesta en menos de 2 segundos. Funciona offline sin dependencia de nube.",
  },
  {
    layer: "3",
    title: "Capa de Gestion",
    subtitle: "Dashboards & Reportes",
    icon: BarChart3,
    color: "bg-purple-50 text-purple-600",
    description: "Dashboards en tiempo real, mapas de calor, reportes automaticos y gestion centralizada de eventos.",
  },
];

const benefits = [
  { metric: "40-60%", description: "Reduccion de incidentes HSE", icon: TrendingDown },
  { metric: "70%+", description: "Reduccion de perdidas por robo", icon: Shield },
  { metric: "30-50%", description: "Reduccion costos de mantenimiento", icon: Wrench },
  { metric: "80%", description: "Menos patrullas manuales", icon: Target },
];

const phases = [
  { step: "1", title: "Diagnostico", description: "Evaluacion de infraestructura actual, puntos criticos y definicion de casos de uso prioritarios.", duration: "2-4 semanas" },
  { step: "2", title: "Piloto", description: "Implementacion en area critica seleccionada. Calibracion de modelos y validacion de resultados.", duration: "4-8 semanas" },
  { step: "3", title: "Optimizacion", description: "Ajuste de modelos basado en datos reales. Integracion con sistemas existentes (SCADA, ERP).", duration: "4-6 semanas" },
  { step: "4", title: "Escalamiento", description: "Expansion a toda la operacion. Capacitacion del equipo y transferencia de conocimiento.", duration: "Continuo" },
];

const cameraTypes = ["Camaras IP (RTSP)", "Camaras Termicas", "Camaras PTZ", "Drones con video", "Camaras OGI"];

export default function VisionPage() {
  return (
    <>
      <PageHeader
        title="ATILAX Vision"
        description="Vigilancia inteligente y seguridad operacional con IA. Transforma tus camaras de seguridad existentes en sensores inteligentes para la industria petrolera."
        badge="Vision con IA"
        variant="dark"
      />

      {/* Stats */}
      <section className="py-8 bg-emerald-600 text-white">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Vision */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Inteligencia Artificial</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                De camaras pasivas a sensores inteligentes
              </h2>
              <p className="text-muted-foreground mb-6">
                ATILAX Vision utiliza modelos de vision artificial entrenados especificamente
                para la industria petrolera, con mas de 50 clases de objetos optimizadas para
                entornos oil & gas. El procesamiento Edge garantiza respuesta en menos de 2
                segundos sin depender de conectividad a la nube.
              </p>
              <div className="space-y-3">
                {[
                  "Sin reemplazar camaras existentes — compatible con RTSP/ONVIF",
                  "Procesamiento Edge + Cloud hibrido",
                  "50+ clases de objetos entrenadas para oil & gas",
                  "Funciona offline en ubicaciones remotas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/stock/vision_ai_surveillance.jpg"
                alt="ATILAX Vision - Vigilancia inteligente con IA para la industria petrolera"
                width={1200}
                height={807}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Modules */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              5 Modulos Integrados
            </h2>
            <p className="text-muted-foreground">
              Cobertura completa de seguridad, cumplimiento HSE, emergencias,
              inspeccion de infraestructura y monitoreo ambiental en una sola plataforma.
            </p>
          </div>

          <div className="space-y-8">
            {modules.map((mod, index) => (
              <Card key={mod.title} className="overflow-hidden">
                <div className={`${mod.color} h-1.5`} />
                <CardContent className="p-6 md:p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl ${mod.color} text-white flex items-center justify-center`}>
                          <mod.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">Modulo {index + 1}</Badge>
                          <h3 className="text-xl font-bold">{mod.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{mod.description}</p>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        {mod.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Arquitectura de 3 Capas
            </h2>
            <p className="text-muted-foreground">
              Diseno escalable que maximiza la velocidad de respuesta y minimiza la dependencia de conectividad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {architecture.map((layer) => (
              <Card key={layer.title} className="text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl ${layer.color} flex items-center justify-center mx-auto mb-4`}>
                    <layer.icon className="h-8 w-8" />
                  </div>
                  <Badge variant="outline" className="mb-2">Capa {layer.layer}</Badge>
                  <h3 className="font-bold text-lg mb-1">{layer.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{layer.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{layer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Camera Compatibility */}
          <div className="bg-muted rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="h-6 w-6 text-primary" />
              <h3 className="font-bold text-lg">Compatibilidad de Camaras</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cameraTypes.map((type) => (
                <Badge key={type} variant="secondary" className="text-sm">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Resultados Cuantificables
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Impacto medible desde los primeros meses de implementacion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.description} className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                  <p className="text-sm text-white/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Centro de Control Visual
              </h2>
              <p className="text-muted-foreground mb-6">
                Panel unificado con todas las camaras, alertas activas, registro de eventos
                y mapas de calor. Acceso desde cualquier dispositivo con autenticacion segura.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vista en vivo de todas las camaras",
                  "Historial de detecciones con evidencia visual",
                  "Mapas de calor de actividad por zona",
                  "Configuracion de zonas y horarios",
                  "Reportes automaticos de seguridad y HSE",
                  "Acceso multi-dispositivo seguro",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/stock/vision_security_camera.jpg"
                alt="Sistema de camaras de seguridad industrial con IA"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto shadow-lg"
              />
              <Image
                src="/images/stock/vision_industrial_safety.jpg"
                alt="Monitoreo de seguridad industrial con vision artificial"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Especificaciones Tecnicas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Tiempo de respuesta", value: "< 2 segundos", icon: Clock },
              { label: "Clases de objetos", value: "50+ (oil & gas)", icon: Eye },
              { label: "Procesamiento", value: "Edge + Cloud hibrido", icon: Cpu },
              { label: "Conectividad", value: "Funciona offline", icon: Radio },
              { label: "Camaras soportadas", value: "IP, Termicas, PTZ, Drones", icon: Camera },
              { label: "ROI tipico", value: "3-6 meses", icon: Zap },
            ].map((spec) => (
              <div key={spec.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <spec.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  <p className="font-semibold">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Implementacion en 4 Fases
            </h2>
            <p className="text-muted-foreground">
              Metodologia probada que minimiza riesgos y maximiza resultados desde el primer piloto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={phase.title} className="relative">
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 relative z-10">
                    {phase.step}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{phase.title}</h3>
                  <Badge variant="outline" className="mb-3">{phase.duration}</Badge>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Proteja sus instalaciones con ATILAX Vision
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Solicite un diagnostico gratuito para evaluar como ATILAX Vision puede
            transformar la seguridad y el cumplimiento HSE en sus operaciones.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Solicitar Diagnostico
                <ArrowRight className="ml-2 h-4 w-4" />
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
    </>
  );
}
