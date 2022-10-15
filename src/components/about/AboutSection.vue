<template>
  <section>
    <SectionHeader title="Sobre mi" subtitle="Un poco de mi historia" />
    <div class="flex-start flex md:block">
      <AboutTimeline :data="aboutMeData" />
    </div>
    <AboutMessage class="mt-12 md:mt-24" />
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import AboutTimeline from "@components/about/AboutTimeline.vue";
import AboutMessage from "@components/about/AboutMessage.vue";
import { AboutSectionItem } from "@services/portfolio/types/AboutSectionItem";
import usePortfolioService from "@src/composables/PortfolioService";

const portfolioService = usePortfolioService();
const aboutMeData: AboutSectionItem[] = await portfolioService.getAboutMeData();


</script>
