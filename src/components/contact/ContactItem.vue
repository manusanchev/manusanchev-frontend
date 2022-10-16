<template>
  <div class="contact-item">
    <component class="contact-item__icon" :is="contactIconMap.get(item.contactType)" />
    <div>
      <a
        :href="item.url"
        :title="item.url"
        target="_blank"
        :data-screen-name="item.additionalData"
        class="contact-item__link"
      >
        Enviar mensaje
      </a>
      <p class="contact-item__hint" v-html="item.hintTime" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactIconMap, ContactSectionItem } from "@services/portfolio/types/ContactSectionItem";

defineProps<{
  item: ContactSectionItem;
}>();
</script>

<style scoped>
.contact-item {
  @apply mx-auto flex items-end gap-4;
}

.contact-item__icon {
  @apply h-16 w-16 fill-current text-white;
}

@screen md {
  .contact-item__icon {
    @apply h-20 w-20;
  }
}

.contact-item__link {
  @apply block rounded border border-white py-1.5 text-center text-white;
}

@screen md {
  .contact-item__link {
    @apply text-lg;
  }

  .contact-item__link:hover {
    @apply bg-white text-slate-900;
  }
}

.contact-item__hint {
  @apply text-white;
}

@screen md {
  .contact-item__hint {
    @apply text-lg;
  }
}

:global(.contact-hint) {
  @apply text-blue-400;
}
</style>
