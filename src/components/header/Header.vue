<template>
  <header>
    <div
      ref="header"
      class="fixed z-10 flex w-full items-center justify-between bg-slate-900 py-5 px-4 md:py-[1.5rem] lg:px-24 xl:px-[10rem]"
    >
      <HeaderLogo />
      <BarsIcon
        class="h-[2.313rem] w-[2.313rem] fill-current text-white md:hidden"
        @click="toggleMenu = !toggleMenu"
      />
      <HeaderNavbarItems class="hidden md:flex" :navbar-items-data="navbarItemsData" />
    </div>
    <HeaderMenuMobile
      :navbar-items-data="navbarItemsData"
      :show="toggleMenu"
      class="z-20 md:hidden"
      @close-menu-fullScreen="toggleMenu = false"
    />
    <ProgressBar class="mt-[4.7rem] md:mt-[5rem]" />
  </header>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

import { INavbarHeaderSectionItem, SectionNameData } from "@src/types";
import useShadowOnScroll from "@src/composables/ShadowOnScroll";

import BarsIcon from "@components/icons/BarsIcon.vue";
import HeaderLogo from "@components/header/HeaderLogo.vue";
import HeaderMenuMobile from "@components/header/HeaderMenuMobile.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";
import ProgressBar from "@components/shared/ProgressBar.vue";

const toggleMenu = ref<boolean>(false);
const header = ref<HTMLElement>();

useShadowOnScroll(header, { shadowColor: "shadow-cyan-500/20", shadowSize: "shadow-lg" });

const navbarItemsData = inject<INavbarHeaderSectionItem[]>(SectionNameData.headerSectionData);
</script>

