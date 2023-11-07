<template>
  <nav class="flex content-center justify-between w-full px-5 py-[15px]">
    <div class="flex items-center gap-2 text-primary">
      <button class="lg:hidden" @click="emits('menuClicked')">
        <i class="ri-menu-line text-2xl"></i>
      </button>
      <h1 class="text-lg font-bold">Jenjang.id</h1>
    </div>
    <!-- profile -->
    <ProfileMenu/>
  </nav>
</template> 

<script setup>
// import ProfileCard from './ProfileCard.vue';
import ProfileMenu from '../Navbar/Profile/index.vue';
const emits = defineEmits(['menuClicked']);
</script>
