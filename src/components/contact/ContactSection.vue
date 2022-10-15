<template>
  <section>
    <SectionHeader title="Contacto" subtitle="¿Empezamos a hablar?" />
    <ItemsListLayout class="gap-16 md:gap-20">
      <ContactItem v-for="(item, index) in contactData" :item="item" :key="index" />
    </ItemsListLayout>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@components/shared/SectionHeader.vue";
import ItemsListLayout from "@components/shared/ItemsListLayout.vue";
import { ContactSectionItem } from "@src/services/portfolio/types/ContactSectionItem";
import ContactItem from "@components/contact/ContactItem.vue";
import usePortfolioService from "@src/composables/PortfolioService";

const portfolioService = usePortfolioService();
const contactData: ContactSectionItem[] = await portfolioService.getContactData();
</script>
