<script setup lang="ts">
import GithubIcon from "~/components/shared/icons/GithubIcon.vue";

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
    class="bg-[#31373c] text-sm px-2 py-1 flex items-center gap-x-2 max-w-fit rounded-lg lg:hover:bg-[#49525A] lg:transition-colors"
    target="_blank"
    ><GithubIcon class="w-4 h-4" />
    {{ t("Title") }}
  </NuxtLink>
</template>

<i18n>
{
  "es": {
    "Title": "Ver en Github"
  },
  "en": {
    "Title": "View on Github"
  }
}
</i18n>
