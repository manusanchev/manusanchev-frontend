<template>
  <nav>
    <ul class="header-navbar-items__list">
      <li
        class="header-navbar-items__item"
        v-for="(item, index) in navbarItemsData"
        :key="index"
        @click="$emit('closeMenuFullScreen')"
      >
        <a href="#" @click="useScrollToSection(item)">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { NavbarItem } from "@services/portfolio/types/NavbarItemsData";
import useScrollToSection from "@composables/ScrollToSection";

defineProps<{
  navbarItemsData: NavbarItem[];
}>();
</script>

<style scoped>
.header-navbar-items__list {
  @apply mt-[35px] ml-[25px] flex flex-col gap-11 text-white;
}

@screen md {
  .header-navbar-items__list {
    @apply mt-0 ml-0 flex-row items-center gap-6;
  }
}

.header-navbar-items__item {
  @apply text-4xl text-white;
}

@screen md {
  .header-navbar-items__item:hover {
    @apply text-gray-100 ;
  }

  .header-navbar-items__item {
    @apply text-[#abacaf] transition-all;
    transition-duration: 250ms;
    @apply text-base;
  }
}
</style>
