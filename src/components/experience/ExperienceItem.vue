<template>
  <a :href="item.link" target="_blank" class="experience-item p-4 md:cursor-pointer">
    <div class="flex items-center gap-2">
      <h4 class="text-2xl font-bold text-white lg:text-3xl">{{ item.techName }}</h4>
      <ArrowRightIcon
        class="experience-item__arrow invisible h-4 w-4 fill-current text-white xl:h-5 xl:w-5"
      />
    </div>
    <p class="mt-2 text-slate-400 lg:text-lg xl:text-xl" v-html="item.summary" />
  </a>
</template>

<script setup lang="ts">
import ArrowRightIcon from "@components/icons/ArrowRightIcon.vue";
import { IExperienceSectionItem } from "@src/types";

defineProps<{
  item: IExperienceSectionItem;
}>();
</script>

<style scoped>
@screen md {
  .experience-item {
    @apply border border-transparent;
  }

  .experience-item:hover .experience-item__arrow {
    @apply visible;
  }

  .experience-item {
    @apply rounded bg-slate-900;
    position: relative;
  }

  .experience-item:hover::after {
    @apply bg-gradient-to-l from-[#504DE5] to-[#D04EDB]/[.85];
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
  }
}
</style>

<style>
.span-experience {
  @apply text-blue-400;
}
</style>
