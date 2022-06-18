<template>
  <Header />
  <main class="mx-auto w-11/12 py-32 md:w-full md:py-48 xl:max-w-[120rem]">
    <HeroSection />
    <AboutSection :id="NavbarSectionName.aboutSection" />
    <ExperienceSection :id="NavbarSectionName.experienceSection" />
    <ProjectsSection :id="NavbarSectionName.projectsSection" />
    <BlogSection :id="NavbarSectionName.blogSection" />
    <ContactSection :id="NavbarSectionName.contactSection" />
  </main>
  <PolicyBanner v-if="showBanner" @close-banner="closeBannerPolicy" />
  <Footer />
</template>

<script setup lang="ts">
import Header from "@components/header/Header.vue";
import HeroSection from "@components/hero/HeroSection.vue";
import AboutSection from "@components/about/AboutSection.vue";
import ExperienceSection from "@components/experience/ExperienceSection.vue";
import ProjectsSection from "@components/projects/ProjectsSection.vue";
import { NavbarSectionName } from "@src/types";
import BlogSection from "@components/blog/BlogSection.vue";
import ContactSection from "@components/contact/ContactSection.vue";
import Footer from "@components/footer/Footer.vue";
import PolicyBanner from "@components/generic/PolicyBanner.vue";
import { onBeforeMount, ref } from "vue";
import useCookie from "@src/composables/Cookie";

const { setCookie, getCookie } = useCookie("policyBannerAccepted");
const showBanner = ref<boolean>(false);

onBeforeMount(() => {
  const cookie = getCookie();

  if (!cookie) {
    showBanner.value = true;
  }
});

function closeBannerPolicy() {
  const cookie = setCookie(true);
  if (cookie) {
    showBanner.value = false;
  }
}
</script>
