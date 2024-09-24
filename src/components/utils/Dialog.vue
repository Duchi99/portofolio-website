<template>
  <Transition>
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-start"
    >
      <div
        class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-lg mt-12 w-72"
      >
        <div class="flex items-center">
          <h2 class="text-lg font-semibold">{{ title }}</h2>
        </div>
        <p class="mt-2 text-sm">
          {{ message }}
        </p>
        <div class="mt-4 text-right">
          <button
            @click="closeDialog"
            class="inline-block px-4 py-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, ref } from "vue";

// Props for dialog configuration
const props = defineProps({
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

const show = ref(true);

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
