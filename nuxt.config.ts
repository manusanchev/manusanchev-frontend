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
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  i18n: {
    defaultLocale: "en",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
      },
      {
        code: "es",
        iso: "es-ES",
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

  compatibilityDate: "2024-07-06",
});
