<script lang="ts" setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
<template>
  <article
    class="p-[1px] rounded-lg bg-gradient-to-r from-red-300/50 to-[#838EF3]/50 shadow"
  >
    <div class="bg-[#0a0a0a] rounded-lg p-3">
      <h2 class="text-title mb-2 underline decoration-wavy">
        {{ title }}
      </h2>
      <p class="lg:text-lg">{{ description }}</p>
      <div>
        <slot />
      </div>
    </div>
  </article>
</template>