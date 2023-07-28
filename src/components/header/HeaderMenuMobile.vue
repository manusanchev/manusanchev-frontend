<template>
  <div v-if="show" class="header-menu-mobile">
    <HeaderNavbarItems
      :navbar-items-data="navbarItemsData"
      @close-menu-fullScreen="$emit('closeMenuFullScreen')"
    />
  </div>
</template>
<script setup lang="ts">
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";
import { NavbarItem } from "@services/portfolio/types/NavbarItemsData";

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

.header-menu-mobile {
  @apply mt-[4.5rem] fixed h-screen w-full overflow-hidden bg-black;
}

.header-menu-mobile__close-icon {
  @apply ml-auto mr-5 mt-5 h-10 w-10 fill-current text-white;
}
</style>
