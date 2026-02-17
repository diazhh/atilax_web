import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos para una demostración personalizada de ATILAX. Estamos listos para transformar su operación petrolera.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@atilax.io",
    href: "mailto:info@atilax.io",
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
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
    title: "Ubicación",
    value: "Venezuela",
  },
];

const solutions = [
  "Monitoreo de Pozos Petroleros",
  "Estaciones de Flujo",
  "Gestión de Flota",
  "Seguridad Perimetral con IA",
  "Solución Integral",
  "Consultoría IoT",
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estamos listos para transformar su operación petrolera. Solicite una demostración personalizada."
        badge="Hablemos"
      />

      <section className="py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold mb-6">Información de Contacto</h2>

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
                <h3 className="font-semibold mb-3">Síguenos</h3>
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
                  <h2 className="text-xl font-bold mb-6">Solicite una Demostración</h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
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
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Nombre de su empresa"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+58 424 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        ¿Qué solución le interesa? *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Seleccione una opción</option>
                        {solutions.map((solution) => (
                          <option key={solution} value={solution}>
                            {solution}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Cuéntenos sobre su operación
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Número de pozos, ubicación, desafíos actuales..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 w-4 h-4 rounded border-input"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        Acepto la política de privacidad y autorizo el tratamiento de
                        mis datos para recibir información sobre ATILAX.
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
