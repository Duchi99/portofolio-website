<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Section -->
    <header class="bg-gray-800 text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hey, I'm Robert</h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          A web developer passionate about building cool stuff and solving
          real-world problems with code.
        </p>
      </div>
    </header>

    <!-- About Me Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">A Little Bit About Me</h2>
        <p class="text-lg max-w-3xl mx-auto mb-4">
          I’m a 25-year-old software developer with a passion for creating
          awesome web applications. Over the last few years, I’ve been diving
          deep into technologies like JavaScript, Vue.js, Node.js, and AWS.
          Whether it's front-end magic with Vue or wrangling back-end APIs, I
          love making the web more fun and functional.
        </p>
      </div>
    </section>

    <!-- Skills Section with Hover Animation -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">What I Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Skill 1 -->
          <div
            class="p-6 bg-white rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-800"
          >
            <h3 class="text-xl font-semibold mb-4">Web Development</h3>
            <p>
              From building modern front-ends with Vue.js to designing scalable
              APIs, I’ve got you covered.
            </p>
          </div>

          <!-- Skill 2 -->
          <div
            class="p-6 bg-white rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-800"
          >
            <h3 class="text-xl font-semibold mb-4">AWS & Cloud</h3>
            <p>
              Deploying web apps and managing cloud infrastructure on AWS is
              where I thrive.
            </p>
          </div>

          <!-- Skill 3 -->
          <div
            class="p-6 bg-white rounded-lg shadow-lg border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-800"
          >
            <h3 class="text-xl font-semibold mb-4">Problem Solving</h3>
            <p>
              I’m all about finding efficient, creative solutions to coding
              challenges.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fun Facts Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Fun Facts About Me</h2>
        <p class="text-lg max-w-3xl mx-auto mb-4">
          🌱 I’m constantly trying new things – right now, I’m getting into
          freelancing.
        </p>
        <p class="text-lg max-w-3xl mx-auto mb-4">
          🎮 I’m a huge gaming fan and love diving into automation games.
        </p>
        <p class="text-lg max-w-3xl mx-auto mb-4">
          ☕ Coffee keeps me going, especially when I'm in the middle of
          debugging!
        </p>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Robert Duncan. All rights reserved.</p>
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
  name: "About",
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
