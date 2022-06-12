<template>
  <section class="grid grid-cols-1 items-center justify-items-center md:grid-cols-2">
    <HeroAnimation class="hidden md:flex" />
    <div class="mx-auto text-center md:text-left">
      <HeroTitle />
      <HeroSubtitle />
      <Button class="mt-12" theme="3dimension" @click="handleClick"> Contacto </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "@components/shared/Button.vue";
import HeroAnimation from "@components/hero/HeroAnimation.vue";
import HeroTitle from "@components/hero/HeroTitle.vue";
import HeroSubtitle from "@components/hero/HeroSubtitle.vue";

function handleClick() {
  const contactSection = document.getElementById("#contacto");
  window.scrollTo({
    top: contactSection?.offsetTop,
  });
}
</script>
