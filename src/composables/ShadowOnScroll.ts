import { onBeforeUnmount, onMounted, Ref } from "vue";

const useShadowOnScroll = (
  elementToShadow: Ref<HTMLElement | undefined>,
  { shadowColor, shadowSize }: { shadowColor: string; shadowSize: string }
) => {
  onMounted(() => {
    document.addEventListener("scroll", classesScroll);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("scroll", classesScroll);
  });

  function classesScroll() {
    if (window.scrollY === 0) {
      elementToShadow.value?.classList.remove(shadowSize);
      elementToShadow.value?.classList.remove(shadowColor);
    }

    if (elementToShadow.value && window.scrollY) {
      elementToShadow.value?.classList.add(shadowSize);
      elementToShadow.value?.classList.add(shadowColor);
    }
  }
};

export default useShadowOnScroll;
