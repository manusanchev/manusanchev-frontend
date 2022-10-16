<template>
  <div class="about-age-timeline">
    <div class="about-age-timeline__year">
      {{ year }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  year: string;
}>();
</script>

<style scoped>
.about-age-timeline {
  @apply relative;
}

.about-age-timeline__year {
  @apply flex h-16 w-16 items-center justify-center rounded-full;
  @apply border border-[#6BB8FF] text-xl text-white;
}

@screen md {
  .about-age-timeline__year {
    @apply h-[5rem] w-[5rem] text-2xl;
  }
}

@screen lg {
  .about-age-timeline__year {
    @apply h-24 w-24 text-3xl;
  }
}
</style>
