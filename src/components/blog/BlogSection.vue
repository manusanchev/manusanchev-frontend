<template>
  <section>
    <SectionHeader title="Blog" subtitle="Publico contenido relacionado con lo que aprendo" />
    <ItemsListLayout class="md:mx-auto md:max-w-[40rem]">
      <BlogItem v-for="(item, index) in blogData" :item="item" :key="index" />

      <HintSection v-if="blogDataArray.length <= pageSize">
        Paciencia, estoy escribiendo contenido y pronto lo haré publico aquí
      </HintSection>
      <p
        v-if="blogDataArray.length <= pageSize"
        class="bg-gradient-to-r from-[#6BB8FF] to-[#D04EDB] bg-clip-text text-center text-lg italic text-transparent underline md:text-2xl"
      ></p>
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
import SectionHeader from "@components/shared/SectionHeader.vue";
import ItemsListLayout from "@components/shared/ItemsListLayout.vue";
import SectionToggleButtons from "@components/shared/SectionToggleButtons.vue";
import BlogItem from "@components/blog/BlogItem.vue";
import HintSection from "@components/shared/HintSection.vue";

import usePaginateItems from "@src/composables/PaginateItems";
import useScrollToSection from "@src/composables/ScrollToSection";
import { inject, ref } from "vue";
import { BlogSectionItem } from "@src/services/portfolio/types/BlogSectionItem";
import usePortfolioService from "@src/composables/PortfolioService";

const pageNumber = ref<number>(0);
const isLastPage = ref(false);
const pageSize = 3;

const portfolioService = usePortfolioService();
const blogDataArray: BlogSectionItem[] = await portfolioService.getBlogData();
const { items } = usePaginateItems(blogDataArray, pageNumber, pageSize);
const blogData = ref(items);

function handleShowMore() {
  const { items, isLastPageReached } = usePaginateItems(blogDataArray, pageNumber, pageSize);
  blogData.value = items;
  isLastPage.value = isLastPageReached.value;

  useScrollToSection(document.getElementById("buttonBlog") as HTMLElement, -20);
}

function handleCollapseAll() {
  pageNumber.value = 1;
  isLastPage.value = false;
  blogData.value = items;
}
</script>
