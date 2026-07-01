# Cristian Gutierrez - Asesoria Migratoria Global

Proyecto Astro para un sitio profesional de asesoria migratoria global. Esta pensado para publicarse en Vercel desde Git y revisar avances en:

https://pagina-web-orcin.vercel.app/

## Comandos

Usar `pnpm` como gestor del proyecto.

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Estructura

- `src/pages/` - Paginas principales y endpoints SEO (`robots.txt`, `sitemap.xml`)
- `src/layouts/Layout.astro` - Layout principal, metadata, JSON-LD, header y footer
- `src/data/site.ts` - Datos globales de marca, contacto, rutas SEO, servicios e imagenes
- `src/styles/global.css` - Estilos globales y sistema visual

## Enfoque

- Asesoria migratoria global, sin ubicacion geografica fija.
- Imagenes de referencia locales mientras se definen fotografias finales del cliente.
- SEO base con canonical, Open Graph, Twitter card, robots y sitemap.
- Build estatico para despliegue en Vercel.
