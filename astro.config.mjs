import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vitres-wattrelos.fr',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    mdx()
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});