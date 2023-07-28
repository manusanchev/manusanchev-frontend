<template>
  <section>
    <SectionHeader title="Sobre mi" subtitle="Conoce mis cualidades" />
    <div class="about-section__timeline">
      <AboutTimeline :data="aboutMeData" />
    </div>
    <AboutMessage class="about-section__message" />
  </section>
</template>

<script setup lang="ts">
/**
 * FIXME refactor this timeline to use before and after
 */
import SectionHeader from "@components/shared/SectionHeader.vue";
import AboutTimeline from "@components/about/AboutTimeline.vue";
import AboutMessage from "@components/about/AboutMessage.vue";
import { AboutSectionItem } from "@services/portfolio/types/AboutSectionItem";
import usePortfolioService from "@composables/PortfolioService";

const portfolioService = usePortfolioService();
const aboutMeData: AboutSectionItem[] = await portfolioService.getAboutMeData();
</script>

<style scoped>
.about-section__timeline {
  @apply flex;
}

@screen md {
  .about-section__timeline {
    @apply block;
  }
}

.about-section__message {
  @apply mt-12 ;
}

@screen md {
  .about-section__message {
    @apply mt-24;
  }
}
</style>
