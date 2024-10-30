<script setup>
    import { ref } from "vue";
    import { RouterLink, useRoute } from 'vue-router';

    import { store } from './store.js';

    // const isActiveSectionLink = (routePath) => {
    //     const route = useRoute();      
    //     const firstURLelement = "/"+ route.path.split("/")[1]
    //     const firstURLelementRoutePath = "/"+ routePath.split("/")[1]
    //     console.log (firstURLelement, firstURLelementRoutePath);
    //     //console.log (routePath);

    //     //return route.path === routePath;
    //     return firstURLelement == firstURLelementRoutePath;
    // };

    const isActiveMenuLink = (routePath) => {
      const route = useRoute();
      return route.path === routePath;
    };    
    
    const menu = [
        // {id:0, name: "Dashboard", menuItems: []},
        {
            id:1, 
            name: "IT", 
            menuItems: [
                {
                    name: "Uživatelé",
                    icon: 'bi bi-people-fill',
                    url: "/organizace/uzivatele",
                },
                {
                    name: 'Počítače',
                    url: "/organizace/pocitace",
                    icon: 'bi bi-pc-display-horizontal',
                },           
            ]
        },
        {
            id:2, 
            name: "Majetek", 
            menuItems: [
                {
                    name: "Vyřazení",
                    icon: 'bi bi-file-earmark-x',
                    url: "/majetek/vyrazeni",
                },                
                {
                    name: "Předávací protokol",
                    icon: 'bi bi-file-earmark-text',
                    url: "/majetek/predani",
                },
                {
                    name: "Nomenklatury",
                    icon: 'bi bi-file-earmark-binary',
                    url: "/majetek/nomenklatury",
                },                
            ]
        },
        {   
            id:3, 
            name: "Organizace",
            menuItems: [
                {
                    name: "Rezervace místností",
                    icon: 'bi bi-building-fill-lock',
                    url: "/organizace/rezervace",
                },
                {
                    name: 'Kalendář',
                    url: "/organizace/kalendar",
                    icon: 'bi bi-calendar-date',
                }, 
            ]
        },
        {id:4, name: "IZS", menuItems: []},
        {id:5, name: "PDF", menuItems: []},
        {id:6, name: "Skupinové e-maily", menuItems: []},            
    ];  
</script>

<template>
    <!-- <div v-if="!store.isSidebarVisible"> -->
        <div :class="[isActiveMenuLink('/')? 'menuItemActive':'', 'menuSection']">
            <RouterLink to="/">
                <h2>Dashboard</h2>
            </RouterLink>      
        </div>
        <hr>  
        <!-- <div v-for="section in menu" :class="[isActiveMenuLink(section.url)? 'menuItemActive':'', 'menuSection']"> -->
        <div v-for="section in menu" class="menuSection">
            <h2>{{ section.name }}</h2>
            <div  v-for="menuItem in section.menuItems" :class="[isActiveMenuLink(menuItem.url)? 'menuItemActive':'', 'menuItem'] ">
                <RouterLink :to="menuItem.url">
                    <i :class="menuItem.icon"></i> {{ menuItem.name }}
                </RouterLink>
            </div>
            <hr>
        </div>
    <!-- </div> -->
            

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
    .menuSection {
        /* border-bottom: 1px solid #222; */
        /* padding: 10px 5px 10px 10px; */
        padding: 0 10px 0 10px;

    }

    .menuItem {
        padding:15px;
        cursor: pointer;
    }

    .menuItemActive {
        background-color: var(--background-color-secondary);
        border-radius: 15px;
    }
    
    .submenuItemActive {
        background-color: var(--background-color-secondary);
    }  

    h2 {
        font-size: 1.3rem;
        padding: 10px;
        margin-bottom: 0;
    }

    hr {

    }
    a {
        text-decoration: none;
        color: var(--text-color-primary);
    }
  </style>
