import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL(siteConfig.url)).toString().replace(/\/$/, "");

  return new Response(
    [`User-agent: *`, `Allow: /`, `Sitemap: ${origin}/sitemap.xml`, ""].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
