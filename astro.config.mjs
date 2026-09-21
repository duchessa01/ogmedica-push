import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://duchessa01.github.io',
  base: '/ogmedica-push',
    integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});