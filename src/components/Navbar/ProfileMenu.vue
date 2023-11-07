<template>
  <div class="flex items-center gap-5">
    <button class="text-gray-700 text-2xl">
      <i class="ri-notification-4-line"></i>
    </button>
    <div class="peer flex items-center gap-2">
      <button class="flex flex-none justify-center items-center text-primary bg-gray-300 w-[35px] h-[35px] rounded-full">
        <!-- <i class="text-xl ri-user-line"></i> -->
      </button>
    </div>
    <!-- menu  -->
    <div class="fixed peer-hover:grid  top-0 bg-white z-50 -right-[300px] peer-hover:right-0 hover:right-0 transition-all border-l duration-700  w-[300px] h-screen">
      <!-- profile -->
      <div class="grid gap-3 justify-items-center content-start p-5 w-full h-full">
        <!-- card -->
        <div class="grid justify-items-center p-5 rounded-lg border w-full h-full ">
          <!-- photo -->
          <div class="relative w-28 h-28 bg-gray-300 rounded-full overflow-hidden">
          </div>
          <div class="grid text-center mt-5">
            <p class="text-base font-semibold">Yulian Aznal H</p>
            <p class="text-sm font-light">test@email.com</p>
          </div>
        </div>
        <div class="grid w-full p-5 h-[300px] border rounded-lg">
          <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary">
            <div class="flex gap-2 items-center">
              <i class="ri-user-settings-line text-base"></i>
              Account settings
            </div>
          </button>
          <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary">
            <div class="flex gap-2 items-center">
              <i class="ri-file-user-line"></i>
              Profile
            </div>
          </button>
          <hr class="my-3">
          <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary">
            <div class="flex gap-2 items-center">
              <i class="ri-user-settings-line text-base"></i>
              Account settings
            </div>
            <i class="ri-arrow-right-s-line"></i>
          </button>
          <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary">
            <div class="flex gap-2 items-center">
              <i class="ri-notification-off-line"></i>
              Pause notification
            </div>
            <i class="ri-arrow-right-s-line"></i>
          </button>
  
          <hr class="my-3">
  
          <button class="flex items-center justify-between w-full text-left px-3 py-1 text-sm hover:text-primary">
            <div class="flex gap-2 items-center">
              <i class="ri-logout-box-r-line"></i>
              Logout
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>