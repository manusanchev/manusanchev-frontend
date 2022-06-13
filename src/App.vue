<template>
  <Header />
  <main class="mx-auto w-11/12 py-32 md:w-full xl:max-w-[120rem]">
    <HeroSection />
    <AboutSection :id="SectionName.aboutSection" />
    <ExperienceSection :id="SectionName.experienceSection" />
    <ProjectsSection :id="SectionName.projectsSection" />
  </main>
</template>

<script setup lang="ts">
import Header from "@components/header/Header.vue";
import HeroSection from "@components/hero/HeroSection.vue";
import AboutSection from "@components/about/AboutSection.vue";
import ExperienceSection from "@components/experience/ExperienceSection.vue";
import ProjectsSection from "@components/projects/ProjectsSection.vue";
import { SectionName } from "@src/types";
import { provide } from "vue";
import { Api } from "@src/api/Api";

const api = new Api();
provide("experienceData", api.fetchExperienceData());
provide("aboutMeData", api.fetchAboutMeData());
provide("navbarData", api.fetchNavbarData());
provide("projectsData", api.fetchProjectsData());

</script>
