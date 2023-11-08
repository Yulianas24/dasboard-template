<template>
<div class="grid justify-items-center p-5 rounded-lg border w-full h-full ">
  <div v-if="!loading" class="grid content-center justify-items-center w-[215px] h-[215px]">
      <!-- photo -->
      <div class="relative w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
      </div>
      <div class="grid text-center mt-5">
        <p class="text-base font-semibold">Yulian Aznal H</p>
        <p class="text-sm font-light">test@email.com</p>
      </div>
  </div>
  <div class="loader" v-else></div>

</div>
</template>
<script setup>
import { ref } from 'vue';

const loading = ref(false);
</script>
<style scoped>

.loader {
  width: 215px;
  height: 215px;
  display: block;
  margin: auto;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
}
.loader::after {
  content: '';
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  top: 15px;
  left: 15px;
  position: absolute;
  background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
   radial-gradient(circle 50px , #DDD 100%, transparent 0),
   linear-gradient(#DDD 16px, transparent 0),
   linear-gradient(#DDD 24px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 175px, 100% 100px, 80% 16px, 80% 16px;
  background-position: -185px 0, center 10px, center 125px, center 155px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  to {
    background-position: 185px 0, center 10px, center 125px, center 155px;
  }
}
  

</style>