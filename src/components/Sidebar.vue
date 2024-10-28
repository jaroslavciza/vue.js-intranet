<script setup>
    import { ref } from "vue";
    import { RouterLink, useRoute } from 'vue-router';

    import CompanyName from "./CompanyName.vue";
    import { store } from './store.js';

    const isActiveMenuLink = (routePath) => {
      const route = useRoute();
      return route.path === routePath;
    };

    const menu = ref([
        {
            name: "Dashboard",
            url: "/",
            icon: 'bi bi-layout-text-window-reverse'
        },
        {
            name: "Uživatelé",
            url: "/users",
            icon: 'bi bi-people-fill'
        },
        {
            name: "Nastavení",
            url: "/settings",
            icon: 'bi bi-gear'
        }
    ]);
</script>

<template>
    <!-- {{ store.isSidebarCollapsed }} -->
    <div class="sideBar" :style="{width: store.isSidebarCollapsed ? '30px' : '200px'}">
        <div class="sidebarTop">
            <CompanyName/>
            <hr>
            <div class="sidebarMenu">
                <div :class="[isActiveMenuLink(menuItem.url) ? 'menuItemActive' : '', 'menuItem']" v-for="(menuItem, index) in menu" :key="menuItem.name">
                  <RouterLink :to="menuItem.url">
                    <i :class="menuItem.icon"></i>
                    <span v-if="!store.isSidebarCollapsed">{{ menuItem.name }}</span>
                  </RouterLink>
                </div>   
                
            </div>
        </div>

        <div class="sidebarBottom">
            <hr>
            © 2024
        </div>
    </div>
</template>

<style scoped>
  .sideBar {
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;
    height: 100%;
    transition: all 300ms;
  }

  hr {
    /* border: 1px solid red; */
    width: 100%;
    /* margin-bottom: 5px; */
  }

  .menuItem {
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  .menuItemActive {
    background-color: var(--background-color-primary);
  }

  a {
    text-decoration: none;
  }

  .sidebarTop {   
    display: flex;
    flex-direction: column;
  }

  .sidebarBottom {   
    font-size: 0.5rem;
    width: 100%;
    text-align: center;
    /* display: flex;
    gap: 10px;
    justify-content: space-between; */
  }  

  .sidebarMenu {   
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 15px; */
  }  
  

</style>