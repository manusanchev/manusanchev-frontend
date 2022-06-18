<template>
  <div class="fixed bottom-6 px-[1rem] md:bottom-12 w-full lg:px-[5rem] xl:px-[10rem]">
    <div class="banner flex items-start p-2 gap-2 md:gap-4 md:p-4 lg:text-lg xl:text-xl text-white">
      <p>
        Este sitio web utiliza cookies para personalizar el contenido y analizar el tráfico con el
        fin de ofrecerle una mejor experiencia. Si continúa navegando se entiende que acepta su uso.
      </p>
      <div class="text-2xl text-white">
        <CloseIcon @click="$emit('close-banner')" class="cursor-pointer fill-current text-white" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@components/icons/CloseIcon.vue";
</script>

<style scoped>
.banner {
  @apply relative rounded border border-transparent bg-slate-800 shadow-xl;
}

.banner::after {
  @apply absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#504DE5] to-[#D04EDB]/[.85];
  content: "";
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
}
</style>
