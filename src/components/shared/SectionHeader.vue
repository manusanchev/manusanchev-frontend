<template>
  <div class="section-header">
    <h2 class="section-header__title">
      {{ title }}
    </h2>
    <h3 class="section-header__subtitle">
      {{ subtitle }}
    </h3>
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
  @apply bg-gradient-to-r from-[#60A5FA] to-white/[.7] bg-clip-text text-5xl font-black text-transparent py-3;
}

@screen lg {
  .section-header__title {
    @apply text-6xl;
  }
}

.section-header__subtitle {
  @apply text-2xl font-light text-white;
}

@screen md {
  .section-header__subtitle {
    @apply mt-2 text-3xl;
  }
}

@screen lg {
  .section-header__subtitle {
    @apply mt-2 text-4xl;
  }
}
</style>
