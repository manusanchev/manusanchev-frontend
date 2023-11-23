<script setup lang="ts">
import ProjectCards from "~/components/projects/card/ProjectCards.vue";

const { t } = useI18n();
</script>

<template>
  <div class="pl-4 lg:pl-8 lg:pt-8">
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
