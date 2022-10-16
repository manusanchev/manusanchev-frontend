<template>
  <h1 class="hero-title">
    Desarrollador de aplicaciones web
    <span class="hero-title--highlight"> modernas </span>
  </h1>
</template>

<style scoped>
.hero-title {
  @apply text-[42px] text-gray-100;
}

@screen md {
  .hero-title {
    @apply text-[50px];
  }
}

@screen lg {
  .hero-title {
    @apply text-[65px];
  }
}

@screen xl {
  .hero-title {
    @apply text-[80px];
  }
}

.hero-title--highlight {
  @apply bg-gradient-to-r from-[#B271DA] via-[#6A94FF] to-[#EFF3FC] bg-clip-text text-transparent;
}
</style>
