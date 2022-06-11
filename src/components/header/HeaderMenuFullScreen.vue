<template>
  <div class="fixed w-full h-screen bg-[#253246] overflow-hidden">
    <CloseIcon
      class="fill-current text-white h-10 w-10 ml-auto mr-5 mt-5"
      @click="$emit('closeMenuFullScreen')"
    />
    <HeaderNavbarItems @close-menu-fullScreen="$emit('closeMenuFullScreen')" />
  </div>
</template>
<script setup lang="ts">
import CloseIcon from "@components/icons/CloseIcon.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";
</script>
