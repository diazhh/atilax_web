import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { productoPorSlug, productos } from "@/lib/productos";
import { DemoChip, Videos } from "@/components/shared/piezas";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = productoPorSlug((await params).slug);
  return p ? { title: `${p.nombre} — ${p.titulo}`, description: p.parrafo } : {};
}

export default async function ProductoPage({ params }: Params) {
  const p = productoPorSlug((await params).slug);
  if (!p) notFound();

  return (
    <>
      <section className="border-b bg-muted py-14 md:py-16">
        <div className="container-lg grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{p.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{p.nombre}</h1>
            <p className="mt-3 text-2xl font-semibold">{p.titulo}</p>
            <p className="mt-5 text-lg text-muted-foreground">{p.parrafo}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={`/demos#${p.slug}`} className="btn btn-primary">Probar el demo</Link>
              <Link href="/contacto" className="btn">Pedir una presentación</Link>
              <DemoChip estado={p.demo.estado} />
            </div>
          </div>
          <Image
            src={p.imagen}
            alt={`Pantalla de ${p.nombre}`}
            width={1600}
            height={1000}
            className="h-auto w-full border border-foreground"
            priority
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-lg space-y-16">
          {p.bloques.map((b, i) => (
            <div key={b.titulo} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{b.titulo}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{b.texto}</p>
              </div>
              <Image src={b.imagen} alt={b.titulo} width={1600} height={1000} className="h-auto w-full border" />
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            Capturas en un escenario de demostración. Las cifras no corresponden a ningún cliente.
          </p>
        </div>
      </section>

      {p.videos.length > 0 && (
        <section className="border-t bg-muted py-16 md:py-20">
          <div className="container-lg">
            <p className="eyebrow">Tutoriales</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">{p.nombre}, en vídeo</h2>
            <Videos videos={p.videos} />
          </div>
        </section>
      )}

      <section className="bg-primary py-12 text-white">
        <div className="container-lg flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Entre al demo de {p.nombre}</h2>
            <p className="mt-2 text-green-100">{p.demo.descripcion}</p>
            {p.ficha && (
              <a href={p.ficha} className="mt-2 inline-block text-green-100 underline">
                Ficha completa en venecorr.com
              </a>
            )}
          </div>
          <Link href={`/demos#${p.slug}`} className="btn border-white bg-white text-primary hover:bg-green-50 hover:text-primary">
            Ver enlace y credenciales →
          </Link>
        </div>
      </section>
    </>
  );
}
