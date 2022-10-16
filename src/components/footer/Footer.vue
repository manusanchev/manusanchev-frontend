<template>
  <footer class="footer">
    <h3 class="footer__info">
      Diseñado en <span class="footer-info--highlight">Figma</span> y desarrollado con
      <span class="footer-info--highlight">Vuejs</span>
    </h3>
    <i class="footer__metadata">manusanchev.com &copy; {{ new Date().getFullYear() }}</i>
  </footer>
</template>

<style scoped>
.footer {
  @apply mb-16 flex flex-col items-center justify-center gap-4 text-slate-400;
}

.footer__info {
  @apply text-lg;
}

@screen md {
  .footer__info {
    @apply text-xl;
  }
}

.footer__metadata {
  @apply text-lg italic;
}

.footer-info--highlight {
  @apply text-blue-400;
}
</style>
