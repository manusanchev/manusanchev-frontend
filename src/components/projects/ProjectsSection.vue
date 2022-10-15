<template>
  <section>
    <SectionHeader title="Proyectos" subtitle="Proyectos en los que trabajo" />
    <ItemsListLayout>
      <ProjectsItem v-for="(item, index) in projectsData" :key="index" :item="item" />
      <HintSection v-if="projectsDataArray.length <= pageSize">
        Pronto aparecerán más proyectos por aquí
      </HintSection>
    </ItemsListLayout>
    <SectionToggleButtons
      v-if="projectsDataArray.length > pageSize"
      id="buttonProjects"
      :is-last-page="isLastPage"
      @show-more="handleShowMore"
      @collapse="handleCollapseAll"
    />
  </section>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";

import SectionHeader from "@components/shared/SectionHeader.vue";
import ProjectsItem from "@components/projects/ProjectsItem.vue";
import ItemsListLayout from "@components/shared/ItemsListLayout.vue";
import SectionToggleButtons from "@components/shared/SectionToggleButtons.vue";
import HintSection from "@components/shared/HintSection.vue";

import { ProjectSectionItem } from "@src/services/portfolio/types/ProjectSectionItem";

import usePaginateItems from "@src/composables/PaginateItems";
import useScrollToSection from "@src/composables/ScrollToSection";
import { SectionNameRef } from "@src/services/portfolio/types/SectionNameRef";
import usePortfolioService from "@src/composables/PortfolioService";

const pageNumber = ref<number>(0);
const isLastPage = ref(false);
const pageSize = 3;

const portfolioService = usePortfolioService();
const projectsDataArray: ProjectSectionItem[] = await portfolioService.getProjectsData();

const { items } = usePaginateItems(projectsDataArray, pageNumber, pageSize);
const projectsData = ref(items);

function handleShowMore() {
  const { items, isLastPageReached } = usePaginateItems(projectsDataArray, pageNumber, pageSize);
  projectsData.value = items;
  isLastPage.value = isLastPageReached.value;

  useScrollToSection(document.getElementById("buttonProjects") as HTMLElement, -20);
}

function handleCollapseAll() {
  pageNumber.value = 1;
  isLastPage.value = false;
  projectsData.value = items;
}
</script>
