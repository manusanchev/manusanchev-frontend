<template>
  <section>
    <SectionHeader>
      <template #title>Sobre mi </template>
      <template #subtitle> Un poco de mi historia </template>
    </SectionHeader>
    <div class="flex-start mt-16 flex md:mt-40 md:block">
      <AboutTimeline :data="aboutMeData" />
    </div>
    <AboutMessage class="mt-12 md:mt-24" />
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import AboutTimeline from "@components/about/AboutTimeline.vue";
import AboutMessage from "@components/about/AboutMessage.vue";
import { AboutMeData as aboutMeData } from "@data/AboutMe";
</script>
