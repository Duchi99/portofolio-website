<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <header
      class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16"
    >
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Awesome App
        </h1>
        <p class="text-xl mb-8">
          Building solutions that empower people and businesses.
        </p>
        <router-link
          to="/services"
          class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </router-link>
      </div>
    </header>

    <!-- Features Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="mb-4">
              <svg
                class="w-12 h-12 text-blue-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m2 4H7m2-8h6M5 21h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Fast Performance</h3>
            <p>Experience lightning-fast load times and smooth interactions.</p>
          </div>

          <!-- Feature 2 -->
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="mb-4">
              <svg
                class="w-12 h-12 text-blue-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h1m0 0h-1V9h1m1 12H9a2 2 0 01-2-2v-3a2 2 0 012-2h5a2 2 0 012 2v3a2 2 0 01-2 2zm0-6h2a2 2 0 012 2v3a2 2 0 01-2 2H9a2 2 0 01-2-2v-3a2 2 0 012-2h2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Secure Platform</h3>
            <p>
              Our infrastructure ensures your data is protected at all times.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="mb-4">
              <svg
                class="w-12 h-12 text-blue-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m5-3A9 9 0 113 12a9 9 0 0114.52-6.036M12 22a10 10 0 100-20 10 10 0 000 20z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">24/7 Support</h3>
            <p>We’re always here to help, no matter the time of day.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 My Awesome App. All rights reserved.</p>
        <p class="text-sm mt-2">
          <router-link to="/privacy" class="hover:underline"
            >Privacy Policy</router-link
          >
          |
          <router-link to="/terms" class="hover:underline"
            >Terms of Service</router-link
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
