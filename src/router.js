import { createRouter, createWebHistory } from "vue-router";
import main from "@/pages/main.vue";
import bio from "@/pages/bio.vue";

const routes = [
  { path: "/", name: "home", component: main },
  { path: "/contact/", name: "contact", component: bio }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
