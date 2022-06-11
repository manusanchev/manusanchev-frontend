<template>
  <div class="w-9/12 mx-auto text-center mt-[10rem] mb-10 md:mt-[24rem]">
    <h2
        class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white/[.7] text-2xl md:text-[2.5rem]"
    >
      <slot name="title" />
    </h2>
    <h3 class="font-semibold italic text-4xl text-white md:text-5xl md:mt-4">
      <slot name="subtitle" />
    </h3>
  </div>
</template>
