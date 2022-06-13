<template>
  <button
    type="button"
    class="base-button"
    :class="`base-button__theme--${theme}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ theme: "3dimension" | "outlined" }>();
</script>

<style scoped>
.base-button {
  @apply font-medium text-white;
  @apply px-10 py-2;
}

.base-button__theme--3dimension {
  @apply bg-gradient-to-r from-[#79B0E3]/[.78] via-[#A07DEB]/[.57] to-[#F35370]/[.87] text-xl;
  box-shadow: 6px 6px 0 rgba(168, 69, 144, 0.71);
  transition: box-shadow 0.3s;
}

@screen md {
  .base-button__theme--3dimension {
    box-shadow: none;
  }

  .base-button__theme--3dimension:hover {
    transition: box-shadow 0.3s;
    box-shadow: 6px 6px 0 rgba(168, 69, 144, 0.71);
  }
}

.base-button__theme--outlined {
  @apply rounded border border-white;
  transition: background-color 0.3s;
}

@screen md {
  .base-button__theme--outlined {
    @apply text-xl;
  }

  .base-button__theme--outlined:hover {
    @apply bg-gray-200 text-slate-900;
    transition: background-color 0.3s;
  }
}
</style>
