import { defineConfig } from 'astro/config';

// TODO: reemplazar por el dominio real al publicar (afecta canonical, sitemap y JSON-LD)
export default defineConfig({
  site: 'https://schrohsantiago.github.io',
  compressHTML: true,
});
