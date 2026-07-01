export type IconName = "passport" | "family" | "study" | "briefcase" | "check" | "document" | "globe" | "calendar";

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

export const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Evaluación inicial de objetivos, perfil, país de origen, destino y alternativas disponibles",
  },
  {
    number: "02",
    title: "Preparación",
    description: "Organización de requisitos, documentos, prioridades y calendario de acciones",
  },
  {
    number: "03",
    title: "Seguimiento",
    description: "Acompañamiento durante avances, ajustes y comunicación de próximos pasos",
  },
];

export const caseTypes = [
  {
    title: "Talento global",
    description:
      "Profesionales que necesitan evaluar permisos de trabajo, tiempos y documentación antes de aceptar una oferta internacional",
  },
  {
    title: "Movilidad familiar",
    description:
      "Familias que quieren entender rutas de residencia, acompañantes, requisitos escolares y preparación de expedientes",
  },
  {
    title: "Equipos y empresas",
    description:
      "Empresas que trasladan colaboradores o expanden operaciones y necesitan coordinar requisitos entre países",
  },
];
