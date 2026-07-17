import { defineConfig } from 'astro/config';

// banthia14aman.github.io is a user site → served at the domain root, no base path.
export default defineConfig({
  site: 'https://banthia14aman.github.io',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
