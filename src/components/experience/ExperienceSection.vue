<template>
  <section>
    <SectionHeader title="Experiencia" subtitle="Tecnologías con las que he trabajado" />
    <ExperienceItemsList>
      <ExperienceItem v-for="(item, index) in experienceData" :key="index" :item="item" />
    </ExperienceItemsList>
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";

import SectionHeader from "@components/shared/SectionHeader.vue";
import ExperienceItem from "@components/experience/ExperienceItem.vue";
import ExperienceItemsList from "@components/experience/ExperienceItemsList.vue";
import { ExperienceSectionItem } from "@src/services/portfolio/types/ExperienceSectionItem";
import usePortfolioService from "@src/composables/PortfolioService";

const portfolioService = usePortfolioService();
const experienceData: ExperienceSectionItem[] = await portfolioService.getExperienceData();
</script>
