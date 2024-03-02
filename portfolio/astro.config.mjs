import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    server: {
        port: 3000
    },
    integrations: [tailwind()],
    i18n: {
        defaultLocale: "en",
        detectBrowserLanguage: false,
        locales: ["es", "en"],
    },
});
