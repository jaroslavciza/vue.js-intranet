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
        <LoggedUser/>
        <br>
        <!-- <hr> -->
        <div v-if="!store.isLoggedUserLoading" class="userDetails">

            @{{ store.loggedUser.login.username }} <br>
            Zobrazit profil
            <hr>
        </div>
            Nastavení<br>
            Ohlásit se
    </div>
</template>
  
<style scoped>
    .menuUserDetailWrapper {
        padding: 10px;
        /* display: grid; */

    }

    .userDetails {
        
    }

    .loggedUser img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
</style>