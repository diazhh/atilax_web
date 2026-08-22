import {
  Boxes,
  Bot,
  CircuitBoard,
  Cpu,
  Drill,
  Factory,
  FlaskConical,
  Gauge,
  LayoutDashboard,
  ServerCog,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

/**
 * Fuente unica de verdad del portafolio de productos.
 * La usan /productos (indice), /productos/[slug] (detalle), el navbar y el home.
 *
 * `estado` debe reflejar la realidad del repositorio correspondiente en
 * ~/Documents/GitHub. No inflar: un producto en diseno se anuncia en diseno.
 */

export type EstadoProducto =
  | "En produccion"
  | "Disponible"
  | "En desarrollo"
  | "En diseno";

export interface Producto {
  slug: string;
  nombre: string;
  tagline: string;
  categoria: string;
  estado: EstadoProducto;
  icon: LucideIcon;
  destacado: boolean;
  resumen: string;
  descripcion: string[];
  capacidades: { titulo: string; detalle: string }[];
  stack: string[];
  /** Solo demos publicos verificados. Los sistemas de control y custody no se
   *  enlazan en abierto: su CTA es /contacto. */
  demo?: { label: string; url: string };
  nota?: string;
}

export const categorias = [
  {
    nombre: "Plataformas de operacion",
    descripcion:
      "Software de planta: supervision, calculo y decision sobre la operacion en tiempo real.",
  },
  {
    nombre: "Inteligencia y gestion",
    descripcion:
      "Capas transversales de IA, administracion y simulacion sobre la operacion.",
  },
  {
    nombre: "Control y hardware",
    descripcion:
      "Electronica y control propios: lo que va en el campo, en el gabinete y en la maquina.",
  },
];

export const productos: Producto[] = [
  // ─────────────────────────── Plataformas de operacion
  {
    slug: "oip",
    nombre: "ATILAX OIP",
    tagline: "Inteligencia operacional para refinerias y plantas de proceso",
    categoria: "Plataformas de operacion",
    estado: "En produccion",
    icon: Factory,
    destacado: true,
    resumen:
      "Doce dominios operativos — bitacora, alarmas, integridad, confiabilidad, mantenimiento y analitica — sobre una sola plataforma conectada a la planta.",
    descripcion: [
      "OIP (Operational Intelligence Platform) es la capa de inteligencia operacional que se monta sobre la instrumentacion existente de una refineria o planta de proceso. No reemplaza el sistema de control: lo lee, lo correlaciona y convierte el dato crudo en decision documentada.",
      "El backend es un monolito modular en Python con doce dominios internos y tres procesos (API, workers y streaming), alimentado por el bus de eventos de la planta. La IA generativa corre sobre infraestructura propia con modelos alojados localmente, de modo que la informacion operativa nunca sale de la organizacion.",
    ],
    capacidades: [
      {
        titulo: "Bitacora electronica de operaciones",
        detalle:
          "Registro de turno trazable y firmado, con contexto de proceso adjunto automaticamente a cada anotacion.",
      },
      {
        titulo: "Gestion de alarmas y eventos",
        detalle:
          "Consolidacion, priorizacion y analisis de avalanchas de alarmas para reducir el ruido que ciega al panelista.",
      },
      {
        titulo: "Integridad mecanica y confiabilidad",
        detalle:
          "Seguimiento de espesores, corrosion y ciclos de vida de activos criticos, ligado al historial de inspeccion.",
      },
      {
        titulo: "Analitica y asistente documental",
        detalle:
          "Busqueda semantica sobre procedimientos, planos y reportes; el asistente responde citando el documento fuente.",
      },
      {
        titulo: "HMI en vivo",
        detalle:
          "Sinopticos de proceso actualizados en tiempo real, integrados con la vista de eventos y mantenimiento.",
      },
    ],
    stack: [
      "Python — monolito modular",
      "Kafka",
      "Next.js",
      "PostgreSQL",
      "LLM alojado en infraestructura propia",
    ],
    demo: { label: "Ver OIP en vivo", url: "https://oip.atilax.io" },
  },
  {
    slug: "tankos",
    nombre: "TankOS",
    tagline: "Gestion de tanques grado custody transfer",
    categoria: "Plataformas de operacion",
    estado: "Disponible",
    icon: Gauge,
    destacado: true,
    resumen:
      "Motor de calculo MPMS de 18 etapas, tickets de transferencia sin huecos y auditoria completa sobre tanques con telemetria de radar.",
    descripcion: [
      "TankOS administra tanques de almacenamiento de petroleo y derivados con calidad de transferencia de custodia. El corazon del producto es el motor de calculo: dieciocho etapas encadenadas que llevan el volumen observado hasta masa neta (TOV → GOV → GSV → NSV → Masa) aplicando los factores de correccion por temperatura, presion y agua y sedimento.",
      "Cada ticket de custodia queda numerado sin huecos y firmado, con la trazabilidad completa de que medicion, que factor y que operador produjeron cada cifra. Se despliega single-tenant en las instalaciones del cliente: el dato de inventario no sale de la empresa.",
    ],
    capacidades: [
      {
        titulo: "Motor de calculo MPMS",
        detalle:
          "Dieciocho etapas conforme a API MPMS Cap. 11.2 y 12, con factores CTSh, CTL, CPL y CSW aplicados y auditables etapa por etapa.",
      },
      {
        titulo: "Tickets de custodia sin huecos",
        detalle:
          "Contador de tickets garantizado sin saltos ni duplicados, condicion indispensable para una fiscalizacion.",
      },
      {
        titulo: "Laboratorio con segregacion de funciones",
        detalle:
          "El analisis de laboratorio y la aprobacion de custodia son roles separados por diseno; ningun usuario cierra el ciclo solo.",
      },
      {
        titulo: "Telemetria de radar en tiempo real",
        detalle:
          "Ingesta continua de nivel, temperatura y presion desde medidores de radar, con historico de alta resolucion.",
      },
      {
        titulo: "Auditoria y recuperacion ante desastre",
        detalle:
          "Registro inmutable de toda operacion y procedimiento de recuperacion ejercitado con objetivo menor a 60 minutos.",
      },
    ],
    stack: [
      "Next.js 16",
      "NestJS 11",
      "PostgreSQL + TimescaleDB",
      "EMQX",
      "Keycloak",
      "Despliegue on-premise",
    ],
    nota:
      "Sistema de transferencia de custodia: la demostracion se hace acompanada, sobre datos de prueba.",
  },
  {
    slug: "perforacion-edge",
    nombre: "Centinela de Perforacion",
    tagline: "Mudlogging y vigilancia de control de pozo en el sitio",
    categoria: "Plataformas de operacion",
    estado: "En desarrollo",
    icon: Drill,
    destacado: true,
    resumen:
      "Un centinela automatico que vigila el balance de masa del pozo y escala alarmas, mas el puesto de trabajo completo del mudlogger. Cien por ciento en sitio, sin internet.",
    descripcion: [
      "En el taladro, la senal temprana de un influjo esta en el balance de masa: lo que entra al pozo contra lo que sale. El Centinela vigila ese balance de forma continua, aplica deteccion de eventos sobre la trama WITS y escala la alarma cuando el patron corresponde a una condicion de control de pozo.",
      "Alrededor del Centinela vive el workspace del mudlogger: litologia, gas cromatografico, mud log, presiones y generacion de reportes. Todo corre en un equipo en la locacion y se sirve a la red local del taladro, porque la conectividad satelital en campo no es una dependencia aceptable para una funcion de seguridad.",
    ],
    capacidades: [
      {
        titulo: "Centinela de balance de masa",
        detalle:
          "Vigilancia continua de ganancia y perdida en tanques con escalamiento automatico de alarmas de control de pozo.",
      },
      {
        titulo: "Workspace del mudlogger",
        detalle:
          "Litologia, gas, mud log y presiones en una sola interfaz pensada para el turno completo.",
      },
      {
        titulo: "Ingesta WITS en tiempo real",
        detalle:
          "Proceso dedicado al camino critico de adquisicion, separado del resto de la aplicacion.",
      },
      {
        titulo: "Operacion offline",
        detalle:
          "Cien por ciento edge: el sistema opera completo sin enlace externo, servido a la LAN del sitio.",
      },
      {
        titulo: "Reportes de perforacion",
        detalle:
          "Generacion de reportes diarios y de intervalo a partir del dato ya registrado, sin recaptura manual.",
      },
    ],
    stack: [
      "Python 3.14 + FastAPI",
      "TimescaleDB",
      "React 19 + Vite",
      "Arquitectura microkernel",
    ],
    nota:
      "Herramienta de apoyo a la decision, no de control automatico: calcula, senala y alarma. Nunca opera el BOP.",
  },
  {
    slug: "scada",
    nombre: "ATILAX SCADA",
    tagline: "SCADA e IIoT propietario en un solo instalable",
    categoria: "Plataformas de operacion",
    estado: "En desarrollo",
    icon: ServerCog,
    destacado: false,
    resumen:
      "Drivers de campo nativos, motor de tags, HMI web, alarmas ISA-18.2, historian y gobierno — sin licencias por tag ni vendor lock-in.",
    descripcion: [
      "La mayoria de los SCADA comerciales cobran por tag y encierran el dato en un formato propio. ATILAX SCADA nace de la experiencia de integrar esos sistemas en campo venezolano: un solo producto instalable que trae los drivers, el motor de tags, la interfaz de operacion y el historico, con el dato siempre exportable.",
      "El alcance incluye el gobierno que un sistema de planta necesita de verdad: control de acceso por rol, registro de auditoria de cada comando y redundancia del servidor.",
    ],
    capacidades: [
      {
        titulo: "Drivers de campo nativos",
        detalle:
          "Comunicacion directa con PLC y RTU sobre Modbus TCP y RTU, sin capas OPC intermedias que agreguen latencia y licencias.",
      },
      {
        titulo: "Motor de tags",
        detalle:
          "Modelo de datos de planta con calidad de senal, escalamiento y tags calculados.",
      },
      {
        titulo: "Alarmas ISA-18.2",
        detalle:
          "Ciclo de vida de alarma conforme al estandar: activacion, reconocimiento, supresion documentada y racionalizacion.",
      },
      {
        titulo: "Historian integrado",
        detalle:
          "Almacenamiento de series de tiempo comprimido y consultable, incluido en el mismo producto.",
      },
      {
        titulo: "Gobierno y redundancia",
        detalle:
          "RBAC, auditoria completa de comandos y servidor redundante para operacion continua.",
      },
    ],
    stack: ["Modbus TCP / RTU", "Motor de tags propio", "HMI web", "Historian embebido"],
  },

  // ─────────────────────────── Inteligencia y gestion
  {
    slug: "atilax-ai",
    nombre: "ATILAX AI",
    tagline: "Capa de inteligencia artificial sobre cualquier plataforma IoT",
    categoria: "Inteligencia y gestion",
    estado: "En desarrollo",
    icon: Bot,
    destacado: true,
    resumen:
      "Copiloto conversacional, agente de diagnostico autonomo y generacion de reportes. Descubre el dominio de la operacion por si mismo.",
    descripcion: [
      "ATILAX AI se conecta a una plataforma IoT existente y perfila su contenido automaticamente: que tipos de activo hay, que atributos manejan y como se relacionan. De ahi deduce el dominio — pozos, perforacion, refineria, mineria — sin que nadie programe reglas especificas. La misma capa sirve a operaciones distintas.",
      "Sobre ese perfil corren tres agentes: un copiloto al que se le pregunta en lenguaje natural, un agente de diagnostico que se dispara ante una alarma y devuelve la causa probable con su evidencia, y un generador de reportes narrativos programados.",
    ],
    capacidades: [
      {
        titulo: "Copiloto conversacional",
        detalle:
          "Preguntas en lenguaje natural sobre la operacion; el modelo consulta la telemetria real antes de responder.",
      },
      {
        titulo: "Agente de diagnostico",
        detalle:
          "Ante una alarma, enriquece el contexto con 24 horas de telemetria, atributos y documentacion, y publica el diagnostico de vuelta en la plataforma.",
      },
      {
        titulo: "Base de conocimiento RAG",
        detalle:
          "Manuales, procedimientos y reportes indexados semanticamente, con respuesta citando la fuente.",
      },
      {
        titulo: "Reportes narrativos programados",
        detalle:
          "Informes de turno, semana o mes redactados automaticamente a partir del dato del periodo.",
      },
      {
        titulo: "Agnostico de dominio y de proveedor",
        detalle:
          "No hay logica de negocio codificada: la misma instalacion sirve a un campo petrolero y a una planta industrial.",
      },
    ],
    stack: [
      "FastAPI",
      "PostgreSQL + pgvector",
      "Redis",
      "Claude (proveedor principal)",
      "Credenciales cifradas",
    ],
  },
  {
    slug: "erp",
    nombre: "ATILAX ERP",
    tagline: "Gestion empresarial para empresas de servicios petroleros",
    categoria: "Inteligencia y gestion",
    estado: "En produccion",
    icon: LayoutDashboard,
    destacado: true,
    resumen:
      "Empleados, nomina venezolana y finanzas operando en produccion. Caja chica, proyectos, inventario y flota en construccion.",
    descripcion: [
      "Un ERP generico no entiende la nomina venezolana ni el ciclo de una empresa de servicios a la industria petrolera. ATILAX ERP se construyo desde ese caso concreto: contratos, guardias, viaticos de campo y el calculo de prestaciones tal como la ley lo exige.",
      "Se despliega por modulos. Los de gente y dinero ya operan en produccion con un cliente real; el resto del alcance esta en construccion siguiendo el mismo criterio de entregar modulo terminado antes de abrir el siguiente.",
    ],
    capacidades: [
      {
        titulo: "Empleados",
        detalle:
          "Expediente completo, contratos, cargos y estructura organizativa. En produccion.",
      },
      {
        titulo: "Nomina",
        detalle:
          "Calculo conforme a la legislacion laboral venezolana, con prestaciones, deducciones y recibos. En produccion.",
      },
      {
        titulo: "Finanzas",
        detalle:
          "Cuentas por cobrar y pagar, bancos y conciliacion. En produccion.",
      },
      {
        titulo: "Proyectos e inventario",
        detalle:
          "Costeo por proyecto, almacen y consumo de materiales. En construccion.",
      },
      {
        titulo: "Caja chica y flota",
        detalle:
          "Rendicion de gastos de campo y control de vehiculos propios. En construccion.",
      },
    ],
    stack: ["Node.js + Express", "Sequelize", "PostgreSQL", "React"],
    demo: { label: "Ver el ERP", url: "https://erp.atilax.io" },
  },
  {
    slug: "simulador",
    nombre: "Simulador IoT",
    tagline: "Telemetria realista para probar antes de instalar",
    categoria: "Inteligencia y gestion",
    estado: "En produccion",
    icon: FlaskConical,
    destacado: false,
    resumen:
      "163 dispositivos simulados en diez dominios industriales, generando telemetria creible por MQTT para pruebas, demos y dimensionamiento.",
    descripcion: [
      "Antes de comprar un sensor conviene saber que va a hacer la plataforma con su dato. El simulador genera telemetria estadisticamente creible de 163 dispositivos repartidos en diez dominios industriales y la publica por MQTT como lo haria el campo real.",
      "Se usa para tres cosas: dimensionar la infraestructura antes de una instalacion, entrenar operadores sin arriesgar produccion y montar demostraciones que se comportan como una operacion viva.",
    ],
    capacidades: [
      {
        titulo: "Diez dominios industriales",
        detalle:
          "Petrolero, mineria, agroindustria, flota, seguridad, industrial, portuario, residencial, comercial y electrico.",
      },
      {
        titulo: "Multi-tenant",
        detalle:
          "Varias operaciones simuladas en paralelo, cada una con su propio conjunto de activos.",
      },
      {
        titulo: "Comportamiento realista",
        detalle:
          "Tendencias, ruido y fallas inducidas, no numeros aleatorios: sirve para validar alarmas y umbrales de verdad.",
      },
      {
        titulo: "Publicacion por MQTT",
        detalle:
          "Se conecta como un gateway mas, sin modificar la plataforma que se quiere probar.",
      },
    ],
    stack: ["Python", "MQTT Gateway", "Orquestador multi-tenant"],
  },

  // ─────────────────────────── Control y hardware
  {
    slug: "balancin",
    nombre: "Control de Balancin Hidraulico",
    tagline: "Instrumentacion, control y telemetria de bombeo mecanico",
    categoria: "Control y hardware",
    estado: "En desarrollo",
    icon: Cpu,
    destacado: true,
    resumen:
      "Lazo de control determinista, HMI local y telemetria para unidades hidraulicas de carrera larga en la Faja del Orinoco.",
    descripcion: [
      "En una unidad de bombeo hidraulica de carrera larga, el perfil de velocidad es el producto: de el dependen el llenado del barril, el desgaste de la sarta y la produccion. Nosotros ponemos la instrumentacion, el lazo de control y la telemetria sobre la maquina que fabrica el cliente.",
      "El control corre en tiempo real sobre un equipo industrial Linux, con la posicion leida por encoder absoluto y la I/O remota sobre Modbus TCP. La cadena de seguridad es cableada e independiente del software: si el programa falla, la maquina se detiene igual.",
    ],
    capacidades: [
      {
        titulo: "Lazo de control determinista",
        detalle:
          "Nucleo de control en tiempo real con perfil de velocidad configurable a lo largo de la carrera.",
      },
      {
        titulo: "Medicion de posicion absoluta",
        detalle:
          "Encoder absoluto integrado al proceso de control, sin perdida de referencia tras un corte.",
      },
      {
        titulo: "Seguridad cableada independiente",
        detalle:
          "La parada de emergencia no depende del software ni de la red: es circuito fisico.",
      },
      {
        titulo: "HMI local en el sitio",
        detalle:
          "Interfaz web servida desde el propio equipo, operable sin conectividad externa.",
      },
      {
        titulo: "Telemetria a la plataforma",
        detalle:
          "Cada carrera, alarma y cambio de parametro sube a ATILAX para analisis de produccion y mantenimiento.",
      },
    ],
    stack: [
      "Nucleo de control en C++ (tiempo real)",
      "Servicios de borde en Python",
      "Bus MQTT local",
      "Modbus TCP + encoder absoluto",
    ],
    nota:
      "Sistema de control de maquinaria: la interfaz de operacion no se expone en abierto. La demostracion es acompanada.",
  },
  {
    slug: "io-industrial",
    nombre: "Tarjeta de I/O Industrial",
    tagline: "Electronica de entrada/salida disenada y fabricada en casa",
    categoria: "Control y hardware",
    estado: "En desarrollo",
    icon: CircuitBoard,
    destacado: false,
    resumen:
      "Sustituye el rack de I/O comprado y hace tres cosas que ningun modulo de catalogo hace: peak-hold en hardware, failsafe por canal y disparo armado con corte en silicio.",
    descripcion: [
      "Los modulos de I/O de catalogo resuelven el caso promedio. Nuestros productos necesitan tres comportamientos que ninguno trae: capturar el pico de una senal rapida sin depender del ciclo de escaneo, definir el estado seguro canal por canal, y disparar un corte armado directamente en silicio sin pasar por el procesador de aplicacion.",
      "De ahi nace una tarjeta propia, con su propio expediente de manufactura y calificacion. Es un componente que se fabrica en serie y se reutiliza en todo el portafolio, no una pieza de un proyecto.",
    ],
    capacidades: [
      {
        titulo: "Peak-hold en hardware",
        detalle:
          "Captura del valor pico entre lecturas, independiente de la velocidad del ciclo de aplicacion.",
      },
      {
        titulo: "Failsafe por canal",
        detalle:
          "Cada salida define su propio estado seguro ante perdida de comunicacion o de programa.",
      },
      {
        titulo: "Disparo armado",
        detalle:
          "Corte ejecutado en silicio, con armado explicito previo: la logica de aplicacion no esta en el camino critico.",
      },
      {
        titulo: "Microcontrolador de reflejos",
        detalle:
          "Un MCU dedicado al secuenciamiento rapido; el procesador de aplicacion se compra y va aparte.",
      },
    ],
    stack: ["Diseno de PCB propio", "MCU dedicado", "Expediente de manufactura y calificacion"],
  },
  {
    slug: "daq",
    nombre: "DAQ Modular",
    tagline: "Adquisicion de datos en riel DIN para planta y sitio remoto",
    categoria: "Control y hardware",
    estado: "En diseno",
    icon: Boxes,
    destacado: false,
    resumen:
      "Sistema modular con backplane en riel DIN, pensado a la vez para el gabinete de planta y para la estacion remota alimentada con solar.",
    descripcion: [
      "Una estacion remota alimentada por panel solar y un gabinete de planta tienen requisitos opuestos de consumo, temperatura y disponibilidad. El DAQ modular resuelve los dos con el mismo backplane: se le pone la combinacion de modulos que el sitio pide, sin cambiar de familia de producto.",
      "Esta en fase de diseno, con la especificacion aprobada y el diseno electronico en curso.",
    ],
    capacidades: [
      {
        titulo: "Backplane en riel DIN",
        detalle:
          "Modulos intercambiables sobre un bus comun, montaje estandar de gabinete industrial.",
      },
      {
        titulo: "Perfil de bajo consumo",
        detalle:
          "Pensado desde el inicio para operar con panel solar y banco de baterias en sitio remoto.",
      },
      {
        titulo: "Un solo diseno para dos entornos",
        detalle:
          "La misma familia cubre planta y remoto: un solo repuesto, un solo entrenamiento.",
      },
    ],
    stack: ["Diseno electronico en KiCad", "Backplane propio", "Especificacion aprobada"],
  },
  {
    slug: "centinela-7100",
    nombre: "Centinela 7100",
    tagline: "Monitoreo y control de configuracion de paneles de incendio",
    categoria: "Control y hardware",
    estado: "En diseno",
    icon: ShieldAlert,
    destacado: false,
    resumen:
      "Vigilancia permanente y versionado de configuracion para paneles de deteccion de incendio Gamewell-FCI serie 7100, sin tocar el panel.",
    descripcion: [
      "Un panel de deteccion de incendio acumula fallas de lazo, sensores sucios y cambios de configuracion no documentados que solo se descubren en la inspeccion anual — o en el incendio. Centinela 7100 escucha permanentemente el puerto de impresora del panel y convierte ese flujo en mantenimiento predictivo y en un historial de configuracion versionado.",
      "El diseno impone una frontera fisica: el cable de monitoreo no tiene par de transmision. El sistema no puede escribirle al panel aunque el software fallara.",
    ],
    capacidades: [
      {
        titulo: "Vigilancia permanente",
        detalle:
          "Lectura continua del puerto de impresora del panel: eventos, fallas de lazo y degradacion de dispositivos.",
      },
      {
        titulo: "Mantenimiento predictivo",
        detalle:
          "Deteccion temprana de sensores en deriva antes de que se conviertan en falla o en falsa alarma.",
      },
      {
        titulo: "Configuracion versionada",
        detalle:
          "Lectura, versionado y verificacion de la configuracion del panel: que cambio, cuando y respecto a que linea base.",
      },
      {
        titulo: "Solo lectura, por construccion",
        detalle:
          "Cable sin par de transmision. No escribe al panel, no reconoce ni silencia alarmas y no sustituye a la central receptora.",
      },
    ],
    stack: ["Puerto serial del panel", "Cable de monitoreo sin par TX", "Paneles Gamewell-FCI serie 7100"],
    nota:
      "No es una via de notificacion de emergencias. El panel y la central receptora conservan integra esa funcion.",
  },
];

export const productoPorSlug = (slug: string) =>
  productos.find((p) => p.slug === slug);

export const productosDestacados = productos.filter((p) => p.destacado);
