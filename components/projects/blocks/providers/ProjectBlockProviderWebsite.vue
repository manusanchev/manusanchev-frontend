<script setup lang="ts">
defineProps({
  url: { type: String, required: true },
});
</script>
<template>
  <NuxtLink
      :href="url"
      class="underline px-2 py-1 flex items-center gap-x-2 max-w-fit hover:text-white text-gray-300"
      target="_blank"
  >
    demo
  </NuxtLink>
</template>
