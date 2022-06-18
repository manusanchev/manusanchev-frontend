<template>
  <a :href="url" target="_blank" :alt="alt" class="flex items-center gap-2">
    <slot name="icon" />
    <slot name="text" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string;
  alt: string;
}>();
</script>
