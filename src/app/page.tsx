import Link from "next/link";
import Image from "next/image";
import { productoPorSlug, suitePorGrupo, videosHistoriador } from "@/lib/productos";
import { Videos } from "@/components/shared/piezas";
import { LogoProducto } from "@/components/shared/logo-producto";

// Véalo funcionar: sin WellOS (sus vídeos son del WellOS viejo). Cuando exista «Un día en el campo», sustituye al de LiftOS.
const videos = [productoPorSlug("tankos")!.videos[0], videosHistoriador[0], productoPorSlug("liftos")!.videos[0]];

export default function Home() {
  return (
    <>
      <section className="container-lg grid items-center gap-14 py-16 md:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Suite Atilax · software industrial propio</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-[52px] md:leading-[60px]">
            El campo, el patio de tanques y la planta, en un solo software
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Plataformas de operación para petróleo y gas que se instalan en el servidor de su empresa. Sus
            datos se quedan en casa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demos" className="btn btn-primary">Probar demo</Link>
            <Link href="#productos" className="btn">Ver productos</Link>
          </div>
        </div>
        <div className="border border-foreground">
          <div className="flex h-7 items-center gap-2 border-b bg-muted px-3 text-[11px] text-muted-foreground">
            ● ● ● <span className="ml-2">tankos.atilax.io</span>
          </div>
          <Image
            src="/images/productos/tankos/calculo.webp"
            alt="Pantalla de TankOS: detalle de un tanque con la cadena de cálculo, del volumen observado a la masa."
            width={1600}
            height={1000}
            className="block h-auto w-full"
            priority
          />
        </div>
      </section>

      <section id="productos" className="scroll-mt-20 border-t bg-muted py-16 md:py-20">
        <div className="container-lg">
          <p className="eyebrow">Productos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[34px]">Cinco productos, una suite</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-4">
            {suitePorGrupo().map(({ grupo, items }) => (
              <div key={grupo} className="flex flex-col gap-4">
                <p className="eyebrow">{grupo}</p>
                {items.map((p) => {
                  const cuerpo = (
                    <>
                      <div className="flex flex-col items-start gap-2">
                        <LogoProducto slug={p.slug} tono="color" />
                        {p.etiqueta && <span className="chip">{p.etiqueta}</span>}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.linea}</p>
                      {p.href && <span className="mt-auto text-sm font-semibold text-primary">Ver producto →</span>}
                    </>
                  );
                  const cls = "flex flex-col gap-4 border bg-white p-5";
                  return p.href ? (
                    <Link key={p.slug} href={p.href} className={`${cls} hover:border-primary`}>{cuerpo}</Link>
                  ) : (
                    <div key={p.slug} className={cls}>{cuerpo}</div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white">
        <div className="container-lg flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-[28px]">Pruébelo usted mismo</h2>
            <p className="mt-2 text-green-100">
              Cada demo tiene un usuario de solo lectura: lo ve todo y no puede cambiar nada.
            </p>
          </div>
          <Link href="/demos" className="btn border-white bg-white text-primary hover:bg-green-50 hover:text-primary">
            Ir a los demos →
          </Link>
        </div>
      </section>

      <section id="tutoriales" className="scroll-mt-20 py-16 md:py-20">
        <div className="container-lg">
          <p className="eyebrow">Tutoriales</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[34px]">Véalo funcionar</h2>
          <Videos videos={videos} />
        </div>
      </section>
    </>
  );
}
