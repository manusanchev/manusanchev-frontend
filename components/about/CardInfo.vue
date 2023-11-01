<script lang="ts" setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
<template>
  <article
    class="p-[1px] rounded-lg bg-gradient-to-r from-[#EA4949]/40 to-[#838EF3]/50"
  >
    <div class="bg-black rounded-lg p-3">
      <h2 class="font-black tracking-widest text-2xl lg:text-3xl stroke mb-2">
        {{ title }}
      </h2>
      <p class="lg:text-lg">{{ description }}</p>
      <div>
        <slot />
      </div>
    </div>
  </article>
</template>

<style scoped>
.stroke {
  @apply text-black;
  -webkit-text-stroke: 0.075rem white;
}
</style>
