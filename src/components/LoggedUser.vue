<script setup>
    import { onMounted } from "vue";

    import { store } from './store.js';

    // const state = reactive({
    //     user: {},
    //     // loggedUserName: "",
    //     // loggedUserThumbnail: "",
    // });

    // const urlUsersAPI = "https://randomuser.me/api";
    const urlUsersAPI = "https://randomuser.me/api/?seed=seed"; //retezec seed vrátí konkretni zaznam API (Ryder Singh)

    onMounted(async () => {
        try {
            const response = await fetch(urlUsersAPI);
            const json = await response.json();

            // state.loggedUserName = await json.results[0].name.first + " " + json.results[0].name.last;
            // state.loggedUserThumbnail = await json.results[0].picture.thumbnail;

            store.setLoggedUser (await json.results[0])
            //store.loggedUser = await json.results[0];
        } catch (error) {
            console.error('Error fetching users', error);
        } finally {
            //store.isLoggedUserLoading = false;
        }
    });
</script>

<template>
        <div v-if="store.isLoggedUserLoading" class="loggedUser">
            <i class="bi bi-person-circle"></i> Přihlásit se
        </div>
        <div v-else class="loggedUser"> 

            <div v-if="store.loggedUserThumbnail !== ''">
                <img :src="store.loggedUserThumbnail" class="">
            </div>
            <div v-else class="fs-3 ">
                <i class="bi bi-person-circle"></i>
            </div>
            <span class="loggedUserName">
                {{ store.loggedUserFullName }}
            </span>
        </div>
</template>

<style scoped>
    .loggedUser {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .loggedUser img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    @media (max-width: 768px) { 
        .loggedUserName {
        display: none;
        }  
    }
</style>
