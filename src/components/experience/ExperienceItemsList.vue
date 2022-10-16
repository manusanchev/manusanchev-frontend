<template>
  <div class="experience-items-list">
    <slot />
  </div>
</template>


<style scoped>
.experience-items-list {
  @apply grid grid-cols-1 gap-8 mx-auto ;
}

@screen md {
  .experience-items-list {
    @apply grid-cols-3 max-w-[95%] gap-20;
  }
}

@screen xl {
  .experience-items-list {
    @apply max-w-[75%]
  }
}
</style>