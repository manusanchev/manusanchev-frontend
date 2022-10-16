<template>
  <p class="about-text-timeline" :class="orientation" v-html="text" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const { text, isEven } = defineProps<{
  isEven: boolean;
  text: string;
}>();

const orientation = computed(() => {
  return isEven ? "about-text-timeline--left" : "about-text-timeline--right";
});
</script>

<style scoped>
.about-text-timeline {
  @apply absolute left-20 top-2 w-[16rem] text-white;
}

@screen md {
  .about-text-timeline {
    @apply top-0 w-[14rem] text-lg;
  }
}

@screen lg {
  .about-text-timeline {
    @apply w-[21rem] text-xl;
  }
}

@screen xl {
  .about-text-timeline {
    @apply w-[24rem];
  }
}

.about-text-timeline--left {
  @apply left-20;
}

@screen md {
  .about-text-timeline--left {
    @apply left-24;
  }
}

@screen lg {
  .about-text-timeline--left {
    @apply left-28 top-[0.5rem];
  }
}

@screen md {
  .about-text-timeline--right {
    @apply -left-[15rem] text-right;
  }
}

@screen lg {
  .about-text-timeline--right {
    @apply -left-[22rem];
  }
}

@screen xl {
  .about-text-timeline--right {
    @apply -left-[25rem];
  }
}

:global(.about--marked) {
  @apply text-[#79CEBA];
}
</style>
