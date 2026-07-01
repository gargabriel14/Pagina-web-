import type { APIRoute } from "astro";
import { siteConfig, sitePages } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(siteConfig.url)).toString().replace(/\/$/, "");
  const urls = sitePages
    .map(({ path, priority }) => {
      const loc = `${origin}${path}`;
      return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
