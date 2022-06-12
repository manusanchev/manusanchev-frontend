<template>
  <section>
    <SectionHeader title="Experiencia" subtitle="Tecnologias con las que he trabajado" />
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:max-w-[95%] xl:max-w-[75%] mx-auto md:gap-20">
      <ExperienceItem  v-for="(item, index) in experienceData" :key="index" :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import ExperienceItem from "@components/experience/ExperienceItem.vue";
import { experienceData } from "@data/ExperienceData";
</script>
