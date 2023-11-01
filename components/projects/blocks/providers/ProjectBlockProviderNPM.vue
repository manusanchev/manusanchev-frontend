<script setup lang="ts">
import NpmIcon from "~/components/shared/icons/NpmIcon.vue";

defineProps({
  url: { type: String, required: true },
});
</script>
<template>
  <NuxtLink
    :href="url"
    class="bg-gray-200 text-sm font-semibold text-black px-2 py-1 flex items-center gap-x-2 max-w-fit rounded-lg lg:hover:bg-gray-300 lg:transition-colors"
    target="_blank"
  >
    <NpmIcon class="w-4 h-4" />
    npm
  </NuxtLink>
</template>
