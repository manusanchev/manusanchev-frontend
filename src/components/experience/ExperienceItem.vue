<template>
  <a :href="item.link" target="_blank" class="experience-item">
    <div class="experience-item__container">
      <h4 class="experience-item__tech">{{ item.techName }}</h4>
      <ArrowRightIcon class="experience-item__arrow" />
    </div>
    <p class="experience-item__summary" v-html="item.summary" />
  </a>
</template>

<script setup lang="ts">
import ArrowRightIcon from "@components/icons/ArrowRightIcon.vue";
import { ExperienceSectionItem } from "@services/portfolio/types/ExperienceSectionItem";

defineProps<{
  item: ExperienceSectionItem;
}>();
</script>

<style scoped>
.experience-item {
  @apply p-4;
}

@screen md {
  .experience-item {
    @apply relative rounded border border-transparent bg-black cursor-pointer;
  }

  .experience-item:hover .experience-item__arrow {
    @apply visible;
  }

  .experience-item:hover::after {
    @apply absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#504DE5] to-[#D04EDB]/[.85];
    content: "";
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
  }
}

.experience-item__container {
  @apply flex items-center gap-2;
}

.experience-item__tech {
  @apply text-2xl font-bold text-white;
}

@screen lg {
  .experience-item__tech {
    @apply text-3xl;
  }
}

.experience-item__arrow {
  @apply invisible h-4 w-4 fill-current text-white;
}

@screen xl {
  .experience-item__arrow {
    @apply h-5 w-5;
  }
}

.experience-item__summary {
  @apply mt-2 text-slate-400;
}

@screen lg {
  .experience-item__summary {
    @apply text-lg;
  }
}

@screen xl {
  .experience-item__summary {
    @apply text-xl;
  }
}

:global(.span-experience) {
  @apply text-blue-400;
}
</style>
