<template>
  <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-5 overflow-x-auto">
    <div ref="mapContainer" class="bg-gray-300 min-h-[200px] w-full rounded-lg"></div>
    <div class="bg-gray-300 min-h-[200px] w-full rounded-lg"></div>
    <div class="bg-gray-300 min-h-[200px] w-full rounded-lg"></div>
    <div class="bg-gray-300 min-h-[200px] w-full rounded-lg"></div>
  </section>

</template>

<script setup>

import { onMounted, ref } from 'vue';
import L from "leaflet";

const mapContainer = ref()

onMounted(() => {
  const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

});
</script>