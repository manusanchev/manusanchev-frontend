<template>
  <Transition name="header-menu-mobile-transition">
    <div v-if="show" class="fixed h-screen w-full overflow-hidden bg-slate-800">
      <CloseIcon
        class="ml-auto mr-5 mt-5 h-10 w-10 fill-current text-white"
        @click="$emit('closeMenuFullScreen')"
      />
      <HeaderNavbarItems
        :navbar-items-data="navbarItemsData"
        @close-menu-fullScreen="$emit('closeMenuFullScreen')"
      />
    </div>
  </Transition>
</template>
<script setup lang="ts">
import CloseIcon from "@components/icons/CloseIcon.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";
import { NavbarItem } from "@src/services/portfolio/types/NavbarItemsData";

defineProps<{
  navbarItemsData: NavbarItem[];
  show: boolean;
}>();
</script>



<style scoped>
.header-menu-mobile-transition-enter-active,
.header-menu-mobile-transition-leave-active {
  transition: all 0.4s ease-out;
}

.header-menu-mobile-transition-enter-from,
.header-menu-mobile-transition-leave-to {
  transform: translateX(100%);
}
</style>