<script setup>
    import ThemePicker from "./ThemePicker.vue";
    import LoggedUser from "./LoggedUser.vue";
    import CompanyName from "./CompanyName.vue";

    import { defineProps } from 'vue';
    const props = defineProps({
        toggleSidebar: {
            type: Function,
            required: true,
        },
        toggleHiddenSearchbar: {
            type: Function,
            required: true,
        }   
    });
</script>

<template>
    <div class="navbarLeft">
        <i class="bi bi-list" @click="toggleSidebar"></i>
        <CompanyName/>     
    </div>

    <div class="navbarMiddle">
        <input class="form-control" type="search" placeholder="Hledat..." aria-label="Search">
    </div>

    <div class="navbarRight">
        <div class="searchIcon">
            <i class="bi bi-search" @click="toggleHiddenSearchbar"></i>
        </div>      
        <ThemePicker/>
        <i class="bi bi-bell-fill"></i>
        <i class="bi bi-gear"></i>
        <LoggedUser/>
    </div>
</template>

<style>
  .navbarLeft {   
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .navbarLeft i {
    font-size: 2rem;
    cursor: pointer;
  }


  .navbarRight {   
    display: flex;
    align-items: center;
    gap: 15px;
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
