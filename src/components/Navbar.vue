<script setup>
  // import { ref } from "vue";

  import ThemePicker from "./ThemePicker.vue";
  import LoggedUser from "./LoggedUser.vue";
  import CompanyName from "./CompanyName.vue";
  import SearchBar from "./HiddenSearchBar.vue";

  import { store } from './store.js';

  const showHiddenSearchbar = () => {
        document.getElementById("hiddenSearchBar").style.display = "block";
    };
</script>

<template>
    <div class="navbarLeft">
        <!-- <button class='btn btnTheme' @click="store.toggleSidebar"><i class="bi bi-list"></i></button> -->
        <i class="bi bi-list" @click="store.toggleSidebar"></i>
        <CompanyName/>     
    </div>

    <div class="navbarMiddle">
        <input class="form-control" type="search" placeholder="Hledat..." aria-label="Search">
    </div>

    <div class="navbarRight">
        <div class="searchIcon">
            <i class="bi bi-search" @click="showHiddenSearchbar()"></i>
        </div>      
        <ThemePicker/>
        <i class="bi bi-bell-fill"></i>
        <i class="bi bi-gear"></i>
        <LoggedUser/>
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

  .searchIcon {
        display:none;
        cursor: pointer;
    }

  @media (max-width: 768px) { 
    .navbarMiddle {
      display: none;
    }  

    .searchIcon {
        display:block;
    }
  }
</style>
