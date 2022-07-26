import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/about", component: About },
  ],
  history: createWebHistory(),
});

export default router;
