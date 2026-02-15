"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Truck,
  Shield,
  Zap,
  Droplets,
  Mountain,
  Wheat,
  Ship,
  Factory,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

const industries = [
  {
    icon: Activity,
    title: "Industria Petrolera",
    description: "Pozos BM, BCP, Gas Lift, estaciones y tanques.",
    href: "/soluciones/petrolera",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Zap,
    title: "Infraestructura Critica",
    description: "Subestaciones, bombeo de agua y telecom.",
    href: "/soluciones/infraestructura",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Mountain,
    title: "Mineria",
    description: "Maquinaria pesada, plantas de proceso.",
    href: "/soluciones/mineria",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Wheat,
    title: "Agroindustria",
    description: "Riego tecnificado, bombeo solar, maquinaria.",
    href: "/soluciones/agroindustria",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Ship,
    title: "Puertos y Logistica",
    description: "Terminales, contenedores, almacenes.",
    href: "/soluciones/puertos",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Factory,
    title: "Zonas Industriales",
    description: "Manufactura, eficiencia energetica.",
    href: "/soluciones/industria",
    color: "bg-purple-500/10 text-purple-600",
  },
];

const crossSolutions = [
  {
    icon: Truck,
    title: "Gestion de Flota",
    description: "GPS, telemetria y control de combustible para cualquier industria.",
    href: "/soluciones/flota",
  },
  {
    icon: Shield,
    title: "Seguridad con IA",
    description: "Vigilancia perimetral con vision artificial y deteccion automatica.",
    href: "/soluciones/seguridad",
  },
];

const stats = [
  { value: "30-50%", label: "Reduccion de fallas" },
  { value: "24/7", label: "Monitoreo continuo" },
  { value: "70-90%", label: "Prevencion de robos" },
  { value: "200-350%", label: "ROI a 3 anos" },
];

const features = [
  "Disenado para las condiciones de Venezuela",
  "Conectividad LoRaWAN, 4G y satelite",
  "Operacion offline con Edge Computing",
  "Energia solar para zonas remotas",
  "Soporte tecnico local 24/7",
  "Sin vendor lock-in - datos abiertos",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
        </div>

        <div className="container-lg relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-secondary font-medium text-sm mb-4">
                Plataforma IoT para la Industria
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                Inteligencia digital para{" "}
                <span className="text-secondary">toda su operacion</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Monitoreo IoT de activos, flota y seguridad perimetral con IA.
                Desde campos petroleros hasta plantas industriales, desde minas hasta fincas agricolas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                  >
                    Solicitar Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://panel.atilax.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    Probar Plataforma
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                  <Image
                    src="/images/capturas/monitoreo/01_monitoreo_mosaico_63_pozos.png"
                    alt="Dashboard de monitoreo ATILAX - Vista mosaico de 63 pozos petroleros en tiempo real"
                    width={1920}
                    height={1080}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted border-y">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-28">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Soluciones por Industria
            </h2>
            <p className="text-lg text-muted-foreground">
              ATILAX se adapta a las necesidades especificas de cada sector productivo de Venezuela.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={industry.href}>
                  <Card className="h-full group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${industry.color.split(' ')[0]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <industry.icon className={`h-6 w-6 ${industry.color.split(' ')[1]}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cross-sector solutions */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {crossSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={solution.href}>
                  <Card className="h-full group hover:shadow-lg hover:border-secondary/30 transition-all duration-300 border-dashed">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                        <solution.icon className="h-6 w-6 text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-secondary transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {solution.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/soluciones">
              <Button variant="outline" size="lg">
                Ver todas las soluciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why ATILAX Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Disenado para Venezuela
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ATILAX esta optimizado para las condiciones unicas de la industria venezolana:
                zonas remotas, conectividad limitada, entornos hostiles y necesidad de
                operacion autonoma.
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/plataforma">
                <Button className="bg-primary">
                  Conocer la plataforma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/capturas/optimizacion/01_optimizacion_waterfall.png"
                alt="Optimizacion de produccion petrolera - Grafico waterfall mostrando oportunidades de mejora"
                width={1920}
                height={1080}
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comience a transformar su operacion
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Solicite una demostracion personalizada y descubra el potencial de
              la digitalizacion industrial para su sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                >
                  Solicitar Demostracion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://panel.atilax.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Probar Demo en Vivo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
