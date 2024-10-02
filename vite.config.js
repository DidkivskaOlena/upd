import { defineConfig } from 'vite';

export default defineConfig({
  base: '/public/path/',
  build: {
    rollupOptions: {
      // external: [/^\/external-assets\/.*$/],
    },
  },
});
