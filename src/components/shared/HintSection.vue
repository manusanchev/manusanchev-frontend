<template>
  <p class="hint-section">
    <slot />
  </p>
</template>

<style scoped>
.hint-section {
  @apply bg-gradient-to-r from-[#6BB8FF] to-[#D04EDB] bg-clip-text text-center text-xl italic text-transparent underline;
}

@screen md {
  .hint-section {
    @apply text-2xl;
  }
}
</style>
