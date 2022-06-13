<template>
  <div class="flex justify-center">
    <Button v-if="isLastPage" class="mt-12" theme="outlined" @click="$emit('collapse')">
      Colapsar
    </Button>
    <Button v-else class="mt-12" theme="outlined" @click="$emit('show-more')"> Ver más </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@components/shared/BaseButton.vue";

defineProps<{ isLastPage: boolean }>();
</script>
