<script lang="ts" setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
<template>
  <article
    class="p-[1px] rounded-lg bg-gradient-to-r from-[#EA4949]/40 to-[#838EF3]/50 shadow"
  >
    <div class="bg-black rounded-lg p-3">
      <h2 class="font-semibold text-2xl lg:text-2xl mb-2">
        {{ title }}
      </h2>
      <p class="lg:text-lg">{{ description }}</p>
      <div>
        <slot />
      </div>
    </div>
  </article>
</template>