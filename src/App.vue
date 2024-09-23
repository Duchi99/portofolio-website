<script setup>
import NavBar from "./components/NavBar.vue";
import { ref } from "vue";

const isCollapsed = ref(false);
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div id="app">
    <div class="flex">
      <!-- Sidebar -->
      <NavBar :isCollapsed="isCollapsed" @toggleSidebar="toggleSidebar" />

      <!-- Main Content -->
      <div
        :class="isCollapsed ? 'ml-20' : 'ml-64'"
        class="flex-1 bg-gray-100 min-h-screen p-4"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
