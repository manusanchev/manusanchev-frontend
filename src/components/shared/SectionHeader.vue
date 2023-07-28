<template>
  <div class="section-header">
    <h3 class="section-header__title">
      {{ title }}
    </h3>
    <h4 class="section-header__subtitle">
      {{ subtitle }}
    </h4>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped>
.section-header {
  @apply mx-auto mt-[10rem] mb-16 text-center;
}

@screen md {
  .section-header {
    @apply mb-28 mt-[14rem];
  }
}

.section-header__title {
  @apply bg-gradient-to-r from-sky-600 to-sky-200 bg-clip-text text-3xl font-medium text-transparent py-3;
}

@screen lg {
  .section-header__title {
    @apply text-4xl;
  }
}

.section-header__subtitle {
  @apply text-4xl font-black text-white leading-snug mx-auto;
  max-width: 20ch;
}

@screen md {
  .section-header__subtitle {
    @apply mt-2 text-6xl;
  }
}

@screen lg {
  .section-header__subtitle {
    @apply mt-2 text-6xl;
  }
}
</style>
