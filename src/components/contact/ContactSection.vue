<template>
  <section>
    <SectionHeader title="Contacto" subtitle="¿Empezamos a hablar?" />
    <ItemsListLayout class="contact-section__layout">
      <ContactItem v-for="(item, index) in contactData" :item="item" :key="index" />
    </ItemsListLayout>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import ItemsListLayout from "@components/shared/ItemsListLayout.vue";
import { ContactSectionItem } from "@services/portfolio/types/ContactSectionItem";
import ContactItem from "@components/contact/ContactItem.vue";
import usePortfolioService from "@composables/PortfolioService";

const portfolioService = usePortfolioService();
const contactData: ContactSectionItem[] = await portfolioService.getContactData();
</script>

<style scoped>
.contact-section__layout {
  @apply gap-16;
}

@screen md {
  .contact-section__layout {
    @apply gap-20;
  }
}
</style>
