<template>
  <div class="policy-banner">
    <div class="policy-banner__container">
      Este sitio web utiliza cookies para personalizar el contenido y analizar el tráfico con el fin
      de ofrecerle una mejor experiencia. Si continúa navegando se entiende que acepta su uso.
      <div class="policy-banner__close">
        <CloseIcon @click="$emit('close-banner')" class="policy-banner__close-icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@components/icons/CloseIcon.vue";
</script>

<style scoped>
.policy-banner {
  @apply fixed bottom-6 px-[1rem] w-full;
}

@screen md {
  .policy-banner {
    @apply bottom-12;
  }
}

@screen lg {
  .policy-banner {
    @apply px-[5rem];
  }
}

@screen xl {
  .policy-banner {
    @apply px-[10rem];
  }
}

.policy-banner__container {
  @apply relative rounded border border-transparent bg-slate-800 shadow-xl flex items-start p-2 gap-2 text-white;
}

.policy-banner__container::after {
  @apply absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#504DE5] to-[#D04EDB]/[.85];
  content: "";
  z-index: -1;
  margin: -2px;
  border-radius: inherit;
}

@screen md {
  .policy-banner__container {
    @apply gap-4 p-4;
  }
}

@screen lg {
  .policy-banner__container {
    @apply text-lg;
  }
}

@screen xl {
  .policy-banner__container {
    @apply text-xl;
  }
}

.policy-banner__close {
  @apply text-2xl text-white;
}

.policy-banner__close-icon {
  @apply cursor-pointer fill-current text-white;
}
</style>
