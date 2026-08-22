import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EstadoBadge } from "@/components/shared/estado-badge";
import { productos, productoPorSlug } from "@/lib/productos";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const producto = productoPorSlug(slug);
  if (!producto) return { title: "Producto no encontrado" };

  return {
    title: producto.nombre,
    description: producto.resumen,
  };
}

export default async function ProductoPage({ params }: Params) {
  const { slug } = await params;
  const producto = productoPorSlug(slug);
  if (!producto) notFound();

  const Icon = producto.icon;
  const relacionados = productos
    .filter((p) => p.categoria === producto.categoria && p.slug !== producto.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container-lg">
          <Link
            href="/productos"
            className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Todos los productos
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                <Icon className="h-7 w-7 text-secondary" />
              </div>
              <EstadoBadge estado={producto.estado} className="bg-white/10 text-white border-white/20" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {producto.nombre}
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-6">
              {producto.tagline}
            </p>
            <p className="text-lg text-white/70 mb-8">{producto.resumen}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold w-full sm:w-auto"
                >
                  Solicitar demostracion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {producto.demo && (
                <a href={producto.demo.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto"
                  >
                    {producto.demo.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Descripcion */}
      <section className="py-16 md:py-20">
        <div className="container-lg">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              {producto.descripcion.map((parrafo, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg text-foreground leading-relaxed"
                      : "text-muted-foreground leading-relaxed"
                  }
                >
                  {parrafo}
                </p>
              ))}

              {producto.nota && (
                <div className="flex gap-3 rounded-xl border border-secondary/30 bg-secondary/5 p-4">
                  <Info className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {producto.nota}
                  </p>
                </div>
              )}
            </div>

            <aside>
              <Card className="border-border bg-muted/40 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    Sobre que corre
                  </h3>
                  <ul className="space-y-2.5">
                    {producto.stack.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="text-sm font-semibold text-foreground mb-2">
                      Estado
                    </div>
                    <EstadoBadge estado={producto.estado} />
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-16 md:py-20 bg-muted/40 border-y">
        <div className="container-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Que hace
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {producto.capacidades.map((cap) => (
              <div key={cap.titulo} className="flex gap-4">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {cap.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.detalle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-lg">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Tambien en {producto.categoria.toLowerCase()}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relacionados.map((rel) => {
                const RelIcon = rel.icon;
                return (
                  <Link key={rel.slug} href={`/productos/${rel.slug}`}>
                    <Card className="group h-full border-border hover:border-primary/40 hover:shadow-lg transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <RelIcon className="h-5 w-5 text-primary" />
                          </div>
                          <EstadoBadge estado={rel.estado} />
                        </div>
                        <h3 className="font-bold text-foreground mb-1">
                          {rel.nombre}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {rel.tagline}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quiere ver {producto.nombre} sobre su operacion?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Montamos una demostracion con datos parecidos a los suyos y le
            decimos con franqueza que parte del alcance esta lista hoy y que
            parte esta en construccion.
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
            >
              Agendar una demostracion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
