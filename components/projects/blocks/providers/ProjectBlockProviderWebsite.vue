<script setup lang="ts">
defineProps({
  url: { type: String, required: true },
});

const { t } = useI18n({
  useScope: "local"
});
</script>
<template>
  <NuxtLink
      :href="url"
      class="bg-[#272727] text-sm px-2 py-1 flex items-center gap-x-2 max-w-fit rounded-lg lg:hover:bg-[#303030] lg:transition-colors"
      target="_blank"
  >
    {{ t("Title") }}
  </NuxtLink>
</template>

<i18n>
{
  "es": {
    "Title": "Ver Proyecto"
  },
  "en": {
    "Title": "View project"
  }
}
</i18n>
