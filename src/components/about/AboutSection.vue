<template>
  <section>
    <SectionHeader title="Sobre mi" subtitle="Un poco de mi historia" />
    <div class="flex-start flex md:block">
      <AboutTimeline :data="aboutMeData" />
    </div>
    <AboutMessage class="mt-12 md:mt-24" />
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import AboutTimeline from "@components/about/AboutTimeline.vue";
import AboutMessage from "@components/about/AboutMessage.vue";

import { inject } from "vue";
import { IAboutMeSectionItem, SectionNameData } from "@src/types";

const aboutMeData = inject<IAboutMeSectionItem[]>(SectionNameData.aboutSectionData);
</script>
