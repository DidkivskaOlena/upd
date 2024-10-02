import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // external: [/^\/external-assets\/.*$/],
    },
  },
  base: '/public/path/',
});
