<script setup lang="ts">
import GithubIcon from "~/components/shared/icons/GithubIcon.vue";

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
    class="bg-white/90 text-neutral-800 text-xs px-2 py-1 flex items-center gap-x-2 max-w-fit rounded-lg lg:hover:bg-white lg:transition-colors"
    target="_blank"
    ><GithubIcon class="w-4 h-4" />
    {{ t("Title") }}
  </NuxtLink>
</template>

<i18n>
{
  "es": {
    "Title": "Github"
  },
  "en": {
    "Title": "Github"
  }
}
</i18n>
