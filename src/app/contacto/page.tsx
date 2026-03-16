"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@atilax.io",
    href: "mailto:info@atilax.io",
  },
  {
    icon: Phone,
    title: "Telefono / WhatsApp",
    value: "+58 412 609 9040",
    href: "https://wa.me/584126099040",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Soporte 24/7",
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    value: "Venezuela",
  },
];

const solutions = [
  "Monitoreo de Pozos Petroleros",
  "Monitoreo de Perforacion",
  "Optimizacion de Produccion",
  "Estaciones de Flujo",
  "Gestion de Flota",
  "Seguridad Perimetral con IA (ATILAX Vision)",
  "Simulador de Pozos",
  "Solucion Integral",
  "Consultoria IoT",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    solution: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacy) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", solution: "", message: "" });
        setPrivacy(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estamos listos para transformar su operacion. Solicite una demostracion personalizada."
        badge="Hablemos"
      />

      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold mb-6">Informacion de Contacto</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">Siguenos</h3>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter", "YouTube"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors text-xs font-medium"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Solicitud Enviada</h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Hemos recibido su solicitud. Nuestro equipo se pondra en contacto con usted
                          en las proximas 24 horas habiles.
                        </p>
                        <Button onClick={() => setStatus("idle")} variant="outline">
                          Enviar otra solicitud
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-xl font-bold mb-6">Solicite una Demostracion</h2>

                        {status === "error" && (
                          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                            Error al enviar el mensaje. Por favor intente de nuevo o escribanos a info@atilax.io
                          </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Nombre completo *
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="Su nombre"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Email corporativo *
                              </label>
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="email@empresa.com"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Empresa *
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="Nombre de su empresa"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Telefono
                              </label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="+58 424 123 4567"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Que solucion le interesa? *
                            </label>
                            <select
                              required
                              value={formData.solution}
                              onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="">Seleccione una opcion</option>
                              {solutions.map((solution) => (
                                <option key={solution} value={solution}>
                                  {solution}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Cuentenos sobre su operacion
                            </label>
                            <textarea
                              rows={4}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                              placeholder="Numero de pozos, ubicacion, desafios actuales..."
                            />
                          </div>

                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="privacy"
                              checked={privacy}
                              onChange={(e) => setPrivacy(e.target.checked)}
                              required
                              className="mt-1 w-4 h-4 rounded border-input"
                            />
                            <label htmlFor="privacy" className="text-sm text-muted-foreground">
                              Acepto la politica de privacidad y autorizo el tratamiento de
                              mis datos para recibir informacion sobre ATILAX.
                            </label>
                          </div>

                          <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={status === "loading"}
                          >
                            {status === "loading" ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Enviando...
                              </>
                            ) : (
                              "Enviar Solicitud"
                            )}
                          </Button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
