<script lang="ts" setup>
useSeoMeta({
  title: "Manuel Sánchez - Frontend developer",
  description:
    "Freelance web developer working on Valencia (spain) area | Desarrollo web en Valencia | Desarrollador web freelance en Valencia",
  ogType: "website",
  ogSiteName: "manusanchev",
  twitterCard: "summary_large_image",
  ogUrl: "https://www.manusanchev.com",
  ogTitle: "Manuel Sánchez - Frontend developer and Freelance",
  ogDescription: "Freelance web developer working on your ideas. Contact me and work on your vision now.",
  ogImage: "/ogImage.webp",
  twitterImage: "/ogImage.webp",
  twitterTitle: "Manuel Sánchez - Frontend developer and Freelance",
  twitterDescription: "Freelance web developer working on your ideas. Contact me and work on your vision now.",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "twitter:domain", content: "manusanchev.com" },
  ],
  link: [
    { rel: "canonical", href: "https://www.manusanchev.com/" },
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  ],
});
</script>
<template>
  <NuxtPage />
</template>
