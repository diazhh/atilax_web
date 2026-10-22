import type { Metadata } from "next";
import Link from "next/link";
import { videosHistoriador } from "@/lib/productos";
import { ListaReproduccion } from "@/components/shared/lista-reproduccion";

export const metadata: Metadata = {
  title: "Lista de reproducción — ATILAX Historiador",
  description: "Cuatro vídeos seguidos sobre ATILAX Historiador: el ecosistema, un campo, una refinería y el corporativo.",
};

export default function VideosPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-lg">
        <p className="eyebrow">Lista de reproducción</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">ATILAX Historiador</h1>
        <p className="mt-3 mb-8 text-lg text-muted-foreground">
          Cuatro vídeos, uno detrás de otro. Elija cualquiera de la lista para saltar a él.{" "}
          <Link href="/productos/historiador" className="font-semibold text-primary">Conozca el Historiador →</Link>
        </p>
        <ListaReproduccion videos={videosHistoriador} />
      </div>
    </section>
  );
}
