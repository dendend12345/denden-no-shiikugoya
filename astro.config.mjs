import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});