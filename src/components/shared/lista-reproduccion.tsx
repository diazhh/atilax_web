"use client";

import { useEffect, useRef, useState } from "react";
import type { Video } from "@/lib/productos";

/** Reproductor grande + lista: al terminar uno empieza el siguiente. */
export function ListaReproduccion({ videos }: { videos: Video[] }) {
  const [actual, setActual] = useState(0);
  // Sólo arranca solo después de que el visitante eligió o ya vio uno: nada suena al cargar la página.
  const [auto, setAuto] = useState(false);
  // Apagados por defecto: los vídeos ya traen el texto quemado en la imagen; la pista es para quien la pida.
  const [subs, setSubs] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const v = videos[actual];

  useEffect(() => {
    const pista = ref.current?.textTracks[0];
    if (pista) pista.mode = subs ? "showing" : "hidden";
  }, [subs, actual]);

  const ir = (i: number) => {
    setAuto(true);
    setActual(i);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div>
        <video
          key={v.src}
          ref={ref}
          controls
          autoPlay={auto}
          preload={auto ? "auto" : "none"}
          poster={v.poster}
          onEnded={() => actual < videos.length - 1 && ir(actual + 1)}
          className="aspect-video w-full border bg-black"
        >
          <source src={v.src} type="video/mp4" />
          {v.subtitulos && <track kind="subtitles" srcLang="es" label="Español" src={v.subtitulos} default={subs} />}
        </video>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              {actual + 1} de {videos.length} · {v.duracion}
            </p>
            <h3 className="mt-1 text-xl font-bold md:text-2xl">{v.titulo}</h3>
          </div>
          {v.subtitulos && (
            <button type="button" onClick={() => setSubs(!subs)} aria-pressed={subs} className="btn py-2 text-sm">
              Subtítulos: {subs ? "sí" : "no"}
            </button>
          )}
        </div>
      </div>

      <ol className="flex flex-col border bg-white lg:max-h-[560px] lg:overflow-y-auto">
        {videos.map((x, i) => (
          <li key={x.src} className="border-b last:border-0">
            <button
              type="button"
              onClick={() => ir(i)}
              aria-current={i === actual}
              className={`flex w-full items-start gap-3 p-3 text-left hover:bg-muted ${
                i === actual ? "bg-primary/10" : ""
              }`}
            >
              <span className="w-5 shrink-0 pt-1 text-center text-sm font-semibold text-muted-foreground">
                {i === actual ? "▶" : i + 1}
              </span>
              <span className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element -- miniatura de 128 px, no merece next/image */}
                <img src={x.poster} alt="" width={128} height={72} className="h-[72px] w-32 border object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/80 px-1 text-[11px] font-semibold text-white">
                  {x.duracion}
                </span>
              </span>
              <span className="min-w-0">
                <span className={`block text-sm leading-snug font-semibold ${i === actual ? "text-primary" : ""}`}>
                  {x.titulo}
                </span>
                {i === actual && <span className="mt-1 block text-xs text-primary">Reproduciendo</span>}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
