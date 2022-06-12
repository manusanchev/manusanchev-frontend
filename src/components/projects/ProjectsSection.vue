<template>
  <section>
    <SectionHeader title="Proyectos" subtitle="Proyectos en los que trabajo" />
    <div class="flex flex-col gap-8">
      <ProjectsItem v-for="(item, index) in projectsData" :key="index" :item="item" />
    </div>

  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import ProjectsItem from "@components/projects/ProjectsItem.vue";
import { projectsData } from "@data/ProjectsData";
</script>
