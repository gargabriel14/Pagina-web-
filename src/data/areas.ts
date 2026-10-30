import type { IconName } from "./site";

export type AreaSlug = "legal" | "entertainment" | "business" | "experiences";

interface IconItem {
  icon: IconName;
  title: string;
  description: string;
}

/** Content for areas rendered by the shared [area].astro template */
export interface AreaPage {
  headline: string;
  headlineAccent: string;
  lede: string;
  introTitle: string;
  intro: string;
  audiences: IconItem[];
  services: { title: string; description: string; tag: string }[];
  deliverables: IconItem[];
  faq: { question: string; answer: string }[];
}

export interface Area {
  slug: AreaSlug;
  path: string;
  name: string;
  /** Name split in two lines for cards and emblems */
  nameLead: string;
  nameTail: string;
  icon: IconName;
  accent: string;
  summary: string;
  tags: string[];
  /** Areas with their own hand-built pages (legal) leave this out */
  page?: AreaPage;
}

export const areas: Area[] = [
  {
    slug: "legal",
    path: "/legal/",
    name: "Tu Multiverso Legal",
    nameLead: "Tu Multiverso",
    nameTail: "Legal",
    icon: "scale",
    accent: "#f0ca6a",
    summary: "Migración, familia, documentación y orientación jurídica",
    tags: ["Migración", "Familia", "Documentación", "Orientación jurídica"],
  },
  {
    slug: "entertainment",
    path: "/entertainment/",
    name: "Entertainment & Culture",
    nameLead: "Entertainment",
    nameTail: "& Culture",
    icon: "music",
    accent: "#e9a08c",
    summary: "Artistas, música, marcas, eventos y proyectos creativos",
    tags: ["Artistas", "Música", "Marcas", "Eventos", "Proyectos creativos"],
    page: {
      headline: "Ideas creativas convertidas en",
      headlineAccent: "proyectos reales",
      lede: "Acompañamiento estratégico para artistas, marcas y proyectos culturales que necesitan orden, conexiones y una hoja de ruta clara",
      introTitle: "El talento necesita estructura para llegar más lejos",
      intro:
        "La cultura y el entretenimiento se mueven rápido y dependen de las personas correctas. Esta área ayuda a transformar talento e ideas en proyectos ordenados, con objetivos claros, aliados adecuados y una ruta para avanzar sin perder la esencia creativa",
      audiences: [
        {
          icon: "music",
          title: "Artistas y músicos",
          description: "Perfiles que quieren ordenar su proyecto, abrir oportunidades y tomar decisiones con más claridad",
        },
        {
          icon: "briefcase",
          title: "Marcas",
          description: "Empresas que buscan colaborar con talento, cultura o eventos de forma coherente con su identidad",
        },
        {
          icon: "calendar",
          title: "Organizadores y productores",
          description: "Equipos que preparan eventos o proyectos culturales y necesitan coordinar ideas, aliados y tiempos",
        },
      ],
      services: [
        {
          title: "Artistas y música",
          description: "Orientación para ordenar oportunidades, contactos y próximos pasos de proyectos artísticos y musicales",
          tag: "Talento · Carrera · Oportunidades",
        },
        {
          title: "Marcas y colaboraciones",
          description: "Conexión entre marcas, talentos y proyectos culturales con objetivos claros para cada parte",
          tag: "Marcas · Talento · Alianzas",
        },
        {
          title: "Eventos",
          description: "Coordinación de ideas, aliados y planificación inicial para eventos y experiencias culturales",
          tag: "Concepto · Aliados · Planificación",
        },
        {
          title: "Proyectos creativos",
          description: "Estructura y hoja de ruta para llevar una idea creativa de concepto a proyecto viable",
          tag: "Idea · Estructura · Lanzamiento",
        },
      ],
      deliverables: [
        {
          icon: "document",
          title: "Lectura del proyecto",
          description: "Una visión clara de dónde está el proyecto, qué lo hace valioso y qué necesita para avanzar",
        },
        {
          icon: "network",
          title: "Mapa de aliados",
          description: "Qué perfiles, marcas o colaboradores pueden sumar y en qué orden conviene acercarse",
        },
        {
          icon: "calendar",
          title: "Hoja de ruta",
          description: "Próximos pasos concretos, prioridades y tiempos para pasar de la idea a la acción",
        },
      ],
      faq: [
        {
          question: "¿Trabajas con artistas o proyectos que recién empiezan?",
          answer:
            "Sí, la etapa del proyecto no es un requisito. Se evalúa la idea, el objetivo y lo que hace falta para dar el siguiente paso",
        },
        {
          question: "¿Puedes conectar mi marca con artistas o eventos?",
          answer:
            "Sí, primero se define el objetivo de la marca y después se buscan colaboraciones que tengan sentido para todas las partes",
        },
        {
          question: "¿El trabajo es presencial u online?",
          answer:
            "La atención es online, lo que permite acompañar proyectos en distintos países y coordinar con las personas involucradas donde estén",
        },
      ],
    },
  },
  {
    slug: "business",
    path: "/business/",
    name: "Business & Projects",
    nameLead: "Business",
    nameTail: "& Projects",
    icon: "network",
    accent: "#8fd1b8",
    summary: "Conexiones, alianzas, coordinación y desarrollo de oportunidades",
    tags: ["Conexiones", "Alianzas", "Coordinación", "Oportunidades"],
    page: {
      headline: "Las oportunidades crecen con las",
      headlineAccent: "conexiones correctas",
      lede: "Gestión estratégica para identificar, conectar y coordinar a las personas y piezas que un proyecto necesita para avanzar",
      introTitle: "Una buena idea avanza cuando las piezas están conectadas",
      intro:
        "Muchos proyectos se detienen por falta de contactos, de coordinación o de una dirección clara. Esta área se centra en identificar oportunidades, acercar a las partes adecuadas y mantener un seguimiento ordenado para que las ideas se conviertan en resultados concretos",
      audiences: [
        {
          icon: "spark",
          title: "Emprendedores",
          description: "Personas con una idea o proyecto en marcha que necesitan dirección, contactos y orden para crecer",
        },
        {
          icon: "briefcase",
          title: "Empresas",
          description: "Organizaciones que buscan nuevas alianzas, mercados o proyectos y necesitan coordinar a varias partes",
        },
        {
          icon: "handshake",
          title: "Socios y colaboradores",
          description: "Perfiles que quieren sumarse a proyectos con roles claros y expectativas bien definidas",
        },
      ],
      services: [
        {
          title: "Conexiones estratégicas",
          description: "Puentes entre personas, empresas e ideas que pueden sumar valor a un mismo objetivo",
          tag: "Personas · Empresas · Ideas",
        },
        {
          title: "Alianzas",
          description: "Exploración y estructura de colaboraciones con roles, expectativas y próximos pasos definidos",
          tag: "Roles · Acuerdos · Confianza",
        },
        {
          title: "Coordinación de proyectos",
          description: "Seguimiento ordenado de tareas, actores y tiempos para que el proyecto no pierda impulso",
          tag: "Tareas · Actores · Tiempos",
        },
        {
          title: "Desarrollo de oportunidades",
          description: "Evaluación de ideas de negocio y oportunidades para decidir con criterio por dónde empezar",
          tag: "Evaluación · Prioridades · Ruta",
        },
      ],
      deliverables: [
        {
          icon: "document",
          title: "Diagnóstico de la oportunidad",
          description: "Qué tiene potencial, qué riesgos conviene revisar y qué hace falta para avanzar",
        },
        {
          icon: "network",
          title: "Mapa de actores",
          description: "Quiénes deberían estar en la conversación, qué aporta cada uno y cómo acercarse",
        },
        {
          icon: "calendar",
          title: "Plan de coordinación",
          description: "Responsables, tiempos y próximos pasos para que el proyecto mantenga el ritmo",
        },
      ],
      faq: [
        {
          question: "¿Qué tipo de proyectos acompañas?",
          answer:
            "Proyectos en etapa de idea, en crecimiento o que buscan aliados. Lo importante es tener un objetivo que se pueda trabajar con claridad",
        },
        {
          question: "¿Cómo se trabajan las alianzas?",
          answer:
            "Primero se define qué aporta y qué espera cada parte. Después se acercan los contactos y se acompañan las primeras conversaciones",
        },
        {
          question: "¿Ofreces financiación o asesoría de inversión?",
          answer:
            "No. El trabajo se centra en estrategia, conexiones y coordinación; las decisiones financieras deben revisarse con especialistas",
        },
      ],
    },
  },
  {
    slug: "experiences",
    path: "/experiences/",
    name: "Experiences & Tourism",
    nameLead: "Experiences",
    nameTail: "& Tourism",
    icon: "globe",
    accent: "#9cc3ea",
    summary: "Conexión de destinos, operadores, experiencias y colaboradores",
    tags: ["Destinos", "Operadores", "Experiencias", "Colaboradores"],
    page: {
      headline: "Destinos y experiencias",
      headlineAccent: "bien conectados",
      lede: "Conexión entre destinos, operadores y colaboradores para diseñar experiencias con propósito y coordinación clara",
      introTitle: "Las mejores experiencias empiezan con buena coordinación",
      intro:
        "Una experiencia memorable depende de que destinos, operadores y colaboradores trabajen en sintonía. Esta área conecta esas piezas para diseñar propuestas con propósito, bien organizadas y pensadas para las personas que las viven",
      audiences: [
        {
          icon: "family",
          title: "Viajeros y grupos",
          description: "Personas y grupos que buscan experiencias pensadas a su medida, con contactos de confianza",
        },
        {
          icon: "map",
          title: "Operadores y destinos",
          description: "Prestadores y destinos que quieren nuevos aliados, propuestas o canales de colaboración",
        },
        {
          icon: "briefcase",
          title: "Marcas y empresas",
          description: "Organizaciones que necesitan experiencias para equipos, clientes o activaciones de marca",
        },
      ],
      services: [
        {
          title: "Destinos",
          description: "Vinculación con destinos y propuestas locales que encajan con cada tipo de proyecto o visitante",
          tag: "Lugares · Cultura · Propuestas",
        },
        {
          title: "Operadores",
          description: "Conexión con operadores y prestadores para coordinar servicios de forma ordenada",
          tag: "Prestadores · Servicios · Logística",
        },
        {
          title: "Experiencias",
          description: "Diseño y articulación de experiencias pensadas para personas, grupos y marcas",
          tag: "Grupos · Marcas · A medida",
        },
        {
          title: "Red de colaboradores",
          description: "Coordinación de aliados y colaboradores para que cada experiencia funcione de principio a fin",
          tag: "Aliados · Coordinación · Seguimiento",
        },
      ],
      deliverables: [
        {
          icon: "document",
          title: "Propuesta de experiencia",
          description: "La idea, el público y los objetivos de la experiencia, aterrizados en una propuesta clara",
        },
        {
          icon: "network",
          title: "Mapa de colaboradores",
          description: "Destinos, operadores y aliados que encajan con la propuesta y el rol de cada uno",
        },
        {
          icon: "calendar",
          title: "Calendario de coordinación",
          description: "Etapas, responsables y tiempos para que todo esté listo cuando tiene que estarlo",
        },
      ],
      faq: [
        {
          question: "¿Vendes paquetes turísticos o haces reservas?",
          answer:
            "No. El enfoque es conectar y coordinar destinos, operadores y colaboradores; las reservas y servicios turísticos los prestan los operadores correspondientes",
        },
        {
          question: "¿Trabajas con operadores que buscan nuevos aliados?",
          answer:
            "Sí, se pueden explorar colaboraciones con otros operadores, destinos o marcas que encajen con su propuesta",
        },
        {
          question: "¿Qué tipo de experiencias se pueden trabajar?",
          answer:
            "Experiencias culturales, de grupo, corporativas o a medida. Cada propuesta parte del objetivo y del perfil de quienes la vivirán",
        },
      ],
    },
  },
];

export const umbrellaPillars = ["Personas", "Ideas", "Negocios", "Derecho", "Cultura"];

export const umbrellaValues: IconItem[] = [
  {
    icon: "globe",
    title: "Visión integral",
    description:
      "Un mismo proyecto puede tocar temas legales, culturales, de negocio y de viaje. Verlos juntos evita decisiones aisladas",
  },
  {
    icon: "check",
    title: "Un solo interlocutor",
    description: "Una persona que entiende el contexto completo y coordina los próximos pasos contigo",
  },
  {
    icon: "network",
    title: "Conexiones con criterio",
    description: "Cada contacto o alianza se propone porque suma al objetivo, no por cantidad",
  },
];

export const umbrellaSteps = [
  {
    number: "01",
    title: "Escuchar",
    description: "Entender a la persona, la idea o el negocio, su objetivo real y el momento en que se encuentra",
  },
  {
    number: "02",
    title: "Conectar",
    description: "Ordenar opciones, identificar aliados y definir la ruta más viable para avanzar",
  },
  {
    number: "03",
    title: "Acompañar",
    description: "Seguimiento cercano de los próximos pasos, ajustes y coordinación entre las partes",
  },
];
