<template>
  <footer class="mb-16 flex flex-col items-center justify-center gap-4 text-slate-400">
    <h3 class="text-lg md:text-xl">Diseñado en <span>Figma</span> y desarrollado con <span>Vuejs</span></h3>
    <a href="https://www.github.com/manusanchev" target="_blank">
      <GithubIcon class="h-10 w-10 md:w-14 md:h-14 hover:text-slate-300" />
    </a>
    <i class="italic text-lg">manusanchev &copy; {{ new Date().getFullYear() }}</i>
  </footer>
</template>

<script setup lang="ts">
import GithubIcon from "@components/icons/GithubIcon.vue";
</script>

<style scoped>
span {
  @apply text-blue-400;
}
</style>
