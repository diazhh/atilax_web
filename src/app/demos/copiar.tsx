"use client";

import { useState } from "react";

export function Copiar({ texto }: { texto: string }) {
  const [hecho, setHecho] = useState(false);
  return (
    <button
      type="button"
      className="font-semibold text-primary"
      onClick={() => {
        navigator.clipboard.writeText(texto);
        setHecho(true);
        setTimeout(() => setHecho(false), 1500);
      }}
    >
      {hecho ? "Copiado" : "Copiar"}
    </button>
  );
}
