<template>
  <button
    class="border border-gray-500 rounded-full px-1 "
    :class="{ 'flex flex-col gap-y-1 justify-center': !convertToClose }"
  >
    <hr class="border-t-gray-400 w-full transition-all" :class="{ 'rotate-45': convertToClose }" />
    <hr class="border-t-gray-400 w-full transition-all" :class="{ '-rotate-45': convertToClose }" />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  convertToClose: { type: Boolean, required: true },
});
</script>
