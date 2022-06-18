<template>
  <div
    class="hero_animation--green animate-spin--custom relative rounded-full md:h-[20rem] md:w-[20rem] lg:h-[30rem] lg:w-[30rem] xl:h-[35rem] xl:w-[35rem]"
  >
    <div
      class="hero_animation--blue rounded-full md:h-[12rem] md:w-[12rem] lg:h-[20rem] lg:w-[20rem] xl:h-[25rem] xl:w-[25rem]"
    />
    <div
      class="hero_animation--pink rounded-full md:h-[15rem] md:w-[15rem] lg:h-[25rem] lg:w-[20rem] xl:h-[25rem] xl:w-[25rem]"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.hero_animation--blue {
  @apply absolute right-4 top-44;
  background: radial-gradient(50% 50% at 50% 50%, #2095d7 0%, rgba(133, 121, 206, 0) 100%);
}

.hero_animation--green {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(121, 206, 186, 0.81) 0%,
    rgba(121, 206, 186, 0) 100%
  );
}

.hero_animation--pink {
  @apply absolute right-0 top-0;
  background: radial-gradient(50% 50% at 50% 50%, #ce79a2 0%, rgba(206, 121, 167, 0) 100%);
}

.animate-spin--custom {
  animation: spin 9s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
