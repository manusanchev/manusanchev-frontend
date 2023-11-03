<script setup lang="ts">
import ProjectCards from "~/components/projects/card/ProjectCards.vue";
const switchLocalePath = useSwitchLocalePath();

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <div class="pl-4 lg:pl-8">
    <div class="flex gap-x-3 mb-4 text-gray-400">
      <NuxtLink class="p-2 rounded" :to="switchLocalePath('en')">EN</NuxtLink>
      <NuxtLink class="p-2" :to="switchLocalePath('es')">ES</NuxtLink>
    </div>

    <p class="font-black text-3xl lg:text-5xl mb-2">
      {{ t("Projects.Title") }}
    </p>
    <p class="text-lg text-gray-300 lg:text-xl">
      {{ t("Projects.Subtitle") }}
    </p>
  </div>

  <ProjectCards />
</template>

<i18n>
{
  "en": {
    "Projects": {
      "Title": "Projects I've built over time.",
      "Subtitle": "at least those that saw the light"
    }
  },
  "es": {
    "Projects": {
      "Title": "Proyectos que he ido construyendo.",
      "Subtitle": "al menos aquellos que vieron la luz"
    }
  }
}
</i18n>

<style scoped>
.router-link-exact-active {
  @apply text-white;
}
</style>
