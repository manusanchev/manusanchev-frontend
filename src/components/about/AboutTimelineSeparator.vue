<template>
  <div class="about-timeline-separator" :class="classes" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const { isFirstElement, isLastOneElement } = defineProps<{
  isFirstElement?: boolean;
  isLastOneElement?: boolean;
}>();

const classes = computed(() => {
  if (isFirstElement) {
    return "about-timeline-separator--first-element";
  }

  if (isLastOneElement) {
    return "about-timeline-separator--last-element";
  }

  return "about-timeline-separator--element";
});
</script>

<style scoped>
.about-timeline-separator {
  @apply w-[2px] bg-gradient-to-b;
}

.about-timeline-separator--first-element {
  @apply h-[4rem] from-slate-800 to-[#6BB8FF];
}

.about-timeline-separator--last-element {
  @apply h-[8rem] from-[#6BB8FF] to-slate-800;
}

.about-timeline-separator--element {
  @apply h-[8rem] bg-[#6BB8FF];
}
</style>
