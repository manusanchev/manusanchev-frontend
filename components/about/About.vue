<script setup lang="ts">
import AboutHeader from "~/components/about/header/AboutHeader.vue";
import AboutCard from "~/components/about/AboutCard.vue";
import type { InfoData } from "~/types/about/InfoData";

const { locale, t } = useI18n({
  useScope: "local",
});
const switchLocalePath = useSwitchLocalePath();

const { data } = await useAsyncData(async () =>
  queryContent<InfoData>("about").locale(locale.value).find(),
);
</script>

<template>
  <div class="p-4 md:p-8">
    <AboutHeader />
    <div
      class="flex gap-x-4 mt-3 lg:mt-0 px-3 text-gray-400 w-full justify-end"
    >
      <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
      <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink>
    </div>
    <p
      class="text-2xl font-semibold mt-10 lg:text-4xl lg:max-w-[40ch] lg:mt-14"
    >
      {{ t("About.Title") }}
    </p>

    <section class="flex flex-col gap-y-4 mt-8">
      <AboutCard
        v-for="(info, index) in data"
        :key="index"
        :title="info.title"
        :description="info.description"
      />
    </section>
  </div>
</template>

<i18n>
{
  "es": {
    "About": {
      "Title": "Desarrollador web con más de 4 años de experiencia construyendo producto."
    }
  },
  "en": {
    "About": {
      "Title": "Web developer with more than 4 years of experience building product."
    }
  }
}
</i18n>

<style scoped>
.router-link-exact-active {
  @apply text-white;
}
</style>
