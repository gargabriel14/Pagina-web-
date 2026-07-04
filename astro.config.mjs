import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://pagina-web-orcin.vercel.app',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
});
