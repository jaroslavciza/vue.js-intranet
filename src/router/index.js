import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/users/",
        name: "users",
        component: UsersView,
      },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView,
      },    
  ],
});

export default router;
