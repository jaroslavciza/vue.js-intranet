<script setup>
    import { ref } from "vue";
    import { RouterLink, useRoute } from 'vue-router';

    import { store } from './store.js';

    const isActiveMenuLink = (routePath) => {
        const route = useRoute();      
        const firstURLelement = "/"+ route.path.split("/")[1]
        const firstURLelementRoutePath = "/"+ routePath.split("/")[1]
        console.log (firstURLelement, firstURLelementRoutePath);
        //console.log (routePath);

        //return route.path === routePath;
        return firstURLelement == firstURLelementRoutePath;
    };

    const isActiveSubmenuLink = (routePath) => {
      const route = useRoute();
      //console.log(route.path);
      return route.path === routePath;
    return false;
    };    
    const menuSections = [
    {name: "Dashboard"},
    {name: "IT"},
        {name: "Majetek"},
        {name: "Organizace"},
        {name: "IZS"},
        {name: "PDF"},
        {name: "Skupinové e-maily"},      
        {name: "IT"},
        {name: "Majetek"},
        {name: "Organizace"},
        {name: "IZS"},
        {name: "PDF"},
        {name: "Skupinové e-maily"},              
    ];

    const menu = [
        {
            name: "Dashboard",
            url: "/",
            icon: 'bi bi-layout-text-window-reverse',
            submenu: [],
        },
        {
            name: "Organizace",
            url: "/organizace/uzivatele",
            icon: 'bi bi-building-fill',
            submenu: [
            {
                name: 'Uživatelé',
                url: "/organizace/uzivatele",
                icon: 'bi bi-people-fill',
            },
            {
                name: 'Počítače',
                url: "/organizace/pocitace",
                icon: 'bi bi-pc-display-horizontal',
            },            
            ]       
        },        
        {
            name: "Organizace",
            url: "/organizace/uzivatele",
            icon: 'bi bi-building-fill',
            submenu: [
            {
                name: 'Uživatelé',
                url: "/organizace/uzivatele",
                icon: 'bi bi-people-fill',
            },
            {
                name: 'Počítače',
                url: "/organizace/pocitace",
                icon: 'bi bi-pc-display-horizontal',
            },            
            ]       
        },
        {
            name: "Nastavení",
            url: "/settings",
            icon: 'bi bi-gear',
            submenu: [],
        }
    ];
</script>

<template>

    <div v-for="section in menuSections" class="menuItem">
        {{ section.name }}
        <hr>
    </div>


    <!-- <div :class="[isActiveMenuLink(menuItem.url) ? 'menuItemActive' : '', 'menuItem']" v-for="(menuItem) in menu" :key="menuItem.name">
        <hr  v-if="menuItem.submenu.length !== 0">
        <RouterLink :to="menuItem.url">
            <i :class="menuItem.icon"></i>
            <span v-if="!store.isSidebarCollapsed">{{ menuItem.name }}</span>
        </RouterLink>
        
        <div  v-if="menuItem.submenu.length !== 0">
            <div :class="[isActiveSubmenuLink(submenuItem.url) ? 'submenuItemActive' : '', 'menuItem']"  
                v-for="(submenuItem) in menuItem.submenu" :key="submenuItem.name">
                <RouterLink :to="submenuItem.url">
                    <i :class="submenuItem.icon"></i>
                    <span v-if="!store.isSidebarCollapsed">{{ submenuItem.name }}</span>      
                </RouterLink>          
            </div>               
        </div>
        <hr  v-if="menuItem.submenu.length !== 0">
    </div>      -->

</template>

<style scoped>
  .menuItem {
    /* width: 100%; */
    /* text-align: center; */
    padding: 5px;
  }

  .menuItemActive {
    background-color: var(--background-color-primary);
  }
  
  .submenuItemActive {
    background-color: var(--background-color-secondary);
    /* background-color: white; */
  }  

  a {
    text-decoration: none;

  }
  </style>
