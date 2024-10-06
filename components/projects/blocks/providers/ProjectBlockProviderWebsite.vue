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
        class="text-sm bg-[#272727] px-2 py-1 flex items-center gap-x-1 max-w-fit rounded-lg lg:hover:bg-[#303030] lg:transition-colors "
        target="_blank"
    >
      {{ t("Title") }}
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </NuxtLink>

</template>

<i18n>
{
  "es": {
    "Title": "Ver proyecto"
  },
  "en": {
    "Title": "View project"
  }
}
</i18n>
