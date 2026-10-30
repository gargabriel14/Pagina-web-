import type { IconName } from "./site";

export type AreaSlug = "legal" | "entertainment" | "business" | "experiences";

export interface Area {
  slug: AreaSlug;
  path: string;
  name: string;
  /** Second line used when the name is split in two (cards, nav) */
  nameLead: string;
  nameTail: string;
  icon: IconName;
  accent: string;
  summary: string;
  tags: string[];
  headline: string;
  headlineAccent: string;
  lede: string;
  services: { title: string; description: string }[];
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
    headline: "Tu proceso migratorio necesita una",
    headlineAccent: "ruta clara",
    lede: "Requisitos, alternativas y riesgos convertidos en un plan que puedas entender antes de invertir tiempo y dinero",
    services: [],
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
    headline: "Ideas creativas convertidas en",
    headlineAccent: "proyectos reales",
    lede: "Acompañamiento estratégico para artistas, marcas y proyectos culturales que necesitan orden, conexiones y una hoja de ruta clara",
    services: [
      {
        title: "Artistas y música",
        description: "Orientación para ordenar oportunidades, contactos y próximos pasos de proyectos artísticos y musicales",
      },
      {
        title: "Marcas y colaboraciones",
        description: "Conexión entre marcas, talentos y proyectos culturales con objetivos claros para cada parte",
      },
      {
        title: "Eventos",
        description: "Coordinación de ideas, aliados y planificación inicial para eventos y experiencias culturales",
      },
      {
        title: "Proyectos creativos",
        description: "Estructura y hoja de ruta para llevar una idea creativa de concepto a proyecto viable",
      },
    ],
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
    headline: "Las oportunidades crecen con las",
    headlineAccent: "conexiones correctas",
    lede: "Gestión estratégica para identificar, conectar y coordinar a las personas y piezas que un proyecto necesita para avanzar",
    services: [
      {
        title: "Conexiones estratégicas",
        description: "Puentes entre personas, empresas e ideas que pueden sumar valor a un mismo objetivo",
      },
      {
        title: "Alianzas",
        description: "Exploración y estructura de colaboraciones con roles, expectativas y próximos pasos definidos",
      },
      {
        title: "Coordinación de proyectos",
        description: "Seguimiento ordenado de tareas, actores y tiempos para que el proyecto no pierda impulso",
      },
      {
        title: "Desarrollo de oportunidades",
        description: "Evaluación de ideas de negocio y oportunidades para decidir con criterio por dónde empezar",
      },
    ],
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
    headline: "Destinos y experiencias",
    headlineAccent: "bien conectados",
    lede: "Conexión entre destinos, operadores y colaboradores para diseñar experiencias con propósito y coordinación clara",
    services: [
      {
        title: "Destinos",
        description: "Vinculación con destinos y propuestas locales que encajan con cada tipo de proyecto o visitante",
      },
      {
        title: "Operadores",
        description: "Conexión con operadores y prestadores para coordinar servicios de forma ordenada",
      },
      {
        title: "Experiencias",
        description: "Diseño y articulación de experiencias pensadas para personas, grupos y marcas",
      },
      {
        title: "Red de colaboradores",
        description: "Coordinación de aliados y colaboradores para que cada experiencia funcione de principio a fin",
      },
    ],
  },
];

export const getArea = (slug: AreaSlug) => areas.find((area) => area.slug === slug)!;

export const umbrellaPillars = ["Personas", "Ideas", "Negocios", "Derecho", "Cultura"];

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
