<template>
  <div>
    <NavbarTop @menu-clicked="menuClicked()" />
    <NavbarBottom @menu-closed="menuClosed()" 
    class="transition-all duration-500"
    :class="mobileMenu ? 'left-0': 'left-[-100%] lg:left-0'"/>
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

