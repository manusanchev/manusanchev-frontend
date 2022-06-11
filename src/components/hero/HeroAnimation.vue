<template>
  <div
    class="md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] xl:w-[35rem] xl:h-[35rem] rounded-full hero_animation--green relative animate-spin--custom"
  >
    <div
      class="md:w-[12rem] md:h-[12rem] lg:w-[20rem] lg:h-[20rem] xl:w-[25rem] xl:h-[25rem] rounded-full hero_animation--blue"
    />
    <div
      class="md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[25rem] xl:w-[25rem] xl:h-[25rem] rounded-full hero_animation--pink"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.hero_animation--blue {
  @apply absolute right-4 top-44;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #2095d7 0%,
    rgba(133, 121, 206, 0) 100%
  );
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
  background: radial-gradient(
    50% 50% at 50% 50%,
    #ce79a2 0%,
    rgba(206, 121, 167, 0) 100%
  );
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
