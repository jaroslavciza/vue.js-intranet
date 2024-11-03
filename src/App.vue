<script setup>
    import { ref, computed, onMounted, onBeforeUnmount } from "vue";
    import { RouterView } from 'vue-router';

    import Sidebar from "./components/Sidebar.vue";
    import Navbar from "./components/Navbar.vue";
    import HiddenSearchBar from "./components/HiddenSearchBar.vue";
    import MenuUserDetail from "./components/MenuUserDetail.vue";
    import MenuNotifications from "./components/MenuNotifications.vue";

    import { store } from "./components/store";

    const isSidebarVisible = ref(window.innerWidth > 768);     
    const toggleSidebar = () => {
        isSidebarVisible.value = !isSidebarVisible.value;
    };  
    
    const isHiddenSearchbarVisible = ref(false);
    const toggleHiddenSearchbar = () => {
        isHiddenSearchbarVisible.value = !isHiddenSearchbarVisible.value;
    };  

    // const isMenuUserDetailVisible = ref(true);
    // const toggleMenuUserDetail = () => {
    //     isMenuUserDetailVisible.value = !isMenuUserDetailVisible.value;
    // }; 

    //zmen viditelnost na zaklade rozliseni
    const handleResize = () => {
        isSidebarVisible.value = window.innerWidth >= 768;
    };    

    // Když se komponenta načte, nastaví se počáteční stav a přidám listener na zemnu rozliseni
    onMounted(() => {
        handleResize();
        window.addEventListener('resize', handleResize); 
    });

    // Odstraní se listener při zničení komponenty
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
    });

    const urlUsersAPI = "https://randomuser.me/api?nat=gb";
    // const urlUsersAPI = "https://randomuser.me/api/?seed=seed"; //retezec seed vrátí konkretni zaznam API (Ryder Singh)
    onMounted(async () => {
        try {
            const response = await fetch(urlUsersAPI);
            const json = await response.json();
            
            store.setLoggedUser (await json.results[0])
        } catch (error) {
            console.error('Error fetching users', error);
        } finally {
            //store.isLoggedUserLoading = false;
        }
    });    
</script>

<template>
    <!-- zkousim oboje volani jak ze store tak do child komponenty -->
    <div id="hiddenSearchBar" v-if="isHiddenSearchbarVisible">
        <HiddenSearchBar :toggleHiddenSearchbar="toggleHiddenSearchbar"/>
    </div>  
    <div id="menuUserDetail" v-if="store.isMenuUserDetailVisible">
        <!-- <MenuUserDetail :toggleMenuUserDetail="toggleMenuUserDetail"/> -->
        <MenuUserDetail/>
    </div>  
    <div id="menuNotifications" v-if="store.isMenuNotificationsVisible">
        <!-- <MenuUserDetail :toggleMenuUserDetail="toggleMenuUserDetail"/> -->
        <MenuNotifications/>
    </div>      

    <div class="header">
        <Navbar :toggleSidebar="toggleSidebar"  :toggleHiddenSearchbar="toggleHiddenSearchbar"/>
    </div>
    <div class="content">
        <div class="sidebar" id="sidebar" v-show="isSidebarVisible"><Sidebar/></div>
        <div class="main"><RouterView/></div>
    </div>
</template>

<style>
    html, body {
        margin: 0;
        padding: 0;
        min-height: 100svh;
        font-family: Arial, sans-serif;
        font-size: 1rem;
        overflow: hidden;
    }

    #app {
        padding: 0;
    }

    .header {
        height: var(--header-height);
        color: var(--text-color-primary);
        background-color:var(--background-color-primary);
        padding: 0 15px 0 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        display: flex;
        height: calc(100svh - var(--header-height));
        color: var(--text-color-primary);
        background-color:var(--background-color-primary);        
    }

    .sidebar {
        width: 255px;
        position: relative;
        overflow-y: auto;
        padding-top: 5px;
        display: block;
        z-index: 1; 
        scrollbar-width: thin;
        background-color:var(--background-color-primary);
        scrollbar-color: var(--background-color-secondary) var(--background-color-primary);     
    }

    #hiddenSearchBar {
        position: absolute;
        min-width: 100svw;
        background-color:var(--background-color-primary);
    }

    #menuUserDetail {
        position: absolute;
        z-index: 2; 
        right: 15px;
        max-width: 300px;;
        top: var(--header-height);
        background-color:var(--background-color-primary);
        border: 1px solid var(--text-color-primary);
        border-radius: 10px;
        color: var(--text-color-primary);
    }    
    #menuNotifications {
        position: absolute;
        z-index: 2; 
        right: 15px;
        max-width: 300px;
        top: var(--header-height);
        background-color:var(--background-color-primary);
        border: 1px solid var(--text-color-primary);
        border-radius: 10px;
        color: var(--text-color-primary);
    } 
    .main {
        flex: 1;
        overflow-y: auto;
        padding: 5px 15px 0 15px;
        scrollbar-width: thin;
        scrollbar-color: var(--background-color-secondary) var(--background-color-primary);     
    }

    .btnTheme {
        background-color:var(--background-color-primary);     
        color: var(--text-color-primary)      
    }

    p {
        font-size: 0.8rem;
    }

    /*****************  Dark/light themes variables ****************/
    :root {
        --background-color-primary: #ebebeb;
        --background-color-secondary: #fafafa;
        --input-color-primary: #fafafa;
        --text-color-primary: #222;
        --button-border-color: #dee2e6;
        --button-color: #dee2e6;
        --shadow-color: rgba(0, 0, 255, .075);
        --shadow-color-secondary: rgba(50, 50, 50, .2);
        --header-height: 60px;
    }

    :root.dark-theme {
        --background-color-primary: #2d2d30;
        --background-color-secondary: #1e1e1e;
        --input-color-primary: #2d2d30;
        --text-color-primary: #ddd;
        --button-border-color: #dee2e6;
        --button-color: #dee2e6;
        --shadow-color: rgba(255, 255, 255, .075);
        --shadow-color-secondary: rgba(200, 200, 200, .2);
    }

    @media (max-width: 768px) { 
        .sidebar {
            position: absolute;
            z-index: 1;
            height: calc(100% - var(--header-height));
        }  
    }    
</style>

