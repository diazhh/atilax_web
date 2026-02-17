import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  Bell,
  FileText,
  Smartphone,
  Settings,
  Lock,
  Wifi,
  Server,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Plataforma",
  description:
    "Plataforma IoT industrial con dashboards personalizados, motor de reglas, alarmas y notificaciones multicanal.",
};

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboards Personalizados",
    description: "Widgets drag-and-drop. Gauges, gráficos en tiempo real, mapas GPS y diagramas P&ID.",
  },
  {
    icon: Settings,
    title: "Motor de Reglas",
    description: "Configure condiciones y acciones automáticas sin programación.",
  },
  {
    icon: Bell,
    title: "Sistema de Alarmas",
    description: "Clasificación por severidad con escalamiento automático configurable.",
  },
  {
    icon: Smartphone,
    title: "Notificaciones Multicanal",
    description: "Email, SMS, WhatsApp Business, Telegram y Push móvil.",
  },
  {
    icon: FileText,
    title: "Reportes Automáticos",
    description: "Producción diaria, balance, inventario. PDF, Excel y CSV programados.",
  },
  {
    icon: Lock,
    title: "Seguridad Empresarial",
    description: "TLS 1.3, AES-256, autenticación 2FA, arquitectura Multi-Tenant.",
  },
];

const protocols = ["Modbus RTU", "Modbus TCP/IP", "OPC-UA", "REST API"];

const communications = [
  { name: "LoRaWAN", range: "Hasta 15 km" },
  { name: "4G/LTE", range: "Cobertura móvil" },
  { name: "WiFi Industrial", range: "Áreas locales" },
  { name: "Radio Enlaces", range: "Hasta 50 km" },
  { name: "Satélite", range: "Global" },
];

export default function PlataformaPage() {
  return (
    <>
      <PageHeader
        title="Plataforma"
        description="Arquitectura IoT de grado industrial. Robusta, escalable y probada en mas de 5,000 instalaciones globales."
        badge="Tecnología"
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Características del Software
            </h2>
            <p className="text-muted-foreground">
              Herramientas completas para gestionar toda su operación desde una sola plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Arquitectura Robusta
              </h2>
              <p className="text-muted-foreground mb-6">
                Procesamiento Edge para operación continua incluso sin conectividad.
                Sus datos nunca se pierden.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-primary" />
                    Protocolos Industriales
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {protocols.map((protocol) => (
                      <Badge key={protocol} variant="outline">
                        {protocol}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    Comunicaciones de Campo
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {communications.map((comm) => (
                      <div key={comm.name} className="text-sm">
                        <span className="font-medium">{comm.name}</span>
                        <span className="text-muted-foreground ml-2">({comm.range})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/capturas/monitoreo/01_monitoreo_mosaico_63_pozos.png"
                alt="Vista mosaico de 63 pozos - Arquitectura de monitoreo en tiempo real"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Edge Computing */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/capturas/monitoreo/05_detalle_esp_kpis.png"
                alt="Detalle ESP - Procesamiento de datos en tiempo real"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4">Edge Computing</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Procesamiento Local
              </h2>
              <p className="text-muted-foreground mb-6">
                Los dispositivos de borde procesan datos localmente, almacenan información
                ante pérdida de conexión y sincronizan automáticamente al recuperar comunicación.
              </p>
              <ul className="space-y-3">
                {[
                  "Operación autónoma en modo offline",
                  "Almacenamiento temporal de datos",
                  "Sincronización automática",
                  "Reducción de ancho de banda hasta 99%",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Trust */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Plataforma IoT de Clase Mundial
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Tecnologia madura y estable con mas de 5,000 instalaciones globales.
            En constante evolucion y adaptada a la industria petrolera.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["+5,000 instalaciones globales", "APIs abiertas", "Sin vendor lock-in", "Escalable a miles de dispositivos"].map(
              (item) => (
                <Badge key={item} variant="secondary" className="bg-white/10 text-white border-0">
                  {item}
                </Badge>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vea la plataforma en acción
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Solicite una demostración personalizada y descubra todas las capacidades de ATILAX.
          </p>
          <Link href="/contacto">
            <Button size="lg">
              Solicitar Demostración
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
