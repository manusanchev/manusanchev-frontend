<template>
  <section>
    <SectionHeader title="Experiencia" subtitle="Tecnologias con las que he trabajado" />
    <ExperienceItemsList>
      <ExperienceItem  v-for="(item, index) in experienceData" :key="index" :item="item" />
    </ExperienceItemsList>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import ExperienceItem from "@components/experience/ExperienceItem.vue";
import { experienceData } from "@src/api/data/ExperienceData";
import ExperienceItemsList from "@components/experience/ExperienceItemsList.vue";
</script>
