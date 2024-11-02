import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";
import ComputersView from "../views/ComputersView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "home",
        component: HomeView,
      },
      // {
      //   path: "/organizace",
      //   name: "organization",
      //   component: UsersView,
      // },      
      {
        path: "/organizace",
        //name: "organization",
        //component: HomeView,
        children: [
          // {
          //   path: '',
          //   component: UsersView,
          // },             
          {
            path: "uzivatele",
            component: UsersView,
          },  
          {
            path: 'pocitace',
            component: ComputersView,
          },        
               
        ]     
      },
      // {
      //   path: "/organizace/pocitace",
      //   name: "computers",
      //   component: ComputersView,
      // },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView,
      },    
  ],
});

export default router;
