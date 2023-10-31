<template>
  <nav>
    <ul class="flex items-center gap-x-4">
      <ContactNavItem href="https:">
        <NuxtLink href="https://www.linkedin.com/in/manusanchev/" target="_blank">
          <LinkednIcon class="-mt-1" />
        </NuxtLink>
      </ContactNavItem>
      <ContactNavItem>
        <NuxtLink href="https://github.com/manusanchev" target="_blank">
          <GithubIcon />
        </NuxtLink>
      </ContactNavItem>
      <ContactNavItem>
        <NuxtLink href="mailto:manuvempleo@gmail.com" target="_blank">
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
