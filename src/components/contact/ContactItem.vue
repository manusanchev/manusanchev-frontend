<template>
  <div class="mx-auto flex items-end gap-4">
    <component class="h-16 w-16 md:h-20 md:w-20 fill-current text-white" :is="item.icon" />
    <div>
      <a :href="item.url" :alt="item.url" target="_blank" :data-screen-name="item.additionalData" class="block text-center md:text-lg text-white border py-1.5 border-white rounded hover:text-slate-900 hover:bg-white"
        >Enviar mensaje</a
      >
      <p class="text-white md:text-lg" v-html="item.hintTime" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IContactSectionItem } from "@src/types";
defineProps<{
  item: IContactSectionItem;
}>();
</script>

<style>
.contact-hint {
  @apply text-blue-400;
}
</style>
