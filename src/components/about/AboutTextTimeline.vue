<template>
  <p
    class="absolute left-20 top-2 md:top-0 text-white w-[16rem] md:text-lg md:w-[14rem] lg:text-xl lg:w-[21rem] xl:w-[24rem]"
    :class="orientation"
    v-html="text"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const {  text, isEven } = defineProps<{
  isEven: boolean;
  text: string;
}>();



const orientation = computed(() => {
  return isEven ? "left-20 md:left-24 lg:left-28 lg:top-[0.5rem]" : "md:-left-[15rem] md:text-right lg:-left-[22rem] xl:-left-[25rem]";
});
</script>

<style>
.about-span {
  @apply text-[#79CEBA];
}
</style>
