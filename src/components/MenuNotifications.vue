<script setup>
    import { ref, computed, reactive } from "vue";
    import LoggedUser from "./LoggedUser.vue";

    import { store } from "./store";
</script>

<template>
    <div class="menuUserDetailWrapper">
        <h5>Oznámení</h5>
        <hr>
        <div v-if="!store.isLoggedUserLoading">
            <div v-if="store.loggedUser.registered.age > 0">
                <p>
                    Počet oznámení z API: {{ store.loggedUser.registered.age }}
                </p>
                <div v-if="!store.isLoggedUserLoading">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque adipisci tempora, consectetur tenetur fugit nisi harum architecto inventore, fuga excepturi error in mollitia cupiditate ab magnam necessitatibus facilis maiores.
                    <hr>
                </div>
            </div>
        </div>

    </div>
</template>
  
<style scoped>
    .menuUserDetailWrapper {
        padding: 10px;
        /* display: grid; */

    }

    .loggedUser img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
</style>