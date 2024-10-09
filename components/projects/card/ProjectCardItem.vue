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
    <header class="flex items-center gap-x-2 max-w-fit">
      <hr class="w-2 lg:w-6 border-separator" />
      <time class="text-neutral-300 text-sm">{{ project.date }}</time>
    </header>
    <div class="px-4 lg:px-8 mt-4">
      <Component
        v-for="(block, index) in project.blocks"
        :key="index"
        :is="componentByType(block.type)"
        :params="block.params"
      />
      <p class="font-bold text-neutral-200 mb-1 text-lg">{{ project.title }}</p>
      <p class="max-w-[70ch] text-neutral-300 leading-relaxed">
        {{ project.description }}
      </p>
    </div>
  </article>
</template>
