<template>
  <div class="hero_animation--green animate-spin--custom">
    <div class="hero_animation--blue" />
    <div class="hero_animation--pink" />
  </div>
</template>

<script setup></script>

<style scoped>
.hero_animation--blue {
  @apply absolute right-4 top-44 rounded-full;
  background: radial-gradient(50% 50% at 50% 50%, #2095d7 0%, rgba(133, 121, 206, 0) 100%);
}

@screen md {
  .hero_animation--blue {
    @apply h-[12rem] w-[12rem];
  }
}

@screen lg {
  .hero_animation--blue {
    @apply h-[20rem] w-[20rem];
  }
}

@screen xl {
  .hero_animation--blue {
    @apply h-[25rem] w-[25rem];
  }
}

.hero_animation--green {
  @apply relative rounded-full;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(121, 206, 186, 0.81) 0%,
    rgba(121, 206, 186, 0) 100%
  );
}

@screen md {
  .hero_animation--green {
    @apply h-[20rem] w-[20rem];
  }
}

@screen lg {
  .hero_animation--green {
    @apply h-[30rem] w-[30rem];
  }
}

@screen xl {
  .hero_animation--green {
    @apply h-[35rem] w-[35rem];
  }
}

.hero_animation--pink {
  @apply absolute right-0 top-0 rounded-full;
  background: radial-gradient(50% 50% at 50% 50%, #ce79a2 0%, rgba(206, 121, 167, 0) 100%);
}

@screen md {
  .hero_animation--pink {
    @apply h-[15rem] w-[15rem];
  }
}

@screen lg {
  .hero_animation--pink {
    @apply h-[25rem] w-[20rem];
  }
}

@screen xl {
  .hero_animation--pink {
    @apply h-[25rem] w-[25rem];
  }
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
