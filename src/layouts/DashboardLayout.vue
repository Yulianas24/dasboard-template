<script setup>
import Navbar from "@/components/Navbar/index.vue"
</script>
<template>
  <div class="grid content-start gap-1 w-screen h-screen overflow-hidden">
    <Navbar/>
    <div class="p-5 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
};
</script>
