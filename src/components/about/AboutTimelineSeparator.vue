<template>
  <div class="w-[2px] bg-gradient-to-b" :class="classes" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const { isFirstElement, isLastOneElement } = defineProps<{
  isFirstElement?: boolean;
  isLastOneElement?: boolean;
}>();

const classes = computed(() => {
  if (isFirstElement) {
    return "h-[4rem] from-slate-800 to-[#6BB8FF]";
  }

  if (isLastOneElement) {
    return "h-[8rem] from-[#6BB8FF] to-slate-800";
  }

  return "h-[8rem] bg-[#6BB8FF]";
});
</script>
