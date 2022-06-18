<template>
  <a
    :href="item.url"
    target="_blank"
    class="md:hover:bg-slate-700 flex md:min-w-[45rem] cursor-pointer justify-between rounded bg-slate-800 p-4 md:mx-auto text-white font-semibold items-center md:text-2xl text-lg"
  >
    {{ item.title }}
    <ArrowRightIcon class="h-10 w-10 fill-current text-blue-400" />
  </a>
</template>

<script setup lang="ts">
import { IBlogSectionItem } from "@src/types";
import ArrowRightIcon from "@components/icons/ArrowRightIcon.vue";

defineProps<{
  item: IBlogSectionItem;
}>();
</script>
