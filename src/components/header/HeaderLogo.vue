<template>
  <a href="#" class="header-logo"> Manuel Sánchez </a>
</template>

<style scoped>
.header-logo {
  @apply bg-gradient-to-r from-[#4EA1ED] to-[#FEFDFF] bg-clip-text text-2xl font-extrabold text-transparent;
}

@screen xl {
  .header-logo {
    @apply text-3xl;
  }
}
</style>
