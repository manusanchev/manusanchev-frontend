<template>
  <li
    class="contact flex items-center justify-center w-[2.5rem] h-[2.5rem] border border-gray-500 text-gray-500 transition hover:border-white hover:text-white rounded-full"
  >
    <slot />
  </li>
</template>
<script setup lang="ts">
</script>

<style scoped>
.contact:deep(svg) {
  @apply w-[1.5rem] h-[1.5rem];
}
</style>