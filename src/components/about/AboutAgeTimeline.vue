<template>
  <div class="relative">
    <div
      class="w-16 h-16 text-white flex items-center justify-center border rounded-full border-[#6BB8FF] text-xl md:w-[5rem] md:h-[5rem] md:text-2xl lg:w-24 lg:h-24 lg:text-3xl"
    >
      {{ year }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  year: string;
}>();
</script>
