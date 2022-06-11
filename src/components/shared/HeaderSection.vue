<template>
  <div class="w-9/12 mx-auto text-center mt-[118px] mb-10">
    <h2
        class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white/[.7] text-2xl"
    >
      <slot name="title" />
    </h2>
    <h3 class="font-semibold italic text-4xl  text-white">
      <slot name="subtitle" />
    </h3>
  </div>
</template>
