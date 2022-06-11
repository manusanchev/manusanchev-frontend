<template>
  <div class="flex flex-start">
    <div class="flex flex-col">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex flex-col items-center select-none relative"
      >
        <AboutAgeTimeline :index="index" />

        <div
          class="w-16 h-16 text-white flex items-center justify-center border rounded-full border-[#6BB8FF] text-xl"
        >
          {{ item.year }}
        </div>

        <p
          class="absolute top-[16.5rem] left-20 text-white w-[16rem]"
          :class="index === 0 ? 'top-[4.5rem]' : 'top-[16.5rem]'"
          v-html="item.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AboutMe } from "@data/AboutMe";
import AboutAgeTimeline from "@components/about/AboutTimelineSeparator.vue";

defineProps<{
  data: AboutMe[];
}>();
</script>

<style>
.about-span {
  @apply text-[#6BB8FF] font-semibold;
}
</style>
