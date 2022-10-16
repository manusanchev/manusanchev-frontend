<template>
  <section>
    <SectionHeader title="Blog" subtitle="Publico contenido relacionado con lo que aprendo" />
    <ItemsListLayout class="blog-section__layout">
      <BlogItem v-for="(item, index) in blogData" :item="item" :key="index" />
      <HintSection v-if="blogDataArray.length <= pageSize">
        Paciencia, estoy escribiendo contenido y pronto lo haré publico aquí
      </HintSection>
    </ItemsListLayout>
    <SectionToggleButtons
      v-if="blogDataArray.length > pageSize"
      id="buttonBlog"
      :is-last-page="isLastPage"
      @show-more="handleShowMore"
      @collapse="handleCollapseAll"
    />
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SectionHeader from "@components/shared/SectionHeader.vue";
import ItemsListLayout from "@components/shared/ItemsListLayout.vue";
import SectionToggleButtons from "@components/shared/SectionToggleButtons.vue";
import BlogItem from "@components/blog/BlogItem.vue";
import HintSection from "@components/shared/HintSection.vue";

import usePaginateItems from "@composables/PaginateItems";
import { BlogSectionItem } from "@services/portfolio/types/BlogSectionItem";
import usePortfolioService from "@composables/PortfolioService";

const pageNumber = ref<number>(0);
const isLastPage = ref(false);
const pageSize = 3;

const portfolioService = usePortfolioService();
const blogDataArray: BlogSectionItem[] = await portfolioService.getBlogData();

const { items } = usePaginateItems(blogDataArray, pageNumber, pageSize);
const blogData = ref(items);

// TODO reuse this function into composable
function handleShowMore() {
  const { items, isLastPageReached } = usePaginateItems(blogDataArray, pageNumber, pageSize);
  blogData.value = items;
  isLastPage.value = isLastPageReached.value;
}
// TODO reuse this function into composable
function handleCollapseAll() {
  pageNumber.value = 1;
  isLastPage.value = false;
  blogData.value = items;
}
</script>

<style scoped>
@screen md {
  .blog-section__layout {
    @apply mx-auto max-w-[40rem];
  }
}
</style>
