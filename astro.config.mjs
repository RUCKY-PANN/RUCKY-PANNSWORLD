import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  integrations: [tailwind(), react()], // ← まとめて記述！
  viewTransitions: true,
  //middleware: true,
  output: 'static',

  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
