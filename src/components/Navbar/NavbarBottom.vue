<template>
  <div class="fixed z-[99999] lg:relative top-0 w-full" @click.self="emits('menu-closed')">
    <nav id="navbar-bottom" class="lg:relative bg-[#663BCB] w-1/2 lg:w-full h-screen lg:h-fit">
      <div class="flex py-6 lg:py-0 flex-wrap flex-col gap-1 lg:gap-x-5 lg:flex-row lg:px-5 lg:items-center w-full lg:w-full h-full nav-main">
        
        <!-- dashboard button -->
        <router-link to="/">
          <Button name="Dashboard" :active="route.meta.group == 'dashboard'">
            <i class="ri-dashboard-line font-light"></i>
          </Button>
        </router-link>
        <!-- end of dashboard button -->

        <!-- karyawan menu -->
        <Dropdown id="menu-karyawan" name="Karyawan">
          <template #icon>
            <i class="ri-dashboard-line font-light"></i>
          </template>
          <template #list>
            <div class="lg:min-w-[200px]">
              <button class="dropdown-menu">item test #1</button>
              <button class="dropdown-menu">item test #2</button>
              <button class="dropdown-menu">item test #3</button>
            </div>
          </template>
        </Dropdown>
        <!-- end of karyawan menu -->
  
        <!-- persetujuan menu -->
        <Dropdown id="menu-persetujuan" name="Persetujuan">
          <template #icon>
            <i class="ri-dashboard-line font-light"></i>
          </template>
          <template #list>
            <div class="lg:min-w-[200px]">
              <button class="dropdown-menu">item test #1</button>
              <button class="dropdown-menu">item test #2</button>
              <button class="dropdown-menu">item test #3</button>
            </div>
          </template>
        </Dropdown>
        <!-- end of persetujuan menu -->
  
        <!-- pengaturan menu -->
        <Dropdown id="menu-pengaturan" name="Pengaturan">
          <template #icon>
            <i class="ri-dashboard-line font-light"></i>
          </template>
          <template #list>
            <div class="lg:min-w-[200px]">
              <button class="dropdown-menu">item test #1</button>
              <button class="dropdown-menu">item test #2</button>
              <button class="dropdown-menu">item test #3</button>
            </div>
          </template>
        </Dropdown>
        <!-- end of pengaturan menu -->
  
        <!-- data induk menu -->
        <Dropdown id="menu-data-induk" name="Data Induk">
          <template #icon>
            <i class="ri-dashboard-line font-light"></i>
          </template>
          <template #list>
            <div class="lg:min-w-[200px]">
              <button class="dropdown-menu">item test #1</button>
              <button class="dropdown-menu">item test #2</button>
              <button class="dropdown-menu">item test #3</button>
            </div>
          </template>
        </Dropdown>
        <!-- end of data induk menu -->
  
        <!-- Laporan menu -->
        <Dropdown id="menu-Laporan" name="Laporan">
          <template #icon>
            <i class="ri-dashboard-line font-light"></i>
          </template>
          <template #list>
            <div class="lg:min-w-[200px]">
              <button class="dropdown-menu">item test #1</button>
              <button class="dropdown-menu">item test #2</button>
              <button class="dropdown-menu">item test #3</button>
            </div>
          </template>
        </Dropdown>
        <!-- end of Laporan menu -->
  
        <!-- Tagihan menu -->
        <Dropdown id="menu-tagihan" name="Tagihan">
          <template #icon>
            <i class="ri-dashboard-line font-light"></i>
          </template>
          <template #list>
            <div class="lg:min-w-[200px]">
              <button class="dropdown-menu">item test #1</button>
              <button class="dropdown-menu">item test #2</button>
              <button class="dropdown-menu">item test #3</button>
            </div>
          </template>
        </Dropdown>
        <!-- end of Tagihan menu -->
      </div>
    </nav>
  </div>
</template>

<script setup>
import Dropdown from '../Partials/NavbarDropdown.vue';
import Button from '../Partials/NavbarButton.vue';

import { useRoute } from 'vue-router';

const route = useRoute()
const emits = defineEmits(['menu-closed']);


</script>

<style scoped>
  .nav-main {
    background-image: url('@/assets/nav-bg.svg');
  }
  .dropdown-menu {
    @apply flex w-full justify-start border-b border-white/20 text-sm lg:font-semibold px-5 pl-8 lg:pl-5 py-2 lg:py-3 text-white lg:text-black hover:bg-primary/20
  }


</style>