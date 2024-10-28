<script setup>
    import { ref } from "vue";

    import CompanyName from "./CompanyName.vue";
    import SidebarMenu from "./SidebarMenu.vue";

    import { store } from './store.js';
</script>

<template>
    <!-- {{ store.isSidebarCollapsed }} -->
    <div class="sideBar" :style="{width: store.isSidebarCollapsed ? '25px' : '200px'}">
        <div class="sidebarTop">
            <CompanyName/>
            <hr>
            <SidebarMenu/>
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
    width: 100%;
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
</style>