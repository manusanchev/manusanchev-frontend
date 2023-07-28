<template>
  <h1 class="hero-title">
    Desarrollo aplicaciones web
    <span class="hero-title--highlight"> modernas. </span>
  </h1>
</template>

<style scoped>
.hero-title {
  @apply text-[50px] text-gray-100 font-black;
  letter-spacing: -.03em;
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
    @apply text-[90px];
  }
}

.hero-title--highlight {
  @apply bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-transparent;
}
</style>
