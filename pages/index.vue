<script setup lang="ts">
import type { ProjectData } from "~/types/projects/ProjectData";

const { data } = await useAsyncData(() =>
  queryContent<ProjectData>("projects").find(),
);
</script>

<template>
  <About class="border-b border-gray-900 pb-[4rem]" />
  <main class="pt-8">
    <Projects />
  </main>
</template>
