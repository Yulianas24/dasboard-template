<template>
  <div class="flex items-center gap-5">
    <div class="peer flex items-center gap-2">
      <button class="flex flex-none justify-center items-center text-primary bg-gray-300 w-[35px] h-[35px] rounded-full">
        <!-- <i class="text-xl ri-user-line"></i> -->
      </button>
    </div>
    <!-- menu  -->
    <div class="fixed peer-hover:grid  top-0 bg-white z-[999999] -right-[300px] peer-hover:right-0 hover:right-0 transition-all border-l duration-700  w-[300px] h-screen overflow-auto">
      <!-- profile -->
      <div class="grid gap-3 justify-items-center content-start p-5 w-full h-full">
        <!-- card -->
        <Card/>
        <div class="grid w-full p-5 h-fit border rounded-lg">
          
          <Button>
            <i class="ri-user-settings-line text-base"></i>
            Account settings
          </Button>
          <Button>
            <i class="ri-file-user-line"></i>
            Profile
          </Button>
          <hr class="my-3">
          <Dropdown>
            <template #button>
              <i class="ri-user-settings-line text-base"></i>
              Account settings
            </template>
            <template #list>
              <div class="grid"> 
                <Button> test 1 </Button>
                <Button> test 2 </Button>
                <Button> test 3 </Button>
              </div>
            </template>
          </Dropdown>
          
          <Dropdown>
            <template #button>
              <i class="ri-notification-off-line"></i>
              Pause notification
            </template>
            <template #list>
              <div class="grid"> 
                <Button> test 1 </Button>
                <Button> test 2 </Button>
                <Button> test 3 </Button>
              </div>
            </template>
          </Dropdown>
          
          <hr class="my-3">
  
          <Button>
            <i class="ri-logout-box-r-line"></i>
            Logout
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from './ProfileCard.vue';
import Button from './ProfileButton.vue';
import Dropdown from './ProfileDropdown.vue';
</script>