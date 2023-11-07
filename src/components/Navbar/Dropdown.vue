<template>
  <div class="group relative flex-none lg:h-full underline-menu" >
    <button class="button-list px-3 lg:px-0" :class="{ 'active-menu':active}">
      <div>
        <i class="ri-dashboard-line font-light"></i>
        {{ name }}
      </div>
      <i class="ri-arrow-drop-down-line group-hover:rotate-180"></i>
    </button>
    <div class="menu-list opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[400px]">
      <slot/>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps(['active', 'name']);
</script>

<style scoped>
.button-list {
  @apply flex lg:h-full w-full justify-between items-center gap-1 text-white font-semibold text-sm py-4;
}
.menu-list {
  @apply lg:absolute z-50 lg:min-w-[200px] lg:bg-white overflow-hidden lg:rounded-b-md transition-all duration-300;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
</style>