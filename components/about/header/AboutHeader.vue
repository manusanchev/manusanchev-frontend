<template>
  <header class="flex items-center justify-between">
    <div class="relative">
      <NuxtLink href="https://manusanchev.com">
        <h1 class="font-black text-3xl lg:text-6xl font-fixel">
          Manuel <br />
          Sánchez.
        </h1>
      </NuxtLink>

      <GradientIcon
        class="absolute -top-[1rem] h-[8rem] blur-xl -z-10 lg:h-[14rem] lg:-right-0"
      />
    </div>
    <ContactNav />
  </header>
</template>
<script setup lang="ts">
import GradientIcon from "~/components/shared/icons/GradientIcon.vue";
import ContactNav from "~/components/about/header/contactNav/ContactNav.vue";
</script>
