<script setup lang="ts">
import ArrowLeftIcon from "~/components/shared/icons/ArrowLeftIcon.vue";
const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <div class="flex items-center justify-end gap-x-4 mt-4">
    <!--    <p>-->
    <!--      <NuxtLink to="/freelance" class="underline text-cyan-200">See my method</NuxtLink>-->
    <!--    </p>-->
    <NuxtLink
      href="https://linkedin.com/in/manusanchev"
      target="_blank"
      class="bg-[#292828] px-4 py-1 rounded-md lg:hover:bg-[#434242] lg:transition-colors flex items-center gap-x-2"
    >
      {{ t("Button") }} <ArrowLeftIcon />
    </NuxtLink>
  </div>
</template>

<i18n>
{
  "es": {
    "Button": "Contáctame"
  },
  "en": {
    "Button": "Contact me"
  }
}
</i18n>
