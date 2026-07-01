# Cristian Gutiérrez - Asesoría Migratoria Global

Proyecto Astro para un sitio profesional de asesoría migratoria global, pensado para publicarse en Vercel desde Git y revisar avances en:

https://pagina-web-orcin.vercel.app/

## Comandos

Usar `pnpm` como gestor del proyecto

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Estructura

- `src/pages/` - Páginas principales y endpoints SEO (`robots.txt`, `sitemap.xml`)
- `src/layouts/Layout.astro` - Layout principal, metadata, JSON-LD, header y footer
- `src/data/site.ts` - Datos globales de marca, contacto, rutas SEO, servicios e imágenes
- `src/styles/global.css` - Estilos globales y sistema visual

## Enfoque

- Asesoría migratoria global, sin ubicación geográfica fija
- Imágenes de referencia locales mientras se definen fotografías finales del cliente
- SEO base con canonical, Open Graph, Twitter card, robots y sitemap
- Build estático para despliegue en Vercel
