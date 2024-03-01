<script setup lang="ts">
import NpmIcon from "~/components/shared/icons/NpmIcon.vue";

defineProps({
  url: { type: String, required: true },
});
</script>
<template>
  <NuxtLink
    :href="url"
    class="bg-[#272727] text-sm px-2 py-1 flex items-center gap-x-2 max-w-fit rounded-lg lg:hover:bg-[#303030] lg:transition-colors"
    target="_blank"
  >
    <NpmIcon class="w-4 h-4" />
    npm
  </NuxtLink>
</template>
