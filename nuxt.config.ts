// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],

  content: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  i18n: {
    defaultLocale: "es",
    detectBrowserLanguage: false,
    baseUrl: "https://www.manusanchev.com",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
      },
      {
        code: "es",
        iso: "es",
        name: "Spanish",
      },
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-10-09",
});
