# Cristian Gutiérrez - Servicios y Proyectos

Sitio Astro con cuatro áreas: derecho y migración, cultura y entretenimiento, negocios y alianzas, turismo y experiencias, publicado en Vercel desde Git:

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
- `src/data/areas.ts` - Contenido y metadatos de las cuatro áreas
- `src/styles/global.css` - Estilos globales y sistema visual

## Enfoque

- Servicios internacionales, sin ubicación geográfica fija
- Imágenes de referencia locales mientras se definen fotografías finales del cliente
- SEO base con canonical, Open Graph, Twitter card, robots y sitemap
- Build estático para despliegue en Vercel

## Contacto

Instagram es el canal activo mientras no haya un correo receptor confirmado

Para habilitar el formulario, definir `PUBLIC_CONTACT_EMAIL` con el correo real en el entorno de Vercel y volver a desplegar, o en `.env` para desarrollo local

FormSubmit requiere confirmar el correo de activación antes de recibir consultas, comprobar la entrega con una prueba autorizada antes de anunciar el canal como disponible

Las fotografías actuales son referencias generadas, sustituirlas por fotografías reales de Cristian cuando estén disponibles
