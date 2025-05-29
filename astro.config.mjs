import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://manusanchev.com',
  server: {
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      iconDir: "src/components/icons",
    }),
  ],
  adapter: vercel(),
});