<template>
  <Header />
  <div class="mx-auto w-11/12 py-32 md:w-full xl:max-w-[120rem]">
    <HeroSection class="md:mt-20" />
    <AboutSection :id="navbarAnchorLinkSections.aboutSection" />
    <ExperienceSection :id="navbarAnchorLinkSections.experienceSection" />
    <ProjectsSection :id="navbarAnchorLinkSections.projectsSection" />
  </div>
</template>

<script setup lang="ts">
import Header from "@components/header/Header.vue";
import HeroSection from "@components/hero/HeroSection.vue";
import AboutSection from "@components/about/AboutSection.vue";
import ExperienceSection from "@components/experience/ExperienceSection.vue";
import ProjectsSection from "@components/projects/ProjectsSection.vue";
import { navbarAnchorLinkSections } from "@data/NavbarItemsData";
</script>
