<template>
  <div class="group relative">
    <!-- notification button -->
    <button ref="notificationButton" id="notification-list" 
    @click="openList()"
    class="transition-all text-gray-400  hover:text-white hover:bg-gray-400 text-2xl w-[35px] h-[35px] rounded-full"
      :class="{'text-white bg-gray-400':isOpen}">
      <i class="pointer-events-none ri-notification-4-line"></i>
    </button>
    <!-- notification content -->
    <div class="notification-content" :class="isOpen ? 'w-[300px] h-[350px] opacity-100' : 'w-0 h-0 opacity-0'">
      <div class="grid h-full items-evenly p-5">
        <div class="grid gap-1">
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
          <hr>
          <button class="w-full text-left p-1 text-gray-800 text-sm">Notifikasi Lainnya</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NotificationItem from '../Partials/NotificationItem.vue';

const isOpen = ref(false);
const notificationButton = ref()
const openList = (() => {
  isOpen.value = !isOpen.value
}); 

const openEvent = ((e) => {
  if(e.target != notificationButton.value){
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
<style scoped>
.notification-content {
  @apply absolute  right-0 md:right-10 md:top-0 bg-white z-[999999] rounded-lg overflow-hidden transition-all duration-500;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}
</style>