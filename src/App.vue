<script setup>
    // import { ref } from "vue";
    import { RouterView } from 'vue-router';

    import Sidebar from "./components/Sidebar.vue";
    import Navbar from "./components/Navbar.vue";
    import SearchBar from "./components/HiddenSearchBar.vue";
    // import Dashboard from "./components/Dashboard.vue";

    import { store } from './components/store.js';

</script>

<template>
    <div id="hiddenSearchBar">
        <SearchBar/>
    </div>     

    <div class="header">
        <Navbar/>
    </div>
    <div class="content">
        <div class="sidebar" id="sidebar"><Sidebar/></div>
        <div class="main"> <RouterView/></div>
    </div>

</template>

<style>
    html, body {
        margin: 0;
        padding: 0;
        min-height: 100svh;
        font-family: Arial, sans-serif;
        overflow: hidden;
    }

    #app {
        padding: 0;
    }

    .header {
        height: 60px;
        color: var(--text-color-primary);
        background-color:var(--background-color-primary);
        padding: 0 15px 0 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        display: flex;
        height: calc(100svh - 60px);
        padding-top: 5px;
        color: var(--text-color-primary);
        background-color:var(--background-color-primary);        
    }

    .sidebar {
        width: 255px;
        overflow-y: auto;
        /* padding: 15px 15px 0 15px; */
        scrollbar-width: thin;
        scrollbar-color: var(--background-color-secondary) var(--background-color-primary);     
    }

    #hiddenSearchBar {
        display: none;
        position: absolute;
        min-width: 100svw;
        top: 0;
        left: 0;
        padding: 0;
        background-color:var(--background-color-primary);
        /* background-color: rgba(150, 150, 150, .52);; */
    }

    .main {
        flex: 1;
        overflow-y: auto;
        padding: 0 15px 0 15px;
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
        /* --app-drawer-width: 256px; */
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
</style>

