import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['http', 'https', 'crypto'],
    },
  },
});
