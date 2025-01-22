import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  build: {
    outDir: 'dist',
    server: 'dist/server',
  },
});