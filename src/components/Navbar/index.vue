<template>
  <div>
    <NavbarTop @menu-clicked="menuClicked()" />
    <NavbarBottom @menu-closed="menuClosed()" :class="{ 'hidden lg:block':!mobileMenu }"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
  import NavbarTop from './NavbarTop.vue';
  import NavbarBottom from './NavbarBottom.vue';
  
  const mobileMenu = ref(false)
  const menuClicked = (() => {
    mobileMenu.value = true
  });
  const menuClosed = (() => {
    mobileMenu.value = false
    console.log('closed')
  });
</script>

