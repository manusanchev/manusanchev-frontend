<template>
  <div
    class="md:mx-auto flex max-w-3xl cursor-pointer items-center justify-between rounded bg-slate-800 p-4"
    @click="expand"
  >
    <div class="w-[90%]">
      <h4 class="text-lg font-bold text-white">{{ item.title }}</h4>
      <p class="truncate overflow-ellipsis whitespace-nowrap text-slate-400">
        {{ item.description }}
      </p>
    </div>
    <ArrowDown class="h-10 w-10 fill-current text-white" />
  </div>
</template>

<script setup lang="ts">
import { IProjectSectionItem } from "@src/types";
import ArrowDown from "@components/icons/ArrowDown.vue";
import { ref } from "vue";

const expand = ref<boolean>(false);

defineProps<{
  item: IProjectSectionItem;
}>();
</script>
