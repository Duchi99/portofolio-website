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

        <div class="mb-6">
          <label
            for="file-upload"
            class="block text-sm font-medium text-gray-700"
          >
            Upload File
          </label>
          <div class="flex items-center">
            <!-- Hidden File Input -->
            <input
              type="file"
              id="file-upload"
              ref="fileInput"
              accept=".pdf,.docx,.txt"
              class="hidden"
              @change="handleFileUpload"
            />
            <!-- Custom Button (Icon & Text) -->
            <label for="file-upload" class="flex items-center cursor-pointer">
              <!-- Icon (Clickable) -->
              <Icon
                icon="icon-park-outline:upload-one"
                class="w-10 h-10 text-blue-600 hover:text-blue-700"
              />
              <!-- Display Selected File Name -->
              <span class="ml-3 text-sm text-gray-500" v-if="formData.file">
                {{ formData.file.name }}
              </span>
              <span class="ml-3 text-sm text-gray-500" v-else
                >No file chosen</span
              >
            </label>
            <Icon
              v-if="formData.file"
              icon="material-symbols:cancel-outline"
              class="w-6 h-6 ml-2 text-red-700 hover:text-red-900 cursor-pointer"
              @click="clearFile"
            />
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
      <p class="text-lg text-gray-600">
        <strong>Email:</strong> robertducan30@gmail.com
      </p>
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
  file: null,
});

const fileInput = ref(null);
const showDialog = ref(false);
const dialogMessage = ref("");
const dialogType = ref("");
const dialogTitle = ref("");

const dialogAutoCloseDelay = ref(5000);

const handleFileUpload = (event) => {
  formData.value.file = event.target.files[0];
};

const clearFile = () => {
  formData.value.file = null;
  fileInput.value.value = null;
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
  if (formData.value.file) {
    formDataToSend.append("file", formData.value.file);
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
