<template>
  <div class="flex flex-col">
    <div v-for="(item, index) in aboutMeData" :key="index" class="flex select-none flex-col items-center">
      <AboutTimelineSeparator :is-first-element="index === 0" />
      <AboutAgeTimeline :year="item.year">
        <AboutTextTimeline :is-even="isEven(index)" :text="item.text" />
      </AboutAgeTimeline>
      <AboutTimelineSeparator :is-last-one-element="index === aboutMeData.length - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IAboutMeSectionItem } from "@src/types";
import AboutTimelineSeparator from "@components/about/AboutTimelineSeparator.vue";
import AboutAgeTimeline from "@components/about/AboutAgeTimeline.vue";
import AboutTextTimeline from "@components/about/AboutTextTimeline.vue";
import { inject } from "vue";

const aboutMeData = inject<IAboutMeSectionItem[]>("aboutMeData")

function isEven(index: number): boolean {
  return index % 2 === 0;
}
</script>
