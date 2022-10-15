<template>
  <div class="mx-auto flex items-end gap-4">
    <component
      class="h-16 w-16 fill-current text-white md:h-20 md:w-20"
      :is="contactIconMap.get(item.contactType)"
    />
    <div>
      <a
        :href="item.url"
        :title="item.url"
        target="_blank"
        :data-screen-name="item.additionalData"
        class="block rounded border border-white py-1.5 text-center text-white hover:bg-white hover:text-slate-900 md:text-lg"
        >Enviar mensaje</a
      >
      <p class="text-white md:text-lg" v-html="item.hintTime" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactIconMap, ContactSectionItem } from "@services/portfolio/types/ContactSectionItem";

defineProps<{
  item: ContactSectionItem;
}>();
</script>

<style>
.contact-hint {
  @apply text-blue-400;
}
</style>
