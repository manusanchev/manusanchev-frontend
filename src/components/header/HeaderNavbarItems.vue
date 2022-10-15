<template>
  <nav>
    <ul
      class="mt-[35px] ml-[25px] flex flex-col gap-11 text-white md:mt-0 md:ml-0 md:flex-row md:items-center md:gap-6"
    >
      <li
        class="text-4xl font-extrabold md:text-lg md:font-bold md:hover:border-b-2 md:hover:border-[#4D9BFB] lg:text-xl"
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
import { NavbarItem } from "@src/services/portfolio/types/NavbarItemsData";
import useScrollToSection from "@src/composables/ScrollToSection";

defineProps<{
  navbarItemsData: NavbarItem[];
}>();
</script>
