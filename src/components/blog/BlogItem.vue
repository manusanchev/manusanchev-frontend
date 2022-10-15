<template>
  <div>
    <a
      :href="item.url"
      target="_blank"
      class="flex cursor-pointer text-white font-semibold items-start md:text-xl text-lg"
    >
      <p class="md:hover:text-blue-400 transition-colors">{{ item.title }}</p>
      <ArrowRightIcon class="md:h-7 md:w-7 flex-shrink-0 fill-current text-blue-400" />
    </a>
    <p class="text-slate-400 text-sm italic select-none">{{ item.date }}</p>
  </div>
</template>

<script setup lang="ts">
import { BlogSectionItem } from "@services/portfolio/types/BlogSectionItem";
import ArrowRightIcon from "@components/icons/ArrowRightIcon.vue";

defineProps<{
  item: BlogSectionItem;
}>();
</script>
