<template>
  <a :href="item.url" target="_blank" class="blog-item">
    <div class="blog-item__content">
      <p class="blog-item__title">{{ item.title }}</p>
      <ArrowRightIcon class="blog-item__icon" />
    </div>
    <p class="blog-item__date">{{ item.date }}</p>
  </a>
</template>

<script setup lang="ts">
import { BlogSectionItem } from "@services/portfolio/types/BlogSectionItem";
import ArrowRightIcon from "@components/icons/ArrowRightIcon.vue";

defineProps<{
  item: BlogSectionItem;
}>();
</script>

<style scoped>
@screen md {
  .blog-item:hover .blog-item__title {
    @apply text-blue-400;
  }
}

.blog-item__content {
  @apply flex cursor-pointer text-white font-semibold items-start text-lg;
}

@screen md {
  .blog-item__content {
    @apply text-xl;
  }
}

.blog-item__title {
  @apply transition-colors;
}

.blog-item__icon {
  @apply flex-shrink-0 fill-current text-blue-400;
}

@screen md {
  .blog-item__icon {
    @apply h-7 w-7;
  }
}

.blog-item__date {
  @apply text-slate-400 text-sm italic select-none;
}
</style>
