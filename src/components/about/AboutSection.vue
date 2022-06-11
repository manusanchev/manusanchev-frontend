<template>
  <section>
    <SectionHeader>
      <template #title>Sobre mi </template>
      <template #subtitle> Un poco de mi historia </template>
    </SectionHeader>
    <AboutTimeline :data="aboutMeData" />
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import AboutTimeline from "@components/about/AboutTimeline.vue";
import { AboutMeData as aboutMeData } from "@data/AboutMe";
</script>
