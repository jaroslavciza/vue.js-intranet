<script setup>
    // import { ref } from "vue";
    import { RouterLink, useRoute } from 'vue-router';

    // import { store } from './store.js';

    const isActiveMenuLink = (routePath) => {
      const route = useRoute();
      return route.path === routePath;
    };    
    
    const menu = [
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
    <div :class="[isActiveMenuLink('/')? 'menuItemActive':'', 'menuSection']">
        <RouterLink to="/">
            <h2>Dashboard</h2>
        </RouterLink>      
    </div>
    <hr>  
    <div v-for="section in menu" class="menuSection">
        <h2>{{ section.name }}</h2>
        <div  v-for="menuItem in section.menuItems">
            <RouterLink :to="menuItem.url">
                <div  :class="[isActiveMenuLink(menuItem.url)? 'menuItemActive':'', 'menuItem'] ">
                    <i :class="menuItem.icon"></i> {{ menuItem.name }}
                </div>
            </RouterLink>
        </div>
        <hr>
    </div>
</template>

<style scoped>
    .menuSection {
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

    a {
        text-decoration: none;
        color: var(--text-color-primary);
    }
  </style>
