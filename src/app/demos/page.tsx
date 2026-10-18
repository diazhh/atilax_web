import type { Metadata } from "next";
import Image from "next/image";
import { productos } from "@/lib/productos";
import { DemoChip } from "@/components/shared/piezas";
import { Copiar } from "./copiar";

export const metadata: Metadata = {
  title: "Demos en vivo",
  description:
    "Entre a los demos de ATILAX WellOS, TankOS, LiftOS y ATILAX ERP con un usuario de solo lectura: lo ve todo y no puede cambiar nada.",
};

export default function DemosPage() {
  return (
    <>
      <section className="border-b bg-muted py-14">
        <div className="container-lg">
          <p className="eyebrow">Demos en vivo</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-[44px]">Entre y mire. No va a romper nada.</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Cada demo corre sobre datos de demostración en nuestro servidor. El usuario de abajo es de solo
            lectura: ve todas las pantallas, pero ningún botón que cambie datos le va a funcionar.
          </p>
        </div>
      </section>

      <section className="container-lg space-y-6 py-10 md:pb-20">
        {productos.map(({ slug, nombre, imagen, demo }) => {
          const vivo = demo.estado === "vivo";
          return (
            <article key={slug} id={slug} className="grid scroll-mt-24 grid-cols-1 border bg-white md:grid-cols-[420px_1fr]">
              <Image
                src={imagen}
                alt={`Pantalla de ${nombre}`}
                width={840}
                height={560}
                className="h-56 w-full border-b object-cover object-top md:h-full md:border-b-0 md:border-r"
              />
              <div className="flex flex-col gap-4 p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold">{nombre}</h2>
                  <DemoChip estado={demo.estado} />
                </div>
                <p className="text-muted-foreground">{demo.descripcion}</p>
                <dl className="grid grid-cols-[90px_1fr_auto] border text-sm sm:grid-cols-[110px_1fr_auto]">
                  <dt className="border-b bg-muted px-3 py-2.5 font-semibold text-muted-foreground">Enlace</dt>
                  <dd className="border-b px-3 py-2.5 font-mono break-all">{demo.url.replace("https://", "")}</dd>
                  <dd className="border-b px-3 py-2.5 text-right">
                    {vivo ? (
                      <a href={demo.url} target="_blank" rel="noopener" className="font-semibold text-primary">
                        Abrir ↗
                      </a>
                    ) : (
                      <span className="text-muted-foreground">Pronto</span>
                    )}
                  </dd>
                  <dt className="border-b bg-muted px-3 py-2.5 font-semibold text-muted-foreground">Usuario</dt>
                  <dd className="border-b px-3 py-2.5 font-mono break-all">{demo.usuario}</dd>
                  <dd className="border-b px-3 py-2.5 text-right">{vivo && demo.usuario && <Copiar texto={demo.usuario} />}</dd>
                  <dt className="bg-muted px-3 py-2.5 font-semibold text-muted-foreground">Clave</dt>
                  <dd className={vivo ? "px-3 py-2.5 font-mono" : "px-3 py-2.5 text-muted-foreground"}>
                    {vivo ? demo.clave : "Se publica al activar el demo"}
                  </dd>
                  <dd className="px-3 py-2.5 text-right">{vivo && demo.clave && <Copiar texto={demo.clave} />}</dd>
                </dl>
                <p className="border-l-[3px] border-primary pl-3 text-sm text-muted-foreground">{demo.rol}</p>
                {demo.manual && (
                  <a href={demo.manual.url} className="text-sm font-semibold text-primary">
                    {demo.manual.label} ↗
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
