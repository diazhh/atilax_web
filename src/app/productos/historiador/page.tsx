import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { videosHistoriador } from "@/lib/productos";
import { ListaReproduccion } from "@/components/shared/lista-reproduccion";

export const metadata: Metadata = {
  title: "ATILAX Historiador — La memoria de la planta",
  description:
    "Guarda cada señal con su hora y su calidad, durante años. Un historiador por sitio, leído por OPC en una sola dirección, y un historiador corporativo donde cada área ve lo suyo.",
};

const IMG = "/images/productos/historiador";

const capacidades = [
  {
    titulo: "Viaje en el tiempo sobre las pantallas HMI",
    texto: "Las mismas pantallas de la consola, con los valores de cualquier momento pasado. Se rebobina, se adelanta y se vuelve a ahora.",
    imagen: `${IMG}/visor-hmi.webp`,
  },
  {
    titulo: "Explorador de proceso con un solo cursor",
    texto: "Todas las tendencias de una unidad alineadas en la misma hora: un cursor recorre todas a la vez.",
    imagen: `${IMG}/explorador.webp`,
  },
  {
    titulo: "Eventos con causa raíz",
    texto: "Cada disparo o parada queda como evento: qué pasó, a qué hora, qué señal lo anunció y cuánto costó.",
    imagen: `${IMG}/detalle-evento.webp`,
  },
  {
    titulo: "Alarmas agrupadas y avisos",
    texto: "Las alarmas que nacen de una misma causa se ven juntas; lo que importa llega como aviso a quien le toca.",
    imagen: `${IMG}/lista-alarmas.webp`,
  },
  {
    titulo: "Salud de equipos",
    texto: "Detecta anomalías en bombas, compresores y hornos antes de que fallen, comparando cada equipo con su propia historia.",
    imagen: `${IMG}/salud-bes.webp`,
  },
  {
    titulo: "Laboratorio con la hora de la muestra",
    texto: "El análisis entra con la hora en que se tomó la muestra, no con la hora en que se cargó: queda junto al proceso que la produjo.",
    imagen: `${IMG}/laboratorio.webp`,
  },
  {
    titulo: "Balances con banda, sin ajustes a mano",
    texto: "El balance dice si cierra dentro de su banda. Un registro nuevo entra con su hora y la vista anterior queda guardada.",
    imagen: `${IMG}/balance-despues.webp`,
  },
  {
    titulo: "Asistente IA con la fuente de cada cifra",
    texto: "Pregunte en lenguaje natural; cada respuesta dice de qué señal y de qué hora sale. Corre en los servidores de su empresa.",
    imagen: `${IMG}/asistente.webp`,
  },
];

const negocios = ["Producción", "Mejoramiento", "Refinación", "Transporte y oleoductos", "Terminales", "Ventas", "Consumo interno"];

const suite = [
  { nombre: "TankOS", texto: "Patios de tanques y tickets de transferencia. Su ticket es el dato fiscal.", href: "/productos/tankos" },
  { nombre: "ATILAX WellOS", texto: "Operación de pozos y estaciones, con su SCADA.", href: "/productos/wellos" },
  { nombre: "ATILAX LiftOS / BH5", texto: "Control del balancín hidráulico en el pozo.", href: "/productos/liftos" },
  { nombre: "ATILAX Vision", texto: "Visión artificial y vigilancia en el campo." },
];

export default function HistoriadorPage() {
  return (
    <>
      <section className="border-b bg-muted py-14 md:py-16">
        <div className="container-lg grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Historiador de planta y corporativo</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">ATILAX Historiador</h1>
            <p className="mt-3 text-2xl font-semibold">La memoria de la planta</p>
            <p className="mt-5 text-lg text-muted-foreground">
              Guarda cada señal con su hora y su calidad, durante años. Lo lee de la red de control sin tocarla y lo
              entrega a quien decide: la consola, el laboratorio, mantenimiento, planificación y la gerencia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#videos" className="btn btn-primary">Ver la lista de reproducción</Link>
              <Link href="/contacto" className="btn">Pedir una presentación</Link>
            </div>
          </div>
          <Image
            src={`${IMG}/visor-hmi.webp`}
            alt="Visor HMI del Historiador con los valores de un momento pasado y el disparo de un horno."
            width={1600}
            height={1000}
            className="h-auto w-full border border-foreground"
            priority
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-lg">
          <p className="eyebrow">Qué hace</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[34px]">Todo lo que pasó, con su hora</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {capacidades.map((c) => (
              <article key={c.titulo} className="flex flex-col border bg-white">
                <Image src={c.imagen} alt={c.titulo} width={1600} height={1000} className="h-60 w-full border-b object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{c.titulo}</h3>
                  <p className="mt-2 text-muted-foreground">{c.texto}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Capturas en un escenario de demostración. Las cifras no corresponden a ningún cliente.
          </p>
        </div>
      </section>

      <section className="border-t bg-muted py-16 md:py-20">
        <div className="container-lg grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Arquitectura</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">El control queda aislado</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              En cada sitio —campo, mejorador, refinería, patio— lo que se mide vive en la red de control: DCS, SCADA y
              PLC. El Historiador lo lee y lo entrega a la red administrativa.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Lee por OPC, en una sola dirección.",
                "Nadie escribe al proceso: el control queda intacto.",
                "Si cae el enlace, guarda y reenvía.",
                "Cada valor llega con su hora y su calidad.",
              ].map((t) => (
                <li key={t} className="border-l-[3px] border-primary pl-3">{t}</li>
              ))}
            </ul>
          </div>
          <Image
            src={`${IMG}/redes.webp`}
            alt="Diagrama: red de control aislada (DCS, SCADA, PLC, TankOS) → OPC en una sola dirección → ATILAX Historiador → red administrativa."
            width={1600}
            height={1000}
            className="h-auto w-full border"
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-lg">
          <p className="eyebrow">Un historiador por sitio</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[34px]">Cada negocio ve lo suyo</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "En el campo", d: "El SCADA de pozos y estaciones y TankOS reportan al mismo historiador, sin duplicar datos." },
              { t: "En un complejo mejorador", d: "Cada mejorador con su DCS y su propio historiador." },
              { t: "En la refinería", d: "Igual: sus unidades y su patio, con su historiador." },
            ].map((x) => (
              <div key={x.t} className="border bg-white p-6">
                <h3 className="text-lg font-bold">{x.t}</h3>
                <p className="mt-2 text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Image
              src={`${IMG}/sitios.webp`}
              alt="Diagrama: historiadores del campo, de cada mejorador y de la refinería, unidos por tickets y, arriba, el historiador corporativo."
              width={1600}
              height={1000}
              className="h-auto w-full border"
            />
            <div>
              <h3 className="text-2xl font-bold">Negocios distintos, unidos por el ticket</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Entre un negocio y otro viaja una transferencia con su ticket. El ticket de TankOS es el dato fiscal: el
                Historiador lo enlaza sin recalcularlo.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {negocios.map((n) => (
                  <li key={n} className="chip border-foreground text-foreground">{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted py-16 md:py-20">
        <div className="container-lg grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Historiador corporativo</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Cada vicepresidencia, su área</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cada VP y gerente corporativo ve su área, con cifras que dicen de cuándo son:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Producción diaria contra plan.",
                "Diferido por causa, cada uno con su dueño.",
                "Proyección de cierre de mes, con el cálculo a la vista.",
                "KPIs calculados como suma de barriles, nunca promedio de promedios.",
                "Informe diario automático y asistente IA para preguntar.",
              ].map((t) => (
                <li key={t} className="border-l-[3px] border-primary pl-3">{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              El analista corporativo tiene las herramientas completas y baja al dato del sitio en dos clics.
            </p>
          </div>
          <Image
            src={`${IMG}/vp-produccion.webp`}
            alt="Tablero de la Vicepresidencia de Producción: producción del día, diferido por causa y proyección de cierre de mes."
            width={1600}
            height={1000}
            className="h-auto w-full border border-foreground"
          />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-lg">
          <p className="eyebrow">Suite ATILAX</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-[34px]">Donde todo se junta para decidir</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {suite.map((s) => {
              const cuerpo = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground">Tributa al Historiador</p>
                  <h3 className="mt-2 text-lg font-bold">{s.nombre}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.texto}</p>
                  {s.href && <span className="mt-4 block text-sm font-semibold text-primary">Ver producto →</span>}
                </>
              );
              return s.href ? (
                <Link key={s.nombre} href={s.href} className="border bg-white p-6 hover:border-primary">{cuerpo}</Link>
              ) : (
                <div key={s.nombre} className="border bg-white p-6">{cuerpo}</div>
              );
            })}
          </div>
          <div className="mt-6 border-2 border-primary bg-white p-6 text-center">
            <p className="text-lg font-bold">ATILAX Historiador</p>
            <p className="text-muted-foreground">Recibe lo de cada sitio y lo entrega a quien decide.</p>
          </div>
        </div>
      </section>

      <section id="videos" className="scroll-mt-20 border-t bg-muted py-16 md:py-20">
        <div className="container-lg">
          <p className="eyebrow">Lista de reproducción</p>
          <h2 className="mt-2 mb-8 text-3xl font-bold tracking-tight">ATILAX Historiador, en vídeo</h2>
          <ListaReproduccion videos={videosHistoriador} />
        </div>
      </section>

      <section className="bg-primary py-14 text-white">
        <div className="container-lg flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-2xl font-bold leading-snug md:text-[28px]">
            «El dato nace una vez, donde se mide, y llega con su hora a quien decide.»
          </p>
          <Link href="/contacto" className="btn border-white bg-white text-primary hover:bg-green-50 hover:text-primary">
            Pedir una presentación →
          </Link>
        </div>
      </section>
    </>
  );
}
