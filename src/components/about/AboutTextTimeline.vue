<template>
  <p
    class="absolute left-20 top-2 w-[16rem] text-white md:top-0 md:w-[14rem] md:text-lg lg:w-[21rem] lg:text-xl xl:w-[24rem]"
    :class="orientation"
    v-html="text"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const { text, isEven } = defineProps<{
  isEven: boolean;
  text: string;
}>();

const orientation = computed(() => {
  return isEven
    ? "left-20 md:left-24 lg:left-28 lg:top-[0.5rem]"
    : "md:-left-[15rem] md:text-right lg:-left-[22rem] xl:-left-[25rem]";
});
</script>

<style>
.about-span {
  @apply text-[#79CEBA];
}
</style>
