<template>
  <div class="pl-4 lg:pl-8 lg:pt-8">
    <p class="font-black text-3xl lg:text-5xl mb-2">Projects I've built over time.</p>
    <p class="text-lg text-gray-300 lg:text-xl">
      at least those that saw the light
    </p>
  </div>
  <ProjectCards />
</template>
<script setup lang="ts">
import ProjectCards from "~/components/projects/card/ProjectCards.vue";
</script>
