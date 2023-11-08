<template>
  <div class="">
    <button @click="clickedButton()" class="profile-dropdown">
      <div class="flex gap-2 items-center pointer-events-none">
        <slot name="button"/>
        {{ name }}
      </div>
      <i class="ri-arrow-right-s-line rotate-0" :class="isActive == name ? 'rotate-90 transition-all' : ''"></i>
    </button>
    <div class="grid overflow-hidden max-h-0 pl-[25px] py-1 transition-all duration-700" :class="isActive == name ? 'max-h-[100px]' : ''">
      <slot name="list"/>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['name', 'isActive']);

const emits = defineEmits(['clickedDropdown'])
const clickedButton = (() => {
  if (props.name == props.isActive) {
    emits('clickedDropdown', 'none')
  } else {
    emits('clickedDropdown', props.name)
  }
});
</script>
<style scoped>
.profile-dropdown {
  @apply flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary-500;
}
</style>