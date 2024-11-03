<script setup>
    import { ref, computed, reactive } from "vue";
    import LoggedUser from "./LoggedUser.vue";

    import { store } from "./store";

    // const state = reactive({
    //     isLoading: true,
    // });

    // const loggedUserName = computed(() => {
    //     return store.loggedUser.name.first + " " + store.loggedUser.name.last
    // });

</script>

<template>
    <div class="menuUserDetailWrapper">
        <LoggedUser :isNameDisplayResponsive="false"/>
        <br>
        <!-- <hr> -->
        <div v-if="!store.isLoggedUserLoading" class="userDetails">

            @{{ store.loggedUser.login.username }} <br>
            <i class="bi bi-person-fill"></i> Zobrazit profil
            <hr>
        </div>
        <i class="bi bi-gear"></i> Nastavení<br>
        <i class="bi bi-box-arrow-right"></i> Ohlásit se
    </div>
</template>
  
<style scoped>
    .menuUserDetailWrapper {
        padding: 10px;
        /* display: grid; */

    }

    .menuUserDetailWrapper i {
        padding-right: 5px;
        
    }

    .loggedUser img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
</style>