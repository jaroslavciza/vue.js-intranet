<script setup>
    import { reactive, onMounted } from "vue";

    // import { store } from './store.js';

    const state = reactive({
        user: {},
        loggedUserName: "",
        loggedUserThumbnail: "",
    });

    const urlUsersAPI = "https://randomuser.me/api";

    onMounted(async () => {
        try {
            const response = await fetch(urlUsersAPI);
            const json = await response.json();

            state.loggedUserName = json.results[0].name.first + " " + json.results[0].name.last;
            state.loggedUserThumbnail = json.results[0].picture.thumbnail;
        } catch (error) {
            console.error('Error fetching users', error);
        } finally {
            //state.isLoading = false;
        }
    });
</script>

<template>

    <div class="loggedUser">
        <div v-if="state.loggedUserThumbnail !== ''">
            <img :src="state.loggedUserThumbnail" class="">
        </div>
        <div v-else class="fs-3 ">
            <i class="bi bi-person-circle"></i>
        </div>
        <span class="loggedUserName">
          {{ state.loggedUserName }}
        </span>
    </div>

</template>

<style scoped>
    .loggedUser {
        display: flex;
        gap: 10px;
        align-items: center;
        /* padding: 0 10px 0 10px; */
        /* border-left: 1px solid var(--text-color-primary);
        border-right: 1px solid var(--text-color-primary); */
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
