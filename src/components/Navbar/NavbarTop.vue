<template>
  <nav class="flex content-center justify-between w-full px-5 py-[15px]">
    <div class="flex items-center gap-2 text-[#7142E1]">
      <button class="lg:hidden" @click="emits('menuClicked')">
        <i class="ri-menu-line text-2xl"></i>
      </button>
      <h1 class="text-lg font-bold">Jenjang.id</h1>
    </div>
    <!-- profile -->
    <div class="relative group w-[35px] h-[35px]">
      <div class="absolute z-50 right-0 top-0  transition-all duration-500 bg-white group-hover:border  rounded-md p-0 group-hover:p-3">
        <div class="grid justify-items-center">
          <div class="flex items-center gap-0 group-hover:gap-3">
            <button class="flex flex-none justify-center items-center text-[#7142E1] bg-gray-300 w-[35px] h-[35px] rounded-full" @click="emits('profileClicked')">
              <!-- <i class="text-xl ri-user-line"></i> -->
            </button>
              <p class="w-0 group-hover:w-[200px] transition-all duration-500 text-clip overflow-hidden truncate">Yulian Aznal</p>
          </div>
          <!-- menu list -->
          <div class="grid gap-1 pt-3 h-0 group-hover:h-[200px] w-0 group-hover:w-[250px] group-hover:mt-3 transition-all duration-500 border-t overflow-hidden">
            <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm">
              <div class="flex gap-2 items-center">
                <i class="ri-user-settings-line text-base"></i>
                Account settings
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </button>
            <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm">
              <div class="flex gap-2 items-center">
                <i class="ri-notification-off-line"></i>
                Pause notification
              </div>
              <i class="ri-arrow-right-s-line"></i>
            </button>
            <hr>
            <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm">
              <div class="flex gap-2 items-center">
                <i class="ri-file-user-line"></i>
                Profile
              </div>
            </button>
            <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm">
              <div class="flex gap-2 items-center">
                <i class="ri-logout-box-r-line"></i>
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="hidden lg:flex items-center text-[#7142E1]">
        <i class="text-xl ri-notification-3-line"></i>
        <i class="text-xl ri-user-line ml-2"></i>
        <p class="ml-3 text-sm font-semibold">M.Taufik Hidayat</p>
      </div> -->
    </div>
  </nav>
</template> 

<script setup>
const emits = defineEmits(['menuClicked', 'profileClicked']);
</script>
