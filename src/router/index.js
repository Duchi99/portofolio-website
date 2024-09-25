// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // Catch-all route to redirect any unmatched routes to "/"
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
