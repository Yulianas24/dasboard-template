<template>
  <div class="flex items-center gap-5">
    <div class="flex items-center gap-2">
      <button ref="profileButton" 
        class="flex flex-none justify-center items-center text-primary bg-gray-300 w-[35px] h-[35px] rounded-full"
        @click="isOpen = !isOpen">
        <!-- <i class="text-xl ri-user-line"></i> -->
      </button>
    </div>
    <!-- menu  -->
    <div ref="profileMenu" class="fixed top-0 bg-white z-[999999] -right-[300px] transition-all border-l duration-700  w-[300px] h-screen overflow-auto"
      :class="{'right-0':isOpen}">
      <!-- profile -->
      <div class="grid gap-3 justify-items-center content-start p-5 w-full h-full">
        <!-- card -->
        <ProfileCard/>
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
import { ref, onMounted, onUnmounted } from 'vue';
import ProfileCard from './ProfileCard.vue';
import Button from './ProfileButton.vue';
import Dropdown from './ProfileDropdown.vue';

const isOpen = ref(false);
const profileButton = ref()
const profileMenu = ref()

const openEvent = ((e) => {
  if(e.target == profileButton.value){
    isOpen.value = true
  } else {
    if(e.target.className != 'profile-dropdown')
    isOpen.value = false
  }
})
onMounted(() => {
  window.addEventListener('click', openEvent)
});

onUnmounted(() => {
  window.removeEventListener('click', openEvent)
});
</script>