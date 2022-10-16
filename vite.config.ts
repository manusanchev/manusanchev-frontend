import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from "url";

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
  },
  preview: {
    port: 3000
  },
  server: {
    host: true,
    port: 3000
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@composables": fileURLToPath(new URL("./src/composables", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "@static": fileURLToPath(new URL("./static", import.meta.url)),
      "@context": fileURLToPath(new URL("./src/context", import.meta.url)),
    },
  },
});