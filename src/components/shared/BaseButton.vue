<template>
  <button type="button" class="base-button" :class="`base-button__theme--${theme}`">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ theme: "shadow" | "outlined" }>();
</script>

<style scoped>
.base-button {
  @apply px-4 py-2 rounded;
}

.base-button__theme--shadow {
  @apply bg-black border-blue-200 border py-3 px-12 rounded-lg font-medium;
  box-shadow: 0 0 50px 2px #60a6d2;
}
</style>
