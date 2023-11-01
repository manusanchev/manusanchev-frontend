<script setup lang="ts">
import type { PropType } from "@vue/runtime-core";
import type { VideoBlockParams } from "~/types/projects/blocks/VideoBlockParams";

defineProps({
  params: { type: Object as PropType<VideoBlockParams>, required: true },
});
</script>
<template>
  <video
    width="600"
    height="600"
    class="rounded-lg mb-4 border border-gray-800"
    controls
    :autoplay="params.autoplay"
    :muted="params.autoplay"
    :loop="params.loop"
  >
    <source :src="`/videos${params.url}`" type="video/webm" />
  </video>
</template>
