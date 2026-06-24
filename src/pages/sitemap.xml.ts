import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";

const routes = ["/", "/servicios/", "/sobre-nosotros/", "/contacto/", "/privacidad/", "/terminos/"];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(siteConfig.url)).toString().replace(/\/$/, "");
  const urls = routes
    .map((route) => {
      const loc = `${origin}${route}`;
      return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${route === "/" ? "1.0" : "0.7"}</priority></url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
