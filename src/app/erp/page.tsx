import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Building2,
  Droplets,
  FileText,
  Shield,
  DollarSign,
  FolderKanban,
  ShoppingCart,
  Users,
  Globe,
  Clock,
  Database,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "ERP | ATILAX",
  description:
    "Sistema de Gestion Empresarial Integrado para Oil & Gas. 36 modulos, 190+ modelos de datos, multiidioma. Produccion, finanzas, RRHH, contratos y operaciones.",
};

const stats = [
  { value: "36", label: "Modulos" },
  { value: "190+", label: "Modelos de datos" },
  { value: "3", label: "Idiomas" },
  { value: "24/7", label: "Disponible" },
];

const benefits = [
  "Visibilidad total de operaciones en tiempo real",
  "Automatizacion de procesos administrativos y operacionales",
  "Integracion entre finanzas, RRHH, operaciones y logistica",
  "Reportes ejecutivos y dashboards personalizables",
  "Cumplimiento normativo venezolano (LOTTT, tributario)",
  "Escalabilidad para crecer sin cambiar de sistema",
];

const oilGasModules = [
  {
    icon: Droplets,
    title: "Produccion O&G",
    description:
      "Control de produccion diaria, asignacion por pozo, seguimiento de declinacion y reportes regulatorios.",
  },
  {
    icon: FileText,
    title: "AFE (Authorization for Expenditure)",
    description:
      "Gestion de autorizaciones de gasto para proyectos de perforacion, workover e intervenciones.",
  },
  {
    icon: DollarSign,
    title: "JIB (Joint Interest Billing)",
    description:
      "Facturacion de intereses compartidos entre socios operadores con distribucion automatica de costos.",
  },
  {
    icon: Shield,
    title: "PTW (Permisos de Trabajo)",
    description:
      "Flujo digital de permisos de trabajo en caliente, altura, espacios confinados y trabajos electricos.",
  },
];

const allModules = [
  { emoji: "📊", name: "Dashboard" },
  { emoji: "👥", name: "Empleados" },
  { emoji: "🏢", name: "Organizacion" },
  { emoji: "💵", name: "Nomina" },
  { emoji: "🏦", name: "Finanzas" },
  { emoji: "🏧", name: "Cuentas Bancarias" },
  { emoji: "📒", name: "Contabilidad" },
  { emoji: "📋", name: "Plan de Cuentas" },
  { emoji: "📈", name: "Presupuesto" },
  { emoji: "💰", name: "Caja Chica" },
  { emoji: "🏗️", name: "Proyectos" },
  { emoji: "🛒", name: "Compras" },
  { emoji: "📦", name: "Inventario" },
  { emoji: "🚗", name: "Flota" },
  { emoji: "🦺", name: "HSE" },
  { emoji: "📂", name: "Documentos" },
  { emoji: "🤝", name: "CRM" },
  { emoji: "⭐", name: "Calidad" },
  { emoji: "🛢️", name: "Produccion O&G" },
  { emoji: "✅", name: "AFE" },
  { emoji: "📝", name: "Contratos" },
  { emoji: "🔍", name: "Compliance" },
  { emoji: "🤝", name: "JIB" },
  { emoji: "🔒", name: "PTW" },
  { emoji: "⚗️", name: "Reservas" },
  { emoji: "🔄", name: "Logistica" },
];

const featuredModules = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Ejecutivo",
    description:
      "Panel de KPIs en tiempo real integrado con todos los modulos. Indicadores financieros, operacionales y de RRHH en una sola vista.",
  },
  {
    icon: DollarSign,
    title: "Finanzas y Tesoreria",
    description:
      "Control de flujo de efectivo, operaciones multimoneda (USD/VES/EUR), conciliacion bancaria automatica y reportes tributarios.",
  },
  {
    icon: FolderKanban,
    title: "Gestion de Proyectos",
    description:
      "Control de alcance, cronograma y presupuesto integrado. Seguimiento de hitos, asignacion de recursos y analisis de desviaciones.",
  },
  {
    icon: ShoppingCart,
    title: "Compras y Procura",
    description:
      "Ciclo completo de compras: requisiciones, cotizaciones, ordenes de compra, recepcion y trazabilidad de proveedores.",
  },
];

export default function ERPPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader
        title="ATILAX ERP"
        description="Una plataforma unificada que integra todos los procesos de su empresa: produccion, finanzas, RRHH, contratos y operaciones."
        badge="Oil & Gas · Venezuela"
        variant="dark"
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

      {/* What is an ERP */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Que es un ERP?</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                Un ERP (Enterprise Resource Planning) es un sistema integrado que
                centraliza todos los procesos criticos de una empresa en una sola
                plataforma: finanzas, recursos humanos, operaciones, compras,
                inventario y mas.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                ATILAX ERP esta disenado especificamente para empresas del sector
                Oil & Gas en Venezuela, con modulos que cubren desde la nomina bajo
                LOTTT hasta el control de produccion por pozo, todo integrado bajo
                un mismo ecosistema.
              </p>
              <Badge variant="outline" className="text-sm">
                Sistema de Gestion Empresarial Integrado
              </Badge>
            </div>
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Oil & Gas Specialization */}
      <section className="py-16 md:py-24 bg-gradient-hero text-white">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Droplets className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Especializado para la Industria Petrolera
            </h2>
            <p className="text-lg text-white/70">
              Modulos disenados especificamente para las operaciones de Oil & Gas,
              cumplimiento regulatorio y gestion de joint ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {oilGasModules.map((mod) => (
              <div
                key={mod.title}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <mod.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">{mod.title}</h3>
                </div>
                <p className="text-white/70">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Modules Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Todos los Modulos del Sistema
            </h2>
            <p className="text-lg text-muted-foreground">
              26 modulos integrados que cubren todas las areas de su empresa,
              desde recursos humanos hasta produccion petrolera.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allModules.map((mod) => (
              <div
                key={mod.name}
                className="bg-white rounded-xl p-4 text-center border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">{mod.emoji}</div>
                <div className="text-sm font-medium">{mod.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modulos Destacados
            </h2>
            <p className="text-lg text-muted-foreground">
              Capacidades clave que impulsan la eficiencia y el control en su organizacion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredModules.map((mod) => (
              <Card key={mod.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <mod.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{mod.title}</h3>
                  <p className="text-muted-foreground">{mod.description}</p>
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
            Listo para digitalizar su empresa?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Solicite una demostracion del ERP y descubra como integrar todos los
            procesos de su organizacion en una sola plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              >
                Solicitar Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/plataforma">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Ver Plataforma IoT
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
