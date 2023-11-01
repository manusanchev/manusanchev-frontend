<template>
  <nav>
    <ul class="flex items-center gap-x-4">
      <ContactNavItem href="https:">
        <NuxtLink aria-label="linkedin" href="https://www.linkedin.com/in/manusanchev/" target="_blank">
          <LinkednIcon class="-mt-1" />
        </NuxtLink>
      </ContactNavItem>
      <ContactNavItem>
        <NuxtLink aria-label="github" href="https://github.com/manusanchev" target="_blank">
          <GithubIcon />
        </NuxtLink>
      </ContactNavItem>
      <ContactNavItem>
        <NuxtLink aria-label="email" href="mailto:manuvempleo@gmail.com" target="_blank">
          <EmailIcon />
        </NuxtLink>
      </ContactNavItem>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import LinkednIcon from "~/components/shared/icons/LinkednIcon.vue";
import ContactNavItem from "~/components/about/header/contactNav/ContactNavItem.vue";
import GithubIcon from "~/components/shared/icons/GithubIcon.vue";
import EmailIcon from "~/components/shared/icons/EmailIcon.vue";
</script>
