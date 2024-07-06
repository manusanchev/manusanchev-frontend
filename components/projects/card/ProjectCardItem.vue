<script lang="ts" setup>
import type { PropType } from "@vue/runtime-core";
import type { ProjectData } from "~/types/projects/ProjectData";
import ImageBlock from "~/components/projects/blocks/ImageBlock.vue";
import VideoBlock from "~/components/projects/blocks/VideoBlock.vue";
import { BlockType } from "~/types/projects/blocks/Block";
import ProviderBlock from "~/components/projects/blocks/ProviderBlock.vue";

defineProps({
  project: { type: Object as PropType<ProjectData>, required: true },
});

const typeComponents = new Map<string, any>([
  [BlockType.Image, ImageBlock],
  [BlockType.Video, VideoBlock],
  [BlockType.Provider, ProviderBlock],
]);

function componentByType(type: BlockType) {
  return typeComponents.get(type);
}
</script>

<template>
  <article>
    <header class="flex items-center gap-x-2">
      <div class="w-2 lg:w-6 h-[0.025rem] bg-white/20" />
      <time class="text-gray-300">{{ project.date }}</time>
    </header>
    <div class="px-4 lg:px-8 mt-4">
      <Component
        v-for="(block, index) in project.blocks"
        :key="index"
        :is="componentByType(block.type)"
        :params="block.params"
      />
      <p class="font-bold mb-1 text-lg lg:text-xl">{{ project.title }}</p>
      <p class="lg:text-lg max-w-[50ch]">{{ project.description }}</p>
    </div>
  </article>
</template>
