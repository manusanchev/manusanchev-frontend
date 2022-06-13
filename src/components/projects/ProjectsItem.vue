<template>
  <div
    class="flex max-w-3xl cursor-pointer justify-between rounded bg-slate-800 p-4 md:mx-auto"
    @click="expand = !expand"
  >
    <div class="h-auto w-[90%]">
      <h4 class="text-lg font-bold text-white md:text-xl">{{ item.title }}</h4>
      <p
        class="mt-4 text-slate-400 md:text-lg"
        :class="{ 'mt-0 truncate overflow-ellipsis whitespace-nowrap': !expand }"
      >
        {{ item.description }}
      </p>
      <div class="flex flex-col gap-2" :class="expand ? 'visible mt-4' : 'invisible h-0'">
        <ProjectsItemLink
          v-if="item.websiteUrl"
          :url="item.websiteUrl"
          :alt="`Enlace al sitio web del proyecto ${item.title}`"
          class="text-blue-400 md:hover:text-blue-300"
        >
          <template #icon> <LinkIcon /></template>
          <template #text> {{ item.websiteUrl }}</template>
        </ProjectsItemLink>
        <ProjectsItemLink
          v-if="item.sourceCodeUrl"
          :url="item.sourceCodeUrl"
          :alt="`Enlace al repositorio de github del proyecto ${item.title}`"
          class="text-gray-300 md:hover:text-white"
        >
          <template #icon> <GithubIcon /></template>
          <template #text> Repositorio de Github</template>
        </ProjectsItemLink>
      </div>
    </div>
    <ArrowDownIcon class="h-10 w-10 fill-current text-white" :class="{ 'rotate-180': expand }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IProjectSectionItem } from "@src/types";
import ArrowDownIcon from "@components/icons/ArrowDownIcon.vue";
import LinkIcon from "@components/icons/LinkIcon.vue";
import GithubIcon from "@components/icons/GithubIcon.vue";
import ProjectsItemLink from "@components/projects/ProjectsItemLink.vue";

const expand = ref<boolean>(false);

defineProps<{
  item: IProjectSectionItem;
}>();
</script>
