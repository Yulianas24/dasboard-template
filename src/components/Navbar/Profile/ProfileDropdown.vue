<template>
  <div class="group">
    <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary">
      <div class="flex gap-2 items-center">
        <slot name="button"/>
      </div>
      <i class="ri-arrow-right-s-line rotate-0 group-hover:rotate-90 transition-all"></i>
    </button>
    <div class="grid overflow-hidden max-h-0 group-hover:max-h-[100px] pl-[25px] py-1 transition-all duration-700">
      <slot name="list"/>
    </div>
  </div>
</template>