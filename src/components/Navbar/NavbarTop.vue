<template>
  <nav class="flex content-center justify-between w-full px-5 py-[15px]">
    <div class="flex items-center gap-2 text-primary">
      <button class="lg:hidden" @click="emits('menuClicked')" >
        <i class="ri-menu-line text-2xl"></i>
      </button>
      <h1 class="text-lg font-bold">Jenjang.id</h1>
    </div>
    <!-- profile -->
    <div class="flex gap-3">
      <button ref="notificationButton" id="notification-list" class="text-gray-700 text-2xl" @click="openList = 'notification'">
        <i class="pointer-events-none ri-notification-4-line"></i>
      </button>
      <ProfileMenu/>
    </div>
  </nav>
</template> 

<script setup>
// import ProfileCard from './ProfileCard.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import ProfileMenu from '../Navbar/Profile/index.vue';
const emits = defineEmits(['menuClicked']);

const notificationButton = ref()
const openList = ref(null);


// click event
const openEvent = ((event) => {
  if (event.target != notificationButton.value) {
    openList.value = null
  }
  console.log(openList.value)

})

onMounted(() => {
  window.addEventListener('click', openEvent);

});

onUnmounted(() => {
  window.removeEventListener('click', openEvent)
});

</script>
