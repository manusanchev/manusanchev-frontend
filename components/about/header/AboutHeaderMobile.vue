<template>
  <div class="fixed bottom-8 left-4 backdrop-blur bg-white/30 p-3 right-4 rounded-lg border border-white/20 shadow-xl shadow-white/10">
    <div class="flex items-center justify-around">
      <NuxtLink aria-label="github" href="https://github.com/manusanchev" target="_blank">
        <GithubIcon class="w-5 h-5" />
      </NuxtLink>
      <ClientOnly fallbackTag="div">
          <NuxtLink aria-label="email" href="mailto:manuvempleo@gmail.com" target="_blank">
            <EmailIcon class="w-5 h-5"  />
          </NuxtLink>
        <template #fallback>
            <EmailIcon class="w-5 h-5" />
        </template>
      </ClientOnly>
      <NuxtLink aria-label="linkedin" href="https://www.linkedin.com/in/manusanchev/" target="_blank">
        <LinkednIcon class="w-5 h-5" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import GithubIcon from "~/components/shared/icons/GithubIcon.vue";
import EmailIcon from "~/components/shared/icons/EmailIcon.vue";
import LinkednIcon from "~/components/shared/icons/LinkednIcon.vue";
</script>