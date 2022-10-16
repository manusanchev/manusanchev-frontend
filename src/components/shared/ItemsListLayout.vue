<template>
  <div class="items-list-layout">
    <slot />
  </div>
</template>

<style scoped>
.items-list-layout {
  @apply flex flex-col gap-8;
}
</style>
