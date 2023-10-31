<template>
  <header class="flex items-center justify-between">
    <div class="relative">
      <h1 class="font-bold text-3xl">
        Manuel <br />
        Sánchez.
      </h1>
      <GradientIcon class="absolute -top-[1rem] h-[8rem] blur-xl -z-10" />
    </div>
    <ContactNav />
  </header>
</template>
<script setup lang="ts">
import GradientIcon from "~/components/shared/icons/GradientIcon.vue";
import ContactNav from "~/components/about/header/contactNav/ContactNav.vue";
</script>
