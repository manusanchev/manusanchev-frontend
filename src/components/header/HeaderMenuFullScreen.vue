<template>
  <div class="fixed h-screen w-full overflow-hidden bg-slate-800">
    <CloseIcon
      class="ml-auto mr-5 mt-5 h-10 w-10 fill-current text-white"
      @click="$emit('closeMenuFullScreen')"
    />
    <HeaderNavbarItems @close-menu-fullScreen="$emit('closeMenuFullScreen')" />
  </div>
</template>
<script setup lang="ts">
import CloseIcon from "@components/icons/CloseIcon.vue";
import HeaderNavbarItems from "@components/header/HeaderNavbarItems.vue";
</script>

<style>
:root {

}
</style>