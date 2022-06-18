<template>
  <footer class="mb-16 flex flex-col items-center justify-center gap-4 text-slate-400">
    <h3 class="text-lg md:text-xl">
      Diseñado en <span>Figma</span> y desarrollado con <span>Vuejs</span>
    </h3>
    <i class="text-lg italic">manusanchev &copy; {{ new Date().getFullYear() }}</i>
  </footer>
</template>


<style scoped>
span {
  @apply text-blue-400;
}
</style>
