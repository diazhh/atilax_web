import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EstadoBadge } from "@/components/shared/estado-badge";
import { categorias, productos } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "El portafolio de productos de ATILAX: plataformas de operacion, capas de inteligencia y gestion, y hardware de control disenado en casa. Que hace cada uno y en que estado esta.",
};

export default function ProductosPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        badge="Portafolio"
        title="Lo que estamos construyendo"
        description="No revendemos plataformas: las construimos. Aqui esta el portafolio completo — que hace cada producto, sobre que corre y en que punto de su desarrollo esta hoy."
      />

      {/* Resumen del portafolio */}
      <section className="py-12 bg-muted border-b">
        <div className="container-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { valor: String(productos.length), etiqueta: "Productos en el portafolio" },
              {
                valor: String(productos.filter((p) => p.estado === "En produccion").length),
                etiqueta: "Operando en produccion",
              },
              {
                valor: String(productos.filter((p) => p.estado === "En desarrollo").length),
                etiqueta: "En desarrollo activo",
              },
              { valor: "100%", etiqueta: "Desarrollo propio" },
            ].map((s) => (
              <div key={s.etiqueta}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {s.valor}
                </div>
                <div className="text-sm text-muted-foreground">{s.etiqueta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogo por categoria */}
      {categorias.map((categoria, i) => {
        const items = productos.filter((p) => p.categoria === categoria.nombre);
        if (items.length === 0) return null;

        return (
          <section
            key={categoria.nombre}
            className={i % 2 === 1 ? "py-16 md:py-20 bg-muted/40" : "py-16 md:py-20"}
          >
            <div className="container-lg">
              <div className="max-w-2xl mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {categoria.nombre}
                </h2>
                <p className="text-muted-foreground">{categoria.descripcion}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {items.map((producto) => {
                  const Icon = producto.icon;
                  return (
                    <Card
                      key={producto.slug}
                      className="group border-border hover:border-primary/40 hover:shadow-lg transition-smooth h-full"
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <EstadoBadge estado={producto.estado} />
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {producto.nombre}
                        </h3>
                        <p className="text-sm text-amber-700 font-medium mb-3">
                          {producto.tagline}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {producto.resumen}
                        </p>

                        <div className="mt-auto flex flex-wrap items-center gap-3">
                          <Link href={`/productos/${producto.slug}`}>
                            <Button variant="outline" size="sm">
                              Ver detalle
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                          {producto.demo && (
                            <a
                              href={producto.demo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                            >
                              {producto.demo.label}
                              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Su operacion no cabe en ninguno de estos?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Todos estos productos nacieron de un problema concreto de un cliente
            concreto. Cuentenos el suyo y le decimos con franqueza si algo del
            portafolio le sirve, si hay que adaptarlo o si no somos la respuesta.
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
            >
              Hablemos de su caso
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
