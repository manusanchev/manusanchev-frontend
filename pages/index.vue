<template>
  <div class="lg:flex">
    <About class="lg:h-screen lg:sticky lg:top-0 border-b lg:border-r lg:border-b-0 border-separator pb-[4rem] lg:max-w-[50rem] lg:overflow-y-auto" />
    <main class="pt-8 pb-[5rem] lg:w-[50%]">
      <Projects />
    </main>
    <Transition enter-active-class="transition-transform duration-500 ease-out"
                enter-from-class="translate-y-40"
                enter-to-class="translate-y-0"
                leave-active-class="transition-transform duration-500 ease-out"
                leave-from-class="translate-y-0"
                leave-to-class="translate-y-40">
     <AboutHeaderMobile v-if="showHeader" class="md:hidden" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import About from "~/components/about/About.vue";
import Projects from "~/components/projects/Projects.vue";
import AboutHeaderMobile from "~/components/about/header/AboutHeaderMobile.vue";

const showHeader = ref(false);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const onScroll = () => {
  const threshold = 100;
  const scrollY = window.scrollY;
  showHeader.value = scrollY > threshold;

};
</script>