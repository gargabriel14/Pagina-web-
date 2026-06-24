# Cristian Gutierrez - Asesoria Migratoria Global

Maqueta Astro para un sitio profesional de asesoria migratoria global. El proyecto esta pensado para publicarse en Vercel desde Git y revisar avances en:

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
- `src/data/site.ts` - Datos globales de marca, contacto y placeholders
- `src/styles/global.css` - Estilos globales y sistema visual de la maqueta

## Enfoque

- Asesoria migratoria global, sin ubicacion geografica fija.
- Placeholders visuales deliberados mientras se definen imagenes finales.
- SEO base con canonical, Open Graph, Twitter card, robots y sitemap.
- Build estatico para despliegue en Vercel.
