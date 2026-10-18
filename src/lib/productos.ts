/**
 * Fuente única de la web: home, /productos/[slug] y /demos leen de aquí.
 *
 * Textos: los de las fichas aprobadas en venecorr.com (/tankos, /wellos, /tecnologia)
 * y del ERP. Registro: nada de «certificado», nada de cifras de clientes.
 *
 * Demos: `estado: "vivo"` sólo si la URL responde y el usuario de solo lectura existe
 * y se probó (entra, ve, no escribe). Mientras no, `"activacion"` y sin clave.
 * Las claves son de usuarios de solo lectura sobre datos de demostración: se publican.
 */

export type EstadoDemo = "vivo" | "activacion";

export interface Demo {
  url: string;
  estado: EstadoDemo;
  usuario?: string;
  clave?: string;
  rol: string;
  descripcion: string;
  manual?: { label: string; url: string };
}

export interface Bloque {
  titulo: string;
  texto: string;
  imagen: string;
}

export interface Video {
  titulo: string;
  duracion: string;
  src: string;
  poster: string;
}

export interface Producto {
  slug: string;
  nombre: string;
  linea: string;
  eyebrow: string;
  titulo: string;
  parrafo: string;
  imagen: string;
  bloques: Bloque[];
  videos: Video[];
  demo: Demo;
  /** Ficha extendida en venecorr.com, que lleva el producto al mercado. */
  ficha?: string;
}

// Los vídeos los sirve venecorr.com: no se duplican 300 MB de mp4 en este repo.
const VC = "https://www.venecorr.com/video";
const IMG = "/images/productos";

export const productos: Producto[] = [
  {
    slug: "wellos",
    nombre: "ATILAX WellOS",
    linea: "Su campo, en sus manos: pozos, SCADA ISA-101, comandos con dos firmas y alarmas ISA-18.2.",
    eyebrow: "Plataforma de operación de campo petrolero",
    titulo: "Su campo, en sus manos",
    parrafo:
      "Un campo petrolero es subsuelo, pozos, estaciones, tanques, equipos, y la gente que los opera día y noche. ATILAX WellOS lo reúne todo en una sola plataforma: para verlo, para entenderlo y para operarlo. Se instala en el servidor de su empresa, y sus datos se quedan en casa.",
    imagen: `${IMG}/wellos/alarmas.webp`,
    bloques: [
      {
        titulo: "Alarmas que se gestionan, no que se acumulan",
        texto:
          "Prioridad, reconocimiento y archivo con vencimiento, según ISA-18.2. Si un equipo está parado a propósito, sus alarmas se suprimen solas. Lo que nadie atiende escala por correo, Teams o webhook.",
        imagen: `${IMG}/wellos/alarmas.webp`,
      },
      {
        titulo: "Reglas y campos calculados",
        texto:
          "Reglas que vigilan el campo, y campos calculados que suman por pozo, por estación o por campo. Cada cifra calculada dice de qué datos sale. Las reglas avisan y sugieren; la decisión la toma una persona.",
        imagen: `${IMG}/wellos/reglas.webp`,
      },
      {
        titulo: "El día a día, dentro del sistema",
        texto:
          "El turno, la bitácora, la entrega de guardia y los diferidos con su causa. El parte diario se arma con lo que ya está registrado, sin cifras tecleadas a mano.",
        imagen: `${IMG}/wellos/operacion.webp`,
      },
      {
        titulo: "Reportes que se pueden reproducir",
        texto:
          "Reportes en PDF y Excel, programados y enviados por correo, SFTP o carpeta compartida. Cada uno guarda su huella: se puede volver a generar idéntico.",
        imagen: `${IMG}/wellos/reportes.webp`,
      },
    ],
    videos: [],
    demo: {
      url: "https://wellos.atilax.io",
      // Público desde 2026-10-18 (haproxy wellos_web + DNS). Probado por la URL pública: login OIDC,
      // /home con Campo Llanos; POST assets/commands → 403 READ_ONLY_ROLE (Chrome, 18-10).
      estado: "vivo",
      usuario: "visor@atilax.io",
      // Rotada por field-iot al montar el demo autónomo (18-10); el formulario de /login ya la trae escrita.
      clave: "Visor-WellOS-2026",
      rol: "Rol de solo lectura: ve todo el campo (Campo Llanos, 30 pozos, estación EF-1); no comanda ni edita. El formulario ya trae el usuario y la clave: basta con pulsar «Entrar».",
      descripcion: "Un campo de demostración con pozos, estaciones, SCADA y alarmas en vivo.",
    },
    ficha: "https://www.venecorr.com/wellos",
  },
  {
    slug: "tankos",
    nombre: "TankOS",
    linea: "Gestión de tanques grado transferencia y custodia. Una cifra fiscal no se teclea: se deriva.",
    eyebrow: "Gestión de tanques · Transferencia y custodia",
    titulo: "El sistema con el que un patio de tanques lleva su inventario y sus entregas",
    parrafo:
      "TankOS reúne en un solo registro lo que hoy vive repartido entre planillas, correos y hojas de cálculo: la medición del tanque, el análisis del laboratorio, los movimientos y los instrumentos del patio.",
    imagen: `${IMG}/tankos/calculo.webp`,
    bloques: [
      {
        titulo: "Captura: lo que se mide, y quién lo midió",
        texto:
          "El aforo manual se registra en pie, pulgada y fracción y se contrasta con la lectura del radar. El laboratorio carga su ensayo y quien lo aprobó. La tabla de aforo se guarda por versiones.",
        imagen: `${IMG}/tankos/aforo.webp`,
      },
      {
        titulo: "Cálculo: del nivel a la masa, paso a paso",
        texto:
          "Cada etapa del cálculo queda a la vista, con sus factores de corrección y la procedencia de cada cifra: qué se midió, con qué instrumento, qué tabla estaba vigente y quién aprobó cada cosa.",
        imagen: `${IMG}/tankos/calculo.webp`,
      },
      {
        titulo: "Transferencia y custodia: el ticket numerado",
        texto:
          "El lote se abre y se cierra con sus aforos; el ticket lleva número correlativo, sin huecos, y si se anula queda el motivo. Las existencias son la suma de los asientos, no un saldo tecleado.",
        imagen: `${IMG}/tankos/tickets.webp`,
      },
      {
        titulo: "Vigilancia y registro: escrito una sola vez",
        texto:
          "Alarmas con plantillas por tanque, y un libro de operaciones que va de mediodía a mediodía y no se modifica ni se borra: aforos, muestras, movimientos, emisiones, alarmas y también lo que no se hizo.",
        imagen: `${IMG}/tankos/libro.webp`,
      },
      {
        titulo: "Salida: el mismo dato, para quien lo necesite",
        texto:
          "Siete informes del mismo dato, auditoría exportable y seis roles con responsabilidades separadas. Al emitir un ticket, se entrega por bandeja de salida a webhook, sftp o archivo, con reintento.",
        imagen: `${IMG}/tankos/informes.webp`,
      },
    ],
    videos: [
      { titulo: "Qué es TankOS", duracion: "3:47", src: `${VC}/tankos-t00-web.mp4`, poster: `${IMG}/tankos/tankos-t00-poster.jpg` },
      { titulo: "TankOS: inventario y entregas de un patio de tanques", duracion: "5:57", src: `${VC}/tankos-v3-web.mp4`, poster: `${IMG}/tankos/tankos-v3-poster.jpg` },
      { titulo: "TankOS, en cuatro minutos", duracion: "4:42", src: `${VC}/tankos-v1-web.mp4`, poster: `${IMG}/tankos/tankos-v1-poster.jpg` },
      { titulo: "TankOS, el recorrido completo", duracion: "5:53", src: `${VC}/tankos-v2-web.mp4`, poster: `${IMG}/tankos/tankos-v2-poster.jpg` },
    ],
    demo: {
      url: "https://tk.atilax.io",
      estado: "activacion",
      usuario: "inspector@atilax.io",
      rol: "Rol «inspector de custodia»: ve tanques, cálculos y tickets; no registra ni aprueba.",
      descripcion: "Patio de tanques simulado con telemetría de radar, cálculo MPMS y tickets de custodia.",
    },
    ficha: "https://www.venecorr.com/tankos",
  },
  {
    slug: "liftos",
    nombre: "ATILAX LiftOS",
    linea: "Control de balancín hidráulico: carta dinamométrica en vivo, diagnóstico y alarmas ISA-18.2.",
    eyebrow: "Control de balancín hidráulico",
    titulo: "Carta dinamométrica y diagnóstico en vivo",
    parrafo:
      "El sistema que va dentro de los equipos de bombeo hidráulico: cicla solo, se ajusta carrera a carrera, dibuja la carta dinamométrica en vivo y registra quién cambió qué. Las alarmas informan sin bloquear al operador.",
    imagen: `${IMG}/liftos/balancin-alarmas.png`,
    bloques: [
      {
        titulo: "Alarmas que informan sin bloquear",
        texto:
          "Gestión de alarmas no modal según ISA-18.2: reconocer y silenciar sin detener la operación, con severidad crítica, alta, media y advertencia. Diagnóstico de rotura de cabilla, geometría fuera de tolerancia, sobre-temperatura de aceite, salud de bomba y SPM inalcanzable.",
        imagen: `${IMG}/liftos/balancin-alarmas.png`,
      },
    ],
    videos: [
      { titulo: "ATILAX LiftOS: su campo, en sus manos", duracion: "0:55", src: `${VC}/liftos-v1-es-web.mp4`, poster: `${IMG}/liftos/liftos-v1-es-poster.jpg` },
    ],
    demo: {
      url: "https://balancin.atilax.io",
      estado: "vivo",
      usuario: "visor",
      // Generada en el contenedor balancin-demo (/root/visor.pass). Verificado 2026-10-18: POST de mando → 403.
      clave: "h7gjr6-xhge5j-demo",
      rol: "Rol «visor»: ve operación, pozo, salud, alarmas y auditoría; los mandos están bloqueados. Para entrar, pulse «Entrar como técnico / admin» y use este usuario y clave.",
      descripcion: "HMI del balancín hidráulico con un simulador conectado: carta dinamométrica en vivo, alarmas y auditoría.",
    },
  },
  {
    slug: "erp",
    nombre: "ATILAX ERP",
    linea: "Administración, compras, inventario, proyectos y HSE para empresas de servicio petrolero.",
    eyebrow: "Gestión empresarial",
    titulo: "El ERP de una empresa de servicios petroleros",
    parrafo:
      "Un ERP genérico no entiende la nómina venezolana ni el ciclo de una empresa de servicios a la industria petrolera. ATILAX ERP se construyó desde ese caso: contratos, guardias, viáticos de campo, AFE y el cálculo de prestaciones tal como la ley lo exige.",
    imagen: "/images/erp/dashboard-principal.png",
    bloques: [
      {
        titulo: "Finanzas y contabilidad",
        texto: "Cuentas por cobrar y pagar, bancos, conciliación y tasa BCV, con el asiento contable generado desde la operación.",
        imagen: "/images/erp/finanzas-dashboard.png",
      },
      {
        titulo: "Proyectos y AFE",
        texto: "Costeo por proyecto, presupuesto, valuaciones y control de AFE con sus aprobaciones y desviaciones.",
        imagen: "/images/erp/proyectos-dashboard.png",
      },
      {
        titulo: "CRM y ventas",
        texto: "Clientes, oportunidades, cotizaciones y órdenes de venta en el mismo sistema que factura.",
        imagen: "/images/erp/crm-dashboard.png",
      },
      {
        titulo: "HSE",
        texto: "Incidentes, inspecciones, permisos de trabajo, autoridad de parada y equipos de seguridad.",
        imagen: "/images/erp/hse-dashboard.png",
      },
    ],
    videos: [],
    demo: {
      url: "https://erp.atilax.io",
      estado: "activacion",
      usuario: "demo",
      rol: "Rol «Demo / Visitante»: sólo consulta; crear, editar y borrar están bloqueados.",
      descripcion: "Finanzas, compras, inventario, proyectos, CRM y HSE con una empresa de ejemplo.",
      manual: { label: "Manual del ERP", url: "https://erpdoc.atilax.io" },
    },
  },
];

export const productoPorSlug = (slug: string) => productos.find((p) => p.slug === slug);

export const videos = productos.flatMap((p) => p.videos);
