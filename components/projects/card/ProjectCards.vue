<script setup lang="ts">
import type { ProjectData } from "~/types/projects/ProjectData";
import ProjectCardItem from "~/components/projects/card/ProjectCardItem.vue";

const { locale } = useI18n();

const { data } = await useAsyncData(() => {
  return queryContent<ProjectData>("projects")
    .locale(locale.value)
    .sort({ sortDate: -1 })
    .find();
});
</script>
<template>
  <section class="flex flex-col gap-y-8 lg:gap-y-14 mt-4 lg:mt-[2rem] mb-10">
    <ProjectCardItem
      v-for="(project, index) in data"
      :key="index"
      :project="project"
    />
  </section>
</template>
