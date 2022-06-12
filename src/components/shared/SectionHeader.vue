<template>
  <div class="mx-auto mt-[10rem] mb-10 w-9/12 text-center md:mt-[24rem]">
    <h2
      class="bg-gradient-to-r from-[#60A5FA] to-white/[.7] bg-clip-text text-2xl font-medium text-transparent md:text-[2.5rem]"
    >
      <slot name="title" />
    </h2>
    <h3 class="text-4xl font-semibold italic text-white md:mt-4 md:text-5xl">
      <slot name="subtitle" />
    </h3>
  </div>
</template>
