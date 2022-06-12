<template>
  <div
    ref="progress"
    class="fixed z-10 h-[0.1rem] bg-white bg-gradient-to-r from-[#4EA1ED] via-[#6A94FF] to-[#F35370]/[.87]"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

onMounted(() => {
  document.addEventListener("scroll", onscroll);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", onscroll);
});

const progress = ref(null);
function onscroll() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progress.value.style.width = scrolled + "%";
}
</script>
