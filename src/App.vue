<script setup>
// import { ref } from "vue";
import { RouterView } from 'vue-router';

import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
// import Dashboard from "./components/Dashboard.vue";

// import { store } from './components/store.js';

</script>

<template>
  <!-- {{ store.isSidebarCollapsed }} -->
  <div class="mainWrapper">
    <div class="sidebarWrapper">
      <Sidebar/>
    </div>
    <div class="dashboardWrapper">
      <Navbar/>
      <RouterView />
    </div>
  </div>
  
</template>

<style>

  body,html {
    /* width:100%; */
    /* margin: 0; */
    /* padding: 0; */
    /* font-size: 1rem; */
  }
  
  #app {
    padding: 0;
  }

  :root {
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --input-color-primary: #fafafa;
    --text-color-primary: #222;
    --button-border-color: #dee2e6;
    --button-color: #dee2e6;
    --shadow-color: rgba(0, 0, 255, .075);
    /* --shadow-color-secondary: #222; */
    --shadow-color-secondary: rgba(50, 50, 50, .2);
  }

  :root.dark-theme {
    --background-color-primary: #2d2d30;
    --background-color-secondary: #1e1e1e;    
    --input-color-primary: #2d2d30;
    --text-color-primary: #ddd;
    --button-border-color: #dee2e6;
    --button-color: #dee2e6;
    --shadow-color: rgba(255, 255, 255, .075);
    /* --shadow-color-secondary: #ddd; */
    --shadow-color-secondary: rgba(200, 200, 200, .2);
  }  

  a {
    color: var(--text-color-primary);
    font-weight: 500;
  }

  .mainWrapper {
    /* color: #393e46; */
    color: var(--text-color-primary);
    background-color:var(--background-color-primary);
    display: flex;
    height: 100vh;
    /* min-height: 100vh; */
    /* width: 100%; */
    /* justify-content: space-between; */
    /* gap: 10px; */
    /* margin: auto; */    
    /* padding: 5px; */
  }

  .bi {
    color: var(--text-color-primary);
    padding-right: 5px;
    padding-left: 5px;
  }

  .form-control {
    background-color: var(--input-color-primary);
    color: var(--text-color-primary);
  }

  .form-control::placeholder{
    color: var(--text-color-primary);
  }

  .btnTheme {
    border-color: var(--button-border-color);
    color: var(--text-color-primary);
    background-color: var(--background-color-secondary);
  }

  .btnTheme:hover {
    background-color: var(--background-color-primary);
    border-color: var(--button-border-color);
    color: var(--button-color-primary);
  }

  .sidebarWrapper {
    padding: 15px;
    background-color: var(--background-color-secondary);
    box-shadow: 0 0 4px 1px var(--shadow-color);
    /* box-shadow: 0 0 4px 1px rgba(0, 0, 255, .075); */
  }

  .dashboardWrapper {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* align-items: center; */
  }

</style>

