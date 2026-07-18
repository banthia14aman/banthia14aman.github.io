import { defineConfig } from 'astro/config';

// banthia14aman.github.io is a user site → served at the domain root, no base path.
// Static output deployed via GitHub Actions to GitHub Pages. The chat-proxy
// Worker lives separately in worker/ — the site itself needs no adapter.
export default defineConfig({
  site: 'https://banthia14aman.github.io',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
