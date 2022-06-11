<template>
  <nav>
    <ul
      class="text-white flex flex-col gap-11 mt-[35px] ml-[25px] md:flex-row md:items-center md:gap-6 md:mt-0 md:ml-0"
    >
      <li
        class="text-4xl font-extrabold md:text-lg lg:text-xl md:font-bold md:hover:border-b-2 md:hover:border-[#4D9BFB]"
        v-for="(item, index) in navbarItems"
        :key="index"
        @click="$emit('closeMenuFullScreen')"
      >
        <a :href="`#${item.text.toLowerCase().replace(' ', '-')}`">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { NavbarItemsData as navbarItems } from "@data/NavbarItemsData";
</script>
