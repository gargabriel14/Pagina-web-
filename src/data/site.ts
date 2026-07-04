export type IconName =
  | "passport"
  | "family"
  | "study"
  | "briefcase"
  | "check"
  | "document"
  | "globe"
  | "calendar";

export const siteConfig = {
  name: "Cristian Gutiérrez",
  title: "Cristian Gutiérrez | Asesoría Migratoria Global",
  description:
    "Asesoría migratoria global para personas, familias y empresas que necesitan planificar visas, residencia, permisos y movilidad internacional",
  url: "https://pagina-web-orcin.vercel.app",
  email: "hola@cristiangutierrez.com.ar",
  phone: "+54 9 11 2345 6789",
  phoneHref: "+5491123456789",
  locationLabel: "Atención online internacional",
  locale: "es_ES",
  ogImage: "/images/advisor-meeting.jpg",
};

export const siteImages = {
  hero: "/images/advisor-meeting.jpg",
  advisor: "/images/global-mobility-consultation.jpg",
  services: "/images/team-consultation.jpg",
  contact: "/images/office-strategy-session.jpg",
  privacy: "/images/legal-documents.jpg",
  terms: "/images/document-review.jpg",
  about: "/images/global-mobility-consultation.jpg",
  value: "/images/document-review.jpg",
};

export const sitePages = [
  { path: "/", priority: "1.0" },
  { path: "/servicios/", priority: "0.8" },
  { path: "/sobre-nosotros/", priority: "0.7" },
  { path: "/contacto/", priority: "0.8" },
  { path: "/privacidad/", priority: "0.4" },
  { path: "/terminos/", priority: "0.4" },
];

export const services = [
  {
    icon: "passport" satisfies IconName,
    title: "Visas y permisos",
    description:
      "Análisis de requisitos, rutas posibles y documentación necesaria según país de origen y destino",
  },
  {
    icon: "family" satisfies IconName,
    title: "Familias internacionales",
    description:
      "Orientación para procesos familiares, reunificación, acompañantes y organización de expedientes",
  },
  {
    icon: "study" satisfies IconName,
    title: "Estudio y talento",
    description:
      "Preparación de planes para estudiantes, profesionales y perfiles que buscan oportunidades fuera de su país",
  },
  {
    icon: "briefcase" satisfies IconName,
    title: "Empresas y movilidad",
    description:
      "Apoyo a emprendedores y equipos que necesitan estructurar traslados, permisos y expansión internacional",
  },
];

export const trustSignals = [
  {
    value: "Online",
    label: "Atención internacional",
  },
  {
    value: "1:1",
    label: "Diagnóstico por perfil",
  },
  {
    value: "360",
    label: "Ruta, requisitos y documentos",
  },
];

export const audiencePaths = [
  {
    icon: "briefcase" satisfies IconName,
    title: "Profesionales",
    description:
      "Evalúa opciones de visado, trabajo remoto, permisos laborales y oportunidades fuera de tu país",
  },
  {
    icon: "family" satisfies IconName,
    title: "Familias",
    description:
      "Planifica residencia, reunificación, acompañantes, requisitos escolares y documentación familiar",
  },
  {
    icon: "globe" satisfies IconName,
    title: "Empresas",
    description:
      "Coordina movilidad de talento, traslados, permisos y cumplimiento entre distintos países",
  },
];

export const consultationDeliverables = [
  {
    icon: "globe" satisfies IconName,
    title: "Mapa de ruta",
    description:
      "Una lectura clara de origen, destino, objetivo, requisitos y alternativas viables",
  },
  {
    icon: "document" satisfies IconName,
    title: "Checklist documental",
    description:
      "Una lista priorizada para preparar el expediente sin perder tiempo en papeles innecesarios",
  },
  {
    icon: "calendar" satisfies IconName,
    title: "Plan de próximos pasos",
    description:
      "Una secuencia de acciones para saber qué revisar, qué preparar y cuándo avanzar",
  },
];

export const decisionPoints = [
  "Qué visa, residencia o permiso puede tener sentido para tu perfil",
  "Qué riesgos conviene revisar antes de pagar tasas, traducciones o reservas",
  "Qué documentos pueden fortalecer el expediente y cuáles necesitan orden",
  "Qué tiempos, dependientes o condiciones pueden cambiar la estrategia",
];

export const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Evaluación inicial de objetivos, perfil, país de origen, destino y alternativas disponibles",
  },
  {
    number: "02",
    title: "Preparación",
    description:
      "Organización de requisitos, documentos, prioridades y calendario de acciones",
  },
  {
    number: "03",
    title: "Seguimiento",
    description:
      "Acompañamiento durante avances, ajustes y comunicación de próximos pasos",
  },
];

export const faqItems = [
  {
    question: "¿Puedo consultar si todavía no elegí país de destino?",
    answer:
      "Sí, la consulta puede ayudarte a comparar alternativas y entender qué destinos encajan mejor con tu perfil",
  },
  {
    question: "¿La asesoría garantiza la aprobación de una visa?",
    answer:
      "No se prometen resultados migratorios, el valor está en reducir incertidumbre, ordenar requisitos y preparar una estrategia responsable",
  },
  {
    question: "¿También trabajas con empresas y equipos?",
    answer:
      "Sí, se pueden revisar traslados de talento, permisos, dependientes, documentación y coordinación con especialistas por destino",
  },
  {
    question: "¿La atención es internacional?",
    answer:
      "Sí, la atención es online y está pensada para personas, familias y empresas que se mueven entre países",
  },
];
