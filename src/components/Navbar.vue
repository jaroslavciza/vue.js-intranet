<script setup>
    import ThemePicker from "./ThemePicker.vue";
    import LoggedUser from "./LoggedUser.vue";
    import CompanyName from "./CompanyName.vue";

    import { defineProps } from 'vue';
    import { store } from "./store";

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
        <div v-if="(!store.isLoggedUserLoading)" class="relative" @click="store.toggleMenuNotificationsVisibility">
        
            
            
            
            <i class="bi bi-bell-fill"></i>
            <div v-if="(store.loggedUser.registered.age > 0)">
                <span class="notificationsNumber" v-if="(store.loggedUser.registered.age < 100)">
                    {{ store.loggedUser.registered.age }}
                </span>
                <span class="notificationsNumber" v-else>99</span>
            </div>
        </div>

        <div @click="store.toggleMenuUserDetailVisibility" class="loggedUser">
            <LoggedUser/>
        </div>
    </div>
</template>

<style scoped>
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

    .navbarRight i {
        cursor: pointer;
    }    

    .loggedUser {
        cursor: pointer;
    }

    .relative {
        position: relative;
    }
    .notificationsNumber {
        cursor: pointer;
        position: absolute;
        top: -9px;
        right: -9px;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        
        font-size: 0.7rem;
        font-weight: bold;
        color: rgb(254 226 226);
        background-color: rgb(248 113 113);
        border-radius: 50%;

        width: 20px;                /* Minimální šířka kruhu */
        height: 20px;          

    }

    .searchIcon {
        display:none;
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
