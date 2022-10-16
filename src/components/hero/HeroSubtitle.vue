<template>
  <p class="hero-subtitle">
    Dedico mi tiempo a desarrollar aplicaciones web que aporten a la sociedad con las ultimas
    tecnologías y siguiendo en todo momento buenas prácticas en el desarrollo
  </p>
</template>

<style scoped>
.hero-subtitle {
  @apply mt-4 text-base font-light text-white;
}

@screen md {
  .hero-subtitle {
    @apply mr-12 text-lg;
  }
}

@screen xl {
  .hero-subtitle {
    @apply mr-60;
  }
}
</style>