<template>
  <Transition>
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-start"
    >
      <div :class="dialogClass" class="p-4 rounded-lg shadow-lg mt-12 w-72">
        <div class="flex items-center">
          <h2 class="text-lg font-semibold">{{ title }}</h2>
        </div>
        <p class="mt-2 text-sm">
          {{ message }}
        </p>
        <div class="mt-4 text-right">
          <button
            @click="closeDialog"
            :class="buttonClass"
            class="inline-block px-4 py-2 text-white rounded-lg hover:focus:outline-none focus:ring"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, ref, computed } from "vue";

// Props for dialog configuration
const props = defineProps({
  type: {
    type: String,
  },
  title: {
    type: String,
    default: "Message",
  },
  message: {
    type: String,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
    required: true,
  },
  autoClose: {
    type: Boolean,
    default: false, // Enable auto-close if true
  },
  autoCloseDelay: {
    type: Number,
    default: 3000, // Delay in milliseconds
  },
});

// Emit the close event to the parent component
const emit = defineEmits(["close"]);

// Timeout ID for auto-close
let autoCloseTimeout = null;

// Function to close the dialog
const closeDialog = () => {
  emit("close");
};

watch(
  () => props.isVisible,
  (newVal) => {
    console.log("visibility changed", newVal);
    if (newVal && props.autoClose) {
      // Clear any previous timeout (if it exists)
      clearTimeout(autoCloseTimeout);
      // Set timeout to auto-close after the specified delay
      autoCloseTimeout = setTimeout(() => {
        console.log("Auto-closing dialog...");
        closeDialog();
      }, props.autoCloseDelay);
    }
  }
);

// Trigger auto-close if enabled when the dialog is mounted
onMounted(() => {
  console.log("monted dialog...", props);
  if (props.isVisible && props.autoClose) {
    // Clear any previous timeout (if it exists)
    clearTimeout(autoCloseTimeout);

    // Set timeout to auto-close after the specified delay
    autoCloseTimeout = setTimeout(() => {
      console.log("Auto-closing dialog...");
      closeDialog();
    }, props.autoCloseDelay);
  }
});

// Clear timeout on unmount to avoid memory leaks
onBeforeUnmount(() => {
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout);
  }
});

// Computed class for the dialog based on the type prop
const dialogClass = computed(() => {
  switch (props.type) {
    case "ok":
      return "bg-green-100 border-l-4 border-green-500 text-green-700";
    case "warning":
      return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700";
    case "error":
      return "bg-red-100 border-l-4 border-red-500 text-red-700";
    default:
      return "bg-gray-100 border-l-4 border-gray-500 text-gray-700"; // Default or neutral dialog style
  }
});

// Computed class for the button based on the type prop
const buttonClass = computed(() => {
  switch (props.type) {
    case "ok":
      return "bg-green-600 hover:bg-green-700 text-white focus:ring-green-200";
    case "warning":
      return "bg-yellow-600 hover:bg-yellow-700 text-white focus:ring-yellow-200";
    case "error":
      return "bg-red-600 hover:bg-red-700 text-white focus:ring-red-200";
    default:
      return "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-200";
  }
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
