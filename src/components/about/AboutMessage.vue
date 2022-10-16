<template>
  <div class="about-message">
    Continuo formandome y mejorando en el dia a dia para ser un mejor desarrollador web en conceptos
    como arquitectura de software, patrones de diseño, frameworks y testing
  </div>
</template>

<style scoped>
.about-message {
  @apply mx-auto max-w-xl select-none;
  @apply p-4 text-center text-xl text-white;
  @apply border-[5px] border-dashed border-slate-900;
  background: linear-gradient(#0f172a 0 0) padding-box,
    linear-gradient(to right, #ac50ae, #4e8bd6 86%) border-box;
}

@screen lg {
  .about-message {
    @apply max-w-4xl p-8 text-2xl;
  }
}

@screen xl {
  .about-message {
    @apply text-3xl;
  }
}
</style>
