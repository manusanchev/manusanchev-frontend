<template>
  <div class="ms-home  animate__animated animate__backInDown">
    <header class="ms-home-header">
      <h1 class="ms-home-title">Manuel Sánchez</h1>
      <h2 class="ms-home-subtitle">Desarrollador web</h2>
      <div class="ms-home-links">
        <NuxtLink to="/">
          <linkedInIcon class="ms-home-icon" />
        </NuxtLink>
        <a href="https://github.com/manusanchev" target="_blank" rel="noopener">
          <githubIcon class="ms-home-icon" />
        </a>
        <a href="https://mamby.com/u/manueh/posts" target="_blank" rel="noopener">
          <blogIcon class="ms-home-icon animate-bounce" />
        </a>
      </div>
    </header>
    <footer class="ms-home-footer">
      <p class="ms-home-info"> © 2022 Manuel Sánchez. Todos los derechos reservados.</p>
      <p class="ms-home-cookies"> Esta página usa cookies</p>
    </footer>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import githubIcon from "~/components/icons/GithubIcon.vue";
import linkedInIcon from "~/components/icons/LinkedInIcon.vue";
import blogIcon from "~/components/icons/BlogIcon.vue";

export default defineComponent({
  components: {githubIcon, linkedInIcon, blogIcon}
})
</script>

<style scoped>
.ms-home {
  @apply h-screen flex flex-col justify-around items-center;
}

.ms-home-header {
@apply text-center;
}

.ms-home-title {
  @apply text-4xl font-bold text-white;
}

@screen md {
  .ms-home-title {
    @apply text-7xl;
  }
}
@screen lg {
  .ms-home-title {
    @apply text-9xl;
  }
}
.ms-home-subtitle {
  @apply text-3xl text-gray-300;
}
@screen md {
  .ms-home-subtitle {
    @apply text-6xl;
  }
}
@screen lg {
  .ms-home-subtitle {
    @apply text-8xl;
  }
}

.ms-home-links {
  @apply text-gray-300 flex justify-around mt-8;
}
@screen md {
  .ms-home-links {
    @apply mt-14;
  }
}

.ms-home-footer {
  @apply text-center
}

.ms-home-info {
  @apply text-sm font-light italic text-gray-300 ;
}

@screen md {
  .ms-home-info {
    @apply text-base;
  }
}
.ms-home-cookies {
  @apply text-xs font-bold text-gray-400;
}

@screen md {
  .ms-home-cookies {
    @apply text-sm;
  }
}

@screen md {
  .ms-home-icon {
    @apply h-14 w-14;
  }
}
@screen lg {
  .ms-home-icon {
    @apply h-20 w-20;
  }
}

</style>