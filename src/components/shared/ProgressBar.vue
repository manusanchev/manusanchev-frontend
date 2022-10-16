<template>
  <div ref="progress" class="progress-bar" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

onMounted(() => {
  document.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", onScroll);
});

const progress = ref<HTMLElement>();

function onScroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progress.value!.style.width = scrolled + "%";
}
</script>

<style scoped>
.progress-bar {
  @apply fixed z-10 h-[0.1rem] bg-white bg-gradient-to-r from-[#4EA1ED] via-[#6A94FF] to-[#F35370]/[.87];
}
</style>
