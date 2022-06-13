<template>
  <Header />
  <main class="mx-auto w-11/12 py-48 md:w-full xl:max-w-[120rem]">
    <HeroSection />
    <AboutSection :id="NavbarSectionName.aboutSection" />
    <ExperienceSection :id="NavbarSectionName.experienceSection" />
    <ProjectsSection :id="NavbarSectionName.projectsSection" />
    <BlogSection :id="NavbarSectionName.blogSection" />
  </main>
</template>

<script setup lang="ts">
import Header from "@components/header/Header.vue";
import HeroSection from "@components/hero/HeroSection.vue";
import AboutSection from "@components/about/AboutSection.vue";
import ExperienceSection from "@components/experience/ExperienceSection.vue";
import ProjectsSection from "@components/projects/ProjectsSection.vue";
import { NavbarSectionName } from "@src/types";
import BlogSection from "@components/blog/BlogSection.vue";


</script>
