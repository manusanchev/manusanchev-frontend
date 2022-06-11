<template>
  <button
    @click="$emit('click')"
    type="button"
    :class="`button__theme--${theme}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  theme: "3dimension" | "outlined";
}

const { theme = "3dimension" } = defineProps<Props>();
</script>

<style scoped>
.button__theme--3dimension {
  @apply text-white px-10 py-2 font-medium text-xl;
  @apply bg-gradient-to-r from-[#79B0E3]/[.78] via-[#A07DEB]/[.57] to-[#F35370]/[.87];
  box-shadow: 6px 6px 0 rgba(168, 69, 144, 0.71);
  transition: box-shadow 0.3s;
}

@screen md {
  .button__theme--3dimension {
    box-shadow: none;
  }

  .button__theme--3dimension:hover {
    transition: box-shadow 0.3s;
    box-shadow: 6px 6px 0 rgba(168, 69, 144, 0.71);
  }
}
</style>
