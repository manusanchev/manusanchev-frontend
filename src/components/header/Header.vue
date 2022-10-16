<template>
  <header>
    <div ref="header" class="header__container">
      <HeaderLogo />
      <BarsIcon class="header-mobile__icon" @click="toggleMenu = !toggleMenu" />
      <HeaderNavbarItems class="header__items" :navbar-items-data="navbarItemsData" />
    </div>
    <HeaderMenuMobile
      :navbar-items-data="navbarItemsData"
      :show="toggleMenu"
      class="header-mobile__menu"
      @close-menu-fullScreen="toggleMenu = false"
    />
    <ProgressBar class="header__progress-bar" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useShadowOnScroll from "@composables/ShadowOnScroll";

import BarsIcon from "@components/icons/BarsIcon.vue";
import HeaderLogo from "@components/header/HeaderLogo.vue";
import HeaderMenuMobile from "@components/header/HeaderMenuMobile.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";
import ProgressBar from "@components/shared/ProgressBar.vue";
import NavbarItemsData, { NavbarItem } from "@services/portfolio/types/NavbarItemsData";

const toggleMenu = ref<boolean>(false);
const header = ref<HTMLElement>();

useShadowOnScroll(header, { shadowColor: "shadow-cyan-500/20", shadowSize: "shadow-lg" });

const navbarItemsData: NavbarItem[] = NavbarItemsData;
</script>

<style scoped>
.header__container {
  @apply fixed z-10 flex w-full items-center justify-between bg-slate-900 py-5 px-4;
}

@screen md {
  .header__container {
    @apply py-[1.5rem];
  }
}

@screen lg {
  .header__container {
    @apply px-24;
  }
}

@screen xl {
  .header__container {
    @apply px-[10rem];
  }
}

.header-mobile__icon {
  @apply h-[2.313rem] w-[2.313rem] fill-current text-white;
}

@screen md {
  .header-mobile__icon {
    @apply hidden;
  }
}

.header__items {
  @apply hidden;
}

@screen md {
  .header__items {
    @apply flex;
  }
}

.header-mobile__menu {
  @apply z-20;
}

@screen md {
  .header-mobile__menu {
    @apply hidden;
  }
}

.header__progress-bar {
  @apply mt-[4.7rem];
}

@screen md {
  .header__progress-bar {
    @apply mt-[5rem];
  }
}
</style>
