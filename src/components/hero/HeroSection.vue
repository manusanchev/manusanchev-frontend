<template>
  <section class="hero-section">
    <HeroAnimation class="hero-section__animation" />
    <div class="hero-section__content">
      <HeroTitle />
      <HeroSubtitle />
      <Button class="hero-section__button" theme="shadow" @click="handleClick">
        Contacto
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@components/shared/BaseButton.vue";
import HeroAnimation from "@components/hero/HeroAnimation.vue";
import HeroTitle from "@components/hero/HeroTitle.vue";
import HeroSubtitle from "@components/hero/HeroSubtitle.vue";
import useScrollToSection from "@composables/ScrollToSection";
import { NavbarSectionName } from "@services/portfolio/types/NavbarItemsData";

function handleClick() {
  useScrollToSection(document.getElementById(NavbarSectionName.contactSection) as HTMLElement);
}
</script>

<style scoped>
.hero-section {
  @apply grid grid-cols-1 items-center justify-items-center;
}

@screen md {
  .hero-section {
    @apply grid-cols-2;
  }
}

.hero-section__animation {
  @apply hidden;
}

@screen md {
  .hero-section__animation {
    @apply flex;
  }
}

.hero-section__content {
  @apply mx-auto text-center;
}

@screen md {
  .hero-section__content {
    @apply text-left;
  }
}

.hero-section__button {
  @apply mt-12;
}
</style>
