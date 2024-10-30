<script setup>
  // import { ref } from "vue";

  import ThemePicker from "./ThemePicker.vue";
  import LoggedUser from "./LoggedUser.vue";
  import CompanyName from "./CompanyName.vue";

  import { store } from './store.js';


</script>

<template>
    <div class="navbarLeft">
        <!-- <button class='btn btnTheme' @click="store.toggleSidebar"><i class="bi bi-list"></i></button> -->
        <i class="bi bi-list"></i>
        <CompanyName/>     
    </div>

    <div class="navbarMiddle">
        <input class="form-control" type="search" placeholder="Hledat..." aria-label="Search">
    </div>

    <div class="navbarRight">
        <ThemePicker/>
        <LoggedUser/>
        <i class="bi bi-bell-fill"></i>
        <i class="bi bi-gear"></i>
    </div>
</template>

<style>
  .navbarLeft {   
    /* width: 256px; */
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .navbarLeft i {
    font-size: 2rem;
    cursor: pointer;
  }
  /* .navbarLeft button {
    border: solid 1px var(--button-border-color);
  } */

  .navbarRight {   
    display: flex;
    align-items: center;
    gap: 15px;
    /* justify-content: space-between; */
  }  

  .name {
    padding: 0 10px 0 10px;
    border-left: 1px solid var(--text-color-primary);
    border-right: 1px solid var(--text-color-primary);
  }

  @media (max-width: 768px) { 
    .name {
      display: none;
    }  
  }
</style>
