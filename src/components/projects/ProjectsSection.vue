<template>
  <section>
    <SectionHeader title="Proyectos" subtitle="Proyectos en los que trabajo" />
    <ProjectsItemsList>
      <ProjectsItem
        v-for="(item, index) in projectsData"
        :key="index"
        :item="item"
        @click="handleShowItem"
      />
      <p
        v-if="projectsDataArray.length <= 3"
        class="bg-gradient-to-r from-[#6BB8FF] to-[#D04EDB] bg-clip-text text-center text-lg italic text-transparent underline md:text-2xl"
      >
        Pronto aparecerán más proyectos por aquí
      </p>
    </ProjectsItemsList>
    <SectionToggleButtons
      v-if="projectsDataArray.length > 3"
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
import ProjectsItemsList from "@components/projects/ProjectsItemsList.vue";
import SectionToggleButtons from "@components/shared/SectionToggleButtons.vue";

import { IProjectSectionItem, SectionNameData } from "@src/types";
import usePaginateItems from "@src/composables/PaginateItems";
import useScrollToSection from "@src/composables/ScrollToSection";

const pageNumber = ref<number>(0);
const isLastPage = ref(false);
const pageSize = 3;

const projectsDataArray = inject<IProjectSectionItem[]>(SectionNameData.projectsSectionData);
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

function handleShowItem() {}
</script>
