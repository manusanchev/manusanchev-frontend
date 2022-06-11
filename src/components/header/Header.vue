<template>
  <header>
    <div
      class="fixed py-5 bg-slate-900 w-full md:py-[40px] flex items-center justify-between px-4 lg:px-24 xl:px-[10rem] z-10"
    >
      <HeaderLogo />
      <BarsIcon
        class="fill-current text-white w-[2.313rem] h-[2.313rem] md:hidden"
        @click="toggleMenu = !toggleMenu"
      />
      <HeaderNavbarItems class="hidden md:flex" />
    </div>
    <Transition name="header-menu">
      <HeaderMenuFullScreen

        v-if="toggleMenu"
        class="md:hidden z-20"
        @close-menu-fullScreen="toggleMenu = false"
      />
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BarsIcon from "@components/icons/BarsIcon.vue";
import HeaderLogo from "@components/header/HeaderLogo.vue";
import HeaderMenuFullScreen from "@components/header/HeaderMenuFullScreen.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";

const toggleMenu = ref(false);
</script>

<style scoped>
.header-menu-enter-active,
.header-menu-leave-active {
  transition: all 0.4s ease-out;
}

.header-menu-enter-from,
.header-menu-leave-to {
  transform: translateX(100%);
}
</style>
