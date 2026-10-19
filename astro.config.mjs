// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Set SITE (e.g. https://<user>.github.io) and BASE (e.g. /love-is-blind) for GitHub Pages.
const site = process.env.SITE ?? 'https://dans-vsa.github.io';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Inline CSS so first paint isn't blocked by a stylesheet request.
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', id: 'id-ID' } },
      // The root page only redirects to /en/ or /id/, so keep it out of the sitemap.
      filter: (page) => new URL(page).pathname !== (base.endsWith('/') ? base : `${base}/`),
    }),
  ],
});
