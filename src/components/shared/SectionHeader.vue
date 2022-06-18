<template>
  <div class="mx-auto mt-[10rem] mb-16 max-w-xl text-center md:mb-28 md:mt-[14rem]">
    <h2
      class="bg-gradient-to-r from-[#60A5FA] to-white/[.7] bg-clip-text text-2xl font-medium text-transparent md:text-[2.5rem] py-3"
    >
      {{ title }}
    </h2>
    <h3 class="text-4xl font-semibold italic text-white md:mt-4 md:text-5xl">
      {{ subtitle }}
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
