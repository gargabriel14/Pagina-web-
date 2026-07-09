import type { APIRoute } from "astro";
import { siteConfig, sitePages } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(siteConfig.url)).toString().replace(/\/$/, "");
  const buildDate = new Date();
  const lastmod = [
    buildDate.getFullYear(),
    String(buildDate.getMonth() + 1).padStart(2, "0"),
    String(buildDate.getDate()).padStart(2, "0"),
  ].join("-");
  const urls = sitePages
    .map(({ path, priority, changefreq }) => {
      const loc = `${origin}${path}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
