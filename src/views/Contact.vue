<template>
  <div class="container mx-auto p-6">
    <!-- Contact Form -->
    <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-3xl font-bold mb-8 text-center">Contact Me</h1>

      <!-- Form -->
      <form @submit.prevent="submitForm">
        <!-- Name Field -->
        <div class="mb-6">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Your Name</label
          >
          <input
            type="text"
            v-model="formData.name"
            id="name"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Email Field -->
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            v-model="formData.email"
            id="email"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Phone Number Field -->
        <div class="mb-6">
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Phone Number</label
          >
          <input
            type="tel"
            v-model="formData.phone"
            id="phone"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Message Field -->
        <div class="mb-6">
          <label for="message" class="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            v-model="formData.message"
            id="message"
            rows="4"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- File input -->
        <div class="mb-6">
          <label
            for="file-upload"
            class="block text-sm font-medium text-gray-700"
          >
            Upload File
          </label>
          <div
            v-for="(fileObj, index) in formData.files"
            :key="fileObj.id"
            class="flex items-center"
          >
            <!-- Hidden File Input -->
            <input
              type="file"
              :id="'file-upload-' + index"
              accept=".pdf,.docx,.txt"
              class="hidden"
              @change="(event) => handleFileUpload(event, index)"
            />
            <!-- Custom Button (Icon & Text) -->
            <label
              :for="'file-upload-' + index"
              class="flex items-center cursor-pointer"
            >
              <!-- Icon (Clickable) -->
              <Icon
                icon="icon-park-outline:upload-one"
                class="w-10 h-10 text-blue-600 hover:text-blue-700"
              />
              <!-- Display Selected File Name -->
              <span class="ml-3 text-sm text-gray-500" v-if="fileObj.file">
                {{ formData.files[index].file.name }}
              </span>
              <span class="ml-3 text-sm text-gray-500" v-else
                >No file chosen</span
              >
            </label>

            <div class="relative flex items-center">
              <!-- Remove File Button -->
              <Icon
                v-if="fileObj.file || index > 0"
                icon="material-symbols:cancel-outline"
                class="w-6 h-6 ml-2 text-red-700 hover:text-red-900 cursor-pointer"
                @click="clearFile(index)"
                @mouseover="startShowTooltip(index, 'remove')"
                @mouseleave="stopShowTooltip('remove')"
                @mouseout="stopShowTooltip('remove')"
              />

              <!-- Icon tooltip (Hover) -->
              <span
                v-if="showRemoveFileTooltip === index"
                class="absolute bg-gray-700 text-white text-sm rounded-lg px-2 py-1 -top-10 left-0 transform translate-x-1/2 opacity-100 duration-300 pointer-events-none"
              >
                Remove file
              </span>
            </div>
            <div class="relative flex items-center">
              <!-- Add Another File Button -->
              <Icon
                v-if="index === 0"
                icon="material-symbols:add-circle-outline"
                class="w-6 h-6 ml-2 text-blue-600 hover:text-blue-700 cursor-pointer"
                @click="addAnotherFile"
                @mouseover="startShowTooltip(null, 'add')"
                @mouseleave="stopShowTooltip('add')"
                @mouseout="stopShowTooltip('add')"
              />
              <!-- Icon tooltip (Hover) -->
              <span
                v-if="showAddFileTooltip && index === 0"
                class="absolute bg-gray-700 text-white text-sm rounded-lg px-2 py-1 -top-16 left-0 transform translate-x-1/2 opacity-100 duration-300 pointer-events-none"
              >
                Add another file
              </span>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            class="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    <!-- Contact Information Section -->
    <div class="max-w-4xl mx-auto mt-12 text-center">
      <h2 class="text-2xl font-semibold">Other ways to reach me</h2>
      <!-- Chat with me now Button -->
      <div class="flex justify-center mb-4">
        <button
          @click="openChat"
          class="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          <Icon icon="simple-icons:livechat" class="mr-2" />
          Chat with me now
        </button>
      </div>
      <!-- My email -->
      <p class="text-lg text-gray-600">
        <strong>Email:</strong> robertducan30@gmail.com
      </p>
      <!-- My phone number -->
      <p class="text-lg text-gray-600">
        <strong>Phone:</strong> (+44) 7472 561 088
      </p>
    </div>
  </div>
  <!-- Dialog component -->
  <Dialog
    :type="dialogType"
    :isVisible="showDialog"
    :title="dialogTitle"
    :message="dialogMessage"
    :autoClose="true"
    :autoCloseDelay="dialogAutoCloseDelay"
    @close="showDialog = false"
    :isBlocking="false"
  >
  </Dialog>
</template>

<script setup>
import Dialog from "@/components/utils/Dialog.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
  files: [{ file: null, id: Date.now() }],
});

// Use boolean for add tooltip as it can be seen just on the same row
const showAddFileTooltip = ref(false);
// Use index for remove tooltip and it can be seen from different rows
const showRemoveFileTooltip = ref(false);
const showDialog = ref(false);
const dialogMessage = ref("");
const dialogType = ref("");
const dialogTitle = ref("");

const dialogAutoCloseDelay = ref(5000);

const handleFileUpload = (event, index) => {
  formData.value.files[index].file = event.target.files[0];
};

const clearFile = (index) => {
  formData.value.files.splice(index, 1);
};

const addAnotherFile = () => {
  // Add a new file input with a unique ID
  formData.value.files.push({ file: null, id: Date.now() });
};

const submitForm = async () => {
  // Validate that the form has required fields (name, email, message, etc.)
  if (
    (!formData.value.email && !formData.value.phoneNumber) ||
    (!formData.value.message && !formData.value.file)
  ) {
    dialogMessage.value =
      "Please provide either an email or phone number, and a message or job description.";
    showDialog.value = true;
    dialogType.value = "warning";
    dialogTitle.value = "Validation Error";
    return; // Stop if validation fails
  }

  // Prepare the form data to be sent to the backend
  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.value.name);
  formDataToSend.append("email", formData.value.email);
  formDataToSend.append("phone", formData.value.phoneNumber);
  formDataToSend.append("message", formData.value.message);

  // If a file is uploaded, append it to the form data
  const files = formData.value.files.filter((fileObj) => fileObj.file);
  if (files && files.length > 0) {
    files.forEach((fileObj, index) => {
      formDataToSend.append(`file${index}`, fileObj.file);
    });
  }

  try {
    // Send the form data to the backend
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      dialogMessage.value = "Your message has been sent!";
      dialogType.value = "ok";
      dialogTitle.value = "Success";
      dialogAutoCloseDelay.value = 1300;
    } else {
      dialogMessage.value = "Error sending message. Please try again later.";
      dialogType.value = "error";
      dialogTitle.value = "Error";
    }
  } catch (error) {
    console.log("Error sending message:", error);
    dialogMessage.value = "Failed to submit the form. Please try again.";
  }

  // Show dialog with a success/failure message
  showDialog.value = true;
};

let tooltipTimeout = null; // To store timeout reference

const startShowTooltip = (index, type) => {
  tooltipTimeout = setTimeout(() => {
    switch (type) {
      case "add":
        showAddFileTooltip.value = true;
      case "remove":
        showRemoveFileTooltip.value = index;
        break;
      default:
        break;
    }
  }, 1000);
};

const stopShowTooltip = (type) => {
  clearTimeout(tooltipTimeout);
  switch (type) {
    case "add":
      showAddFileTooltip.value = false;
      break;
    case "remove":
      showRemoveFileTooltip.value = null;
      break;
    default:
      break;
  }
};

const openChat = () => {
  showDialog.value = true;
  dialogType.value = "info";
  dialogTitle.value = "Chat with Robert LIVE";
  dialogMessage.value = "COMING SOON! Stay tuned for more updates.";
  dialogAutoCloseDelay.value = 3000;
};
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
