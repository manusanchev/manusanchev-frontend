<template>
  <header>
    <div
      ref="header"
      :class="classesScroll"
      class="fixed z-10 flex w-full items-center justify-between bg-slate-900 py-5 px-4 md:py-[1.5rem] lg:px-24 xl:px-[10rem]"
    >
      <HeaderLogo />
      <BarsIcon
        class="h-[2.313rem] w-[2.313rem] fill-current text-white md:hidden"
        @click="toggleMenu = !toggleMenu"
      />
      <HeaderNavbarItems class="hidden md:flex" />
    </div>
    <Transition name="header-menu">
      <HeaderMenuFullScreen
        v-if="toggleMenu"
        class="z-20 md:hidden"
        @close-menu-fullScreen="toggleMenu = false"
      />
    </Transition>
    <ProgressBar class="mt-[4.7rem] md:mt-[5rem]" />
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

import BarsIcon from "@components/icons/BarsIcon.vue";
import HeaderLogo from "@components/header/HeaderLogo.vue";
import HeaderMenuFullScreen from "@components/header/HeaderMenuFullScreen.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";

import ProgressBar from "@components/shared/ProgressBar.vue";

const toggleMenu = ref(false);
const header = ref(null);

onMounted(() => {
  document.addEventListener("scroll", classesScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", classesScroll);
});

function classesScroll() {
  if (window.scrollY === 0) {
    header.value?.classList.remove("shadow-lg");
    header.value?.classList.remove("shadow-cyan-500/20");
  }

  if (header.value && window.scrollY) {
    header.value?.classList.add("shadow-lg");
    header.value?.classList.add("shadow-cyan-500/20");
  }
}
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
