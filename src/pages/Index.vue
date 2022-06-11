<template>
  <Header />
  <div class="py-32 w-11/12 mx-auto md:w-full xl:max-w-[120rem]">
    <HeroSection class="md:mt-20" />
    <AboutSection id="sobre-mi" />
  </div>
</template>

<script setup lang="ts">
import Header from "@components/header/Header.vue";
import HeroSection from "@components/hero/HeroSection.vue";
import AboutSection from "@components/about/AboutSection.vue";
</script>
