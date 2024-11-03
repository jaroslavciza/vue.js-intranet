// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router"; //hashhistory je kvuli github pages, kde není podpora pro server-side směrování
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";
import ComputersView from "../views/ComputersView.vue";
import NotFoundView from "../views/NotFoundView.vue";

import StaffChanges from "@/components/StaffChanges.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
            path: "personalni-zmeny",
            component: StaffChanges,
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
