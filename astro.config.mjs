import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dustinwmooney.github.io',
  integrations: [mdx(), sitemap()],
  redirects: { '/writings': '/writing/archive' },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
