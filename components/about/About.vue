<script setup lang="ts">
import AboutHeader from "~/components/about/header/AboutHeader.vue";
import CardInfo from "~/components/about/CardInfo.vue";
import FreelanceContactFooter from "~/components/about/FreelanceContactFooter.vue";
import type { InfoData } from "~/types/about/InfoData";
import type { Component } from "@nuxt/schema";

const additionalInfo = new Map<string, any>([
  ["freelance", FreelanceContactFooter],
]);

const { data } = await useAsyncData(async () =>
  queryContent<InfoData>("about").find(),
);
</script>

<template>
  <div class="p-4">
    <AboutHeader />
    <p class="font-semibold text-2xl mt-10">
      Frontend web developer making SaaS projects and freelancing jobs.
    </p>
    <section class="flex flex-col gap-y-4 mt-8">
      <CardInfo
        v-for="info in data"
        :title="info.title"
        :description="info.description"
      >
        <component
          v-if="info.component"
          :is="additionalInfo.get(info.component)"
        ></component>
      </CardInfo>
    </section>
  </div>
</template>
