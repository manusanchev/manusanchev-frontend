<script setup lang="ts">
import AboutHeader from "~/components/about/header/AboutHeader.vue";
import AboutCard from "~/components/about/AboutCard.vue";
import FreelanceContactFooter from "~/components/about/FreelanceContactFooter.vue";
import type { InfoData } from "~/types/about/InfoData";
import type { Component } from "@nuxt/schema";

const additionalInfo = new Map<string, any>([
  ["freelance", FreelanceContactFooter],
]);
const { locale, t } = useI18n({
  useScope: "local",
});
const { data } = await useAsyncData(async () =>
  queryContent<InfoData>("about").locale(locale.value).find(),
);
</script>

<template>
  <div class="p-4 md:p-8">
    <AboutHeader />
    <p
      class="font-semibold text-2xl mt-10 lg:text-3xl lg:max-w-[40ch] lg:mt-14"
    >
      {{ t("About.Title") }}
    </p>
    <section class="flex flex-col gap-y-4 mt-8">
      <AboutCard
        class="lg:max-w-[70ch]"
        v-for="(info, index) in data"
        :key="index"
        :title="info.title"
        :description="info.description"
      >
        <component
          v-if="info.component"
          :is="additionalInfo.get(info.component)"
        ></component>
      </AboutCard>
    </section>
  </div>
</template>

<i18n>
{
  "es": {
    "About": {
      "Title": "Desarrollador web frontend realizando proyectos SaaS y trabajos freelance."
    }
  },
  "en": {
    "About": {
      "Title": " Frontend web developer doing SaaS projects and freelance work."
    }
  }
}
</i18n>
