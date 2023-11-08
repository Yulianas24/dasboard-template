<template>
  <button class="relative px-3 lg:px-0 nav-button h-fit underline-menu" :class="{'active-menu':active}">
    <div class="flex items-center gap-1 text-white font-semibold text-sm h-full py-4">
      <slot/>
      {{ name }}
    </div>
  </button>
</template>

<script setup>
  defineProps(['name', 'active']);
</script>