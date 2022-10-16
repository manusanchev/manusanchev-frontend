<template>
  <div class="about-timeline">
    <div v-for="(item, index) in data" :key="index" class="about-timeline__content">
      <AboutTimelineSeparator :is-first-element="index === 0" />
      <AboutAgeTimeline :year="item.year">
        <AboutTextTimeline :is-even="isEven(index)" :text="item.text" />
      </AboutAgeTimeline>
      <AboutTimelineSeparator :is-last-one-element="index === data.length - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AboutSectionItem } from "@services/portfolio/types/AboutSectionItem";
import AboutTimelineSeparator from "@components/about/AboutTimelineSeparator.vue";
import AboutAgeTimeline from "@components/about/AboutAgeTimeline.vue";
import AboutTextTimeline from "@components/about/AboutTextTimeline.vue";

defineProps<{
  data: AboutSectionItem[];
}>();

function isEven(index: number): boolean {
  return index % 2 === 0;
}
</script>

<style scoped>
.about-timeline {
  @apply flex flex-col;
}

.about-timeline__content {
  @apply flex select-none flex-col items-center;
}
</style>
