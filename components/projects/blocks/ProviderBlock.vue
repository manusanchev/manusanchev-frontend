<script lang="ts" setup>
import type { PropType } from "@vue/runtime-core";
import type { ProviderBlockParams } from "~/types/projects/blocks/ProviderBlockParams";
import { ProviderName } from "~/types/projects/blocks/ProviderBlockParams";
import ProjectBlockProviderGithub from "~/components/projects/blocks/providers/ProjectBlockProviderGithub.vue";
import ProjectBlockProviderNPM from "~/components/projects/blocks/providers/ProjectBlockProviderNPM.vue";
import ProjectBlockProviderWebsite from "~/components/projects/blocks/providers/ProjectBlockProviderWebsite.vue";

defineProps({
  params: { type: Array as PropType<ProviderBlockParams[]>, required: true },
});

const providerType = new Map<ProviderName, any>([
  [ProviderName.Github, ProjectBlockProviderGithub],
  [ProviderName.Npm, ProjectBlockProviderNPM],
  [ProviderName.Website, ProjectBlockProviderWebsite],
]);

function getComponentByType(type: ProviderName) {
  return providerType.get(type);
}
</script>

<template>
  <div class="flex items-center gap-x-3 mb-2">
    <component v-for="(provider, index) in params" :key="index" :is="getComponentByType(provider.name)" :url="provider.url" />
  </div>

</template>
