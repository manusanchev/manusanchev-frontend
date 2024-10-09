<template>
  <div
    class="fixed bottom-4 left-8 bg-gradient-to-r from-white/30 via-gray-200/20 to-white/30 backdrop-blur-lg border border-white/10 rounded-lg p-3 shadow-lg right-8 shadow-white/10"
  >
    <div class="flex items-center justify-around">
      <NuxtLink
        aria-label="github"
        href="https://github.com/manusanchev"
        target="_blank"
      >
        <GithubIcon class="size-5" />
      </NuxtLink>
      <ClientOnly fallbackTag="div">
        <NuxtLink
          aria-label="email"
          href="mailto:manuvempleo@gmail.com"
          target="_blank"
        >
          <EmailIcon class="size-5" />
        </NuxtLink>
        <template #fallback>
          <EmailIcon class="size-5" />
        </template>
      </ClientOnly>
      <NuxtLink
        aria-label="linkedin"
        href="https://www.linkedin.com/in/manusanchev/"
        target="_blank"
      >
        <LinkednIcon class="size-5" />
      </NuxtLink>
      <div class="w-[1px] h-5 bg-gray-400" />
      <CircleArrowUp class="size-5" @click="scrollToTop" />
    </div>
  </div>
</template>
<script setup lang="ts">
import GithubIcon from "~/components/shared/icons/GithubIcon.vue";
import EmailIcon from "~/components/shared/icons/EmailIcon.vue";
import LinkednIcon from "~/components/shared/icons/LinkednIcon.vue";
import CircleArrowUp from "~/components/shared/icons/CircleArrowUp.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
