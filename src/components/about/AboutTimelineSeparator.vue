<template>
  <div
    class="w-[2px] bg-white bg-gradient-to-b"
    :class="
      index === 0
        ? 'h-[4rem] from-slate-800 to-[#6BB8FF]'
        : 'h-[16rem] bg-[#6BB8FF]'
    "
  />
  <div
      class="w-[2px] h-14 bg-gradient-to-b"
      :class="
            index === data.length - 1
              ? 'h-[8rem] from-[#6BB8FF] to-slate-800 '
              : 'h-14 bg-[#6BB8FF]'
          "
  />
</template>

<script setup lang="ts">
defineProps<{
  index: number;
  dataLength: number;
}>();
</script>
