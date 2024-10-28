<script setup>
  import { ref } from "vue";

  import ThemePicker from "./ThemePicker.vue";
  import LoggedUser from "./LoggedUser.vue";

  import { store } from './store.js';

  const name = ref("Pavel Bureš");
</script>

<template>
  <div class="navBar">
    <div class="navbarLeft">
      <!-- <button :class="store.isDarkTheme ? 'btn btn-dark' : 'btn btn-light'" @click="store.toggleSidebar"><i class="bi bi-list"></i></button> -->
      <button class='btn btnTheme' @click="store.toggleSidebar"><i class="bi bi-list"></i></button>
      <input class="form-control" type="search" placeholder="Hledat..." aria-label="Search">
      <!-- <CompanyName/> -->     
    </div>

    <div class="navbarRight">
      <ThemePicker/>
      <LoggedUser/>
      <i class="bi bi-bell-fill"></i>
      <i class="bi bi-gear"></i>
    </div>
  </div>
</template>

<style>
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-shrink: 0; */
    /* flex-shrink: 0; */
    /* width: 100%; */
  }

  .navbarLeft {   
    display: flex;
    gap: 15px;
    /* justify-content: space-between;  */
  }
  .navbarLeft button {
    border: solid 1px var(--button-border-color);
  }

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
