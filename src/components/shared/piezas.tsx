import type { EstadoDemo, Video } from "@/lib/productos";

export function DemoChip({ estado }: { estado: EstadoDemo }) {
  return estado === "vivo" ? (
    <span className="chip border-primary bg-primary/10 text-primary">Demo en vivo</span>
  ) : (
    <span className="chip border-warn bg-warn/10 text-warn">Demo en activación</span>
  );
}

export function Videos({ videos }: { videos: Video[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {videos.map((v) => (
        <figure key={v.src}>
          {/* preload="none": sólo descarga el mp4 cuando el visitante le da play. */}
          <video controls preload="none" poster={v.poster} className="aspect-video w-full border bg-black">
            <source src={v.src} type="video/mp4" />
          </video>
          <figcaption className="mt-3">
            <span className="block font-semibold">{v.titulo}</span>
            <span className="text-sm text-muted-foreground">{v.duracion}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
