<template>
  <section>
    <div v-if="$slots.header">
      <slot name="header" />
    </div>
    <div v-if="$slots.content">
      <slot v-if="$slots.content" name="content" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
