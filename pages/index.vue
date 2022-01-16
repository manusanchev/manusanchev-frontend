<template>
  <div class="ms-home">
    <header class="ms-home-header">
      <h1 class="ms-home-title">Manuel Sánchez</h1>
      <h2 class="ms-home-subtitle">Desarrollador web</h2>
      <div class="ms-home-links">
        <a href="#" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" class="ms-home-icon" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="8" y1="8" x2="8" y2="8.01" />
          <line x1="12" y1="16" x2="12" y2="11" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
        </a>
        <a href="https://github.com/manusanchev" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" class="ms-home-icon" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
        </a>
        <a href="https://mamby.com/u/manueh/posts" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" class="ms-home-icon animate-bounce" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15h15" />
            <path d="M21 19h-15" />
            <path d="M15 11h6" />
            <path d="M21 7h-6" />
            <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
          </svg>
        </a>
      </div>
    </header>
    <footer class="ms-home-footer">
      <p class="ms-home-info"><span class="ms-home-website">manusanchev.com</span> <br> Todos los derechos reservados</p>
    </footer>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped>
.ms-home {
  @apply min-h-screen flex flex-col justify-around items-center;
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
  @apply text-gray-300 flex justify-around mt-4;
}
@screen md {
  .ms-home-links {
    @apply mt-14;
  }
}


.ms-home-info {
  @apply text-sm font-light italic text-gray-300 text-center;
}

@screen md {
  .ms-home-info {
    @apply text-lg;
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