import { cn } from "@/lib/utils";
import type { EstadoProducto } from "@/lib/productos";

/** Colores por estado de madurez. Verde solo para lo que de verdad corre en
 *  produccion — el badge es una promesa comercial, no decoracion. */
const estilos: Record<EstadoProducto, string> = {
  "En produccion": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Disponible: "bg-sky-50 text-sky-700 border-sky-200",
  "En desarrollo": "bg-amber-50 text-amber-700 border-amber-200",
  "En diseno": "bg-slate-100 text-slate-600 border-slate-200",
};

export function EstadoBadge({
  estado,
  className,
}: {
  estado: EstadoProducto;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium",
        estilos[estado],
        className
      )}
    >
      {estado}
    </span>
  );
}
