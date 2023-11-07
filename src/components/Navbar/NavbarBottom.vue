<template>
  <div class="fixed lg:relative top-0 w-full" @click.self="emits('menu-closed')">
    <nav id="navbar-bottom" class="lg:relative bg-[#663BCB] w-[50%] lg:w-full h-screen lg:h-fit">
      <div class="flex py-6 lg:py-0 flex-wrap flex-col gap-1 lg:gap-x-5 lg:flex-row lg:px-5 lg:items-center w-full lg:w-full h-full nav-main">
        <!-- dashboard button -->
        <div class="px-3 lg:px-0 py-4 underline-menu"> 
          <button class="relative nav-button h-full">
            <i class="ri-dashboard-line font-light"></i>
            Dashboard
          </button>
        </div>
        <!-- end of dashboard button -->
  
        <!-- karyawan menu -->
        <Dropdown id="menu-karyawan" name="Karyawan">
          <button class="dropdown-menu">item test #1</button>
          <button class="dropdown-menu">item test #2</button>
          <button class="dropdown-menu">item test #3</button>
        </Dropdown>
        <!-- end of karyawan menu -->
  
        <!-- persetujuan menu -->
        <Dropdown id="menu-persetujuan" name="Persetujuan">
          <button class="dropdown-menu">item test #1</button>
          <button class="dropdown-menu">item test #2</button>
          <button class="dropdown-menu">item test #3</button>
        </Dropdown>
        <!-- end of persetujuan menu -->
  
        <!-- pengaturan menu -->
        <Dropdown id="menu-pengaturan" name="Pengaturan">
          <button class="dropdown-menu">item test #1</button>
          <button class="dropdown-menu">item test #2</button>
          <button class="dropdown-menu">item test #3</button>
        </Dropdown>
        <!-- end of pengaturan menu -->
  
        <!-- data induk menu -->
        <Dropdown id="menu-data-induk" name="Data Induk">
          <button class="dropdown-menu">item test #1</button>
          <button class="dropdown-menu">item test #2</button>
          <button class="dropdown-menu">item test #3</button>
        </Dropdown>
        <!-- end of data induk menu -->
  
        <!-- Laporan menu -->
        <Dropdown id="menu-Laporan" name="Laporan">
          <button class="dropdown-menu">item test #1</button>
          <button class="dropdown-menu">item test #2</button>
          <button class="dropdown-menu">item test #3</button>
        </Dropdown>
        <!-- end of Laporan menu -->
  
        <!-- Tagihan menu -->
        <Dropdown id="menu-tagihan" name="Tagihan">
          <button class="dropdown-menu">item test #1</button>
          <button class="dropdown-menu">item test #2</button>
          <button class="dropdown-menu">item test #3</button>
        </Dropdown>
        <!-- end of Tagihan menu -->

  
  
      </div>
    </nav>
  </div>
</template>

<script setup>
import Dropdown from './Dropdown.vue';

const emits = defineEmits(['menu-closed']);


</script>

<style scoped>
  .nav-main {
    background-image: url('@/assets/nav-bg.svg');
  }
  .nav-button {
    @apply flex items-center gap-1 text-white font-semibold text-sm h-full;
  }
  .button-list {
    @apply flex lg:h-full w-full justify-between items-center gap-1 text-white font-semibold text-sm  py-1;
  }
  .menu-list {
    @apply lg:absolute top-[60px] z-50 grid lg:min-w-[200px] lg:w-fit lg:bg-white overflow-hidden h-fit lg:rounded-b-md;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
  .dropdown-menu {
    @apply flex w-full justify-start border-b border-white/20 text-sm lg:font-semibold px-5 pl-8 lg:pl-5 py-2 lg:py-3 text-white lg:text-black hover:bg-[#7142E1]/20
  }


</style>