<template>
  <h2 class="hero-subtitle">
    Dedico mi tiempo a desarrollar aplicaciones web que aporten a la sociedad con las ultimas
    tecnologías y siguiendo en todo momento buenas prácticas en el desarrollo
  </h2>
</template>

<style scoped>
.hero-subtitle {
  @apply mt-4 text-base text-gray-400 font-normal;
}

@screen md {
  .hero-subtitle {
    @apply mr-12 text-xl;
  }
}

@screen xl {
  .hero-subtitle {
    @apply mr-60;
  }
}
</style>