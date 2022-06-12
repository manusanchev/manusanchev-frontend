<template>
  <div class="relative">
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full border border-[#6BB8FF] text-xl text-white md:h-[5rem] md:w-[5rem] md:text-2xl lg:h-24 lg:w-24 lg:text-3xl"
    >
      {{ year }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  year: string;
}>();
</script>
