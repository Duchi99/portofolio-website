<template>
  <nav
    :class="
      isCollapsed
        ? 'min-w-[5.5rem] max-w-[4.5rem]'
        : 'min-w-[16rem] max-w-[16rem]'
    "
    class="h-screen fixed top-0 left-0 bg-gray-900 transition-all duration-500 ease-in-out p-4"
  >
    <!-- Logo and Collapse Button -->
    <div
      :class="isCollapsed ? 'justify-center' : 'justify-between'"
      class="flex items-center mb-8"
    >
      <!-- Logo -->
      <router-link
        v-if="!isCollapsed"
        to="/home"
        class="text-2xl font-bold text-white tracking-wider"
      >
        <Icon icon="material-symbols:logo-dev-outline" class="w-20 h-16" />
      </router-link>

      <!-- Collapse Button (Hamburger Icon) -->
      <button @click="$emit('toggleSidebar')" class="p-2 focus:outline-none">
        <div class="space-y-1">
          <span class="block w-6 h-0.5 bg-white"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>
    </div>

    <!-- Navigation Links -->
    <ul class="space-y-6 relative">
      <li class="relative group">
        <router-link
          to="/"
          class="flex items-center px-4 py-2 text-lg font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-500"
          active-class="bg-gray-700 text-white"
        >
          <!-- Icon -->
          <Icon
            icon="solar:home-outline"
            :class="isCollapsed ? 'w-8 h-8' : 'w-6 h-6'"
            class="transition-all duration-500"
          />

          <!-- Text/Tooltip (based on isCollapsed) -->
          <span
            :class="
              !isCollapsed
                ? 'ml-2'
                : 'absolute left-[4.5rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            "
            v-if="!isMobile"
          >
            Home
          </span>
        </router-link>
      </li>

      <li class="relative group">
        <router-link
          to="/about"
          class="flex items-center px-4 py-2 text-lg font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-500"
          active-class="bg-gray-700 text-white"
        >
          <Icon
            icon="mdi:about-circle-outline"
            :class="isCollapsed ? 'w-8 h-8' : 'w-6 h-6'"
            class="transition-all duration-500"
          />

          <!-- Text/Tooltip (based on isCollapsed) -->
          <span
            :class="
              !isCollapsed
                ? 'ml-2'
                : 'absolute left-[4.5rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            "
            v-if="!isMobile"
          >
            About
          </span>
        </router-link>
      </li>

      <li class="relative group">
        <router-link
          to="/services"
          class="flex items-center px-4 py-2 text-lg font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-500"
          active-class="bg-gray-700 text-white"
        >
          <Icon
            icon="grommet-icons:services"
            :class="isCollapsed ? 'w-8 h-8' : 'w-6 h-6'"
            class="transition-all duration-500"
          />

          <!-- Text/Tooltip (based on isCollapsed) -->
          <span
            :class="
              !isCollapsed
                ? 'ml-2'
                : 'absolute left-[4.5rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            "
            v-if="!isMobile"
          >
            Services
          </span>
        </router-link>
      </li>

      <li class="relative group">
        <router-link
          to="/contact"
          class="flex items-center px-4 py-2 text-lg font-medium text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-500"
          active-class="bg-gray-700 text-white"
        >
          <Icon
            icon="grommet-icons:contact"
            :class="isCollapsed ? 'w-8 h-8' : 'w-6 h-6'"
            class="transition-all duration-500"
          />

          <!-- Text/Tooltip (based on isCollapsed) -->
          <span
            :class="
              !isCollapsed
                ? 'ml-2'
                : 'absolute left-[4.5rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            "
            v-if="!isMobile"
          >
            Contact
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  isCollapsed: Boolean,
});

const emit = defineEmits(["toggleSidebar"]);

const isMobile = ref(false); // Track mobile state

// Detect if viewport is in mobile mode
const handleResize = () => {
  isMobile.value = window.innerWidth < 640; // Tailwind's 'sm' breakpoint

  // Collapse sidebar on mobile
  if (isMobile.value) {
    emit("toggleSidebar", true);
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // Check on load
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
