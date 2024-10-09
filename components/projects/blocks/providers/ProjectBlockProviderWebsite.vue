<script setup lang="ts">
import GlobeIcon from "~/components/shared/icons/GlobeIcon.vue";

defineProps({
  url: { type: String, required: true },
});

const { t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <NuxtLink
    :href="url"
    class="text-xs bg-white/90 text-neutral-800 px-2 py-1 flex items-center gap-x-1 max-w-fit rounded-lg lg:hover:bg-white lg:transition-colors"
    target="_blank"
  >
    <GlobeIcon class="w-4 h-4" />
    {{ t("Title") }}
  </NuxtLink>
</template>

<i18n>
{
  "es": {
    "Title": "Demo"
  },
  "en": {
    "Title": "Demo"
  }
}
</i18n>
