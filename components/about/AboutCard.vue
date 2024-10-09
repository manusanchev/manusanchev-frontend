<script lang="ts" setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>

<template>
  <article
    class="p-[1px] rounded-lg bg-gradient-to-br lg:bg-gradient-to-r from-gray-300/40 via-gray-500/25 to-gray-600/20 shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div class="bg-[#0a0a0a]/60 rounded-lg p-4">
      <h2 class="text-xl text-white mb-3 pb-1">
        {{ title }}
      </h2>
      <p class="text-base text-neutral-300 leading-relaxed">
        {{ description }}
      </p>
      <div>
        <slot />
      </div>
    </div>
  </article>
</template>
