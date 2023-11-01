<script setup lang="ts">
import type { PropType } from "@vue/runtime-core";
import type { ImageBlockParams } from "~/types/projects/blocks/ImageBlockParams";

defineProps({
  params: { type: Object as PropType<ImageBlockParams>, required: true },
});
</script>
<template>
  <NuxtImg class="rounded-lg mb-4 object-cover" width="700" height="500" :src="`/images${params.url}`" :alt="params.alt" />
</template>
