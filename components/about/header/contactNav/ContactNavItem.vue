<template>
  <li
    class="contact flex items-center justify-center w-[2.75rem] h-[2.75rem] border border-white/40 text-white/80 lg:text-white/55 transition lg:hover:border-white lg:hover:text-white rounded-full lg:w-[4.5rem] lg:h-[4.5rem]"
  >
    <slot />
  </li>
</template>
<script setup lang="ts"></script>

<style scoped>
.contact:deep(svg) {
  @apply w-[1.5rem] h-[1.5rem];
}

@screen lg {
  .contact:deep(svg) {
    @apply w-[2.5rem] h-[2.5rem];
  }
}
</style>
