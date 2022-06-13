<template>
  <section>
    <SectionHeader title="Proyectos" subtitle="Proyectos en los que trabajo" />
    <ProjectsItemsList>
      <ProjectsItem v-for="(item, index) in projectsData" :key="index" :item="item" />
    </ProjectsItemsList>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import ProjectsItem from "@components/projects/ProjectsItem.vue";
import ProjectsItemsList from "@components/projects/ProjectsItemsList.vue";
import { inject } from "vue";
import { IProjectSectionItem } from "@src/types";

const projectsData = inject<IProjectSectionItem[]>("projectsData")
</script>
