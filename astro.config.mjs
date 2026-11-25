import { defineConfig } from 'astro/config';

// Dominio real: afecta canonical, sitemap y JSON-LD
export default defineConfig({
  site: 'https://santiagoschroh.com',
  compressHTML: true,
});
