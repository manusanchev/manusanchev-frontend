<script lang="ts" setup>
const { t } = useI18n({
  useScope: "local",
});

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
});

useSeoMeta({
  title: t("Head.Title"),
  description: t("Head.Description"),
  ogType: "website",
  ogSiteName: "manusanchev",
  twitterCard: "summary_large_image",
  ogUrl: "https://www.manusanchev.com",
  ogTitle: t("Head.OgTitle"),
  ogDescription: t("Head.OgDescription"),
  ogImage: "/ogImage.webp",
  twitterImage: "/ogImage.webp",
  twitterTitle: t("Head.OgTitle"),
  twitterDescription: t("Head.OgDescription"),
});

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "twitter:domain", content: "manusanchev.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    ...(i18nHead.value.meta || []),
  ],
  link: [
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ...(i18nHead.value.link || []),
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<i18n>
{
  "en": {
    "Head": {
      "Title": "Manuel Sánchez - Frontend developer",
      "Description": "Freelance web developer working on Valencia, Spain",
      "OgTitle": "Manuel Sánchez - Frontend developer and Freelance",
      "OgDescription": "Freelance web developer working on your ideas. Contact me and work on your vision now"
    }
  },
  "es": {
    "Head": {
      "Title": "Manuel Sánchez - Desarrollador Frontend",
      "Description": "Desarrollador web freelance trabajando en Valencia, España",
      "OgTitle": "Manuel Sánchez - Desarrollador Frontend y freelance",
      "OgDescription": "Desarrollador web Frontend trabajando en tus ideas. Contactame y trabaja en tu vision ahora"
    }
  }
}
</i18n>
