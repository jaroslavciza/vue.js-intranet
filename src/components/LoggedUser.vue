<script setup>
    import { onMounted, defineProps } from "vue";

    import { store } from './store.js';

    // const state = reactive({
    //     user: {},
    //     // loggedUserName: "",
    //     // loggedUserThumbnail: "",
    // });

    const props = defineProps({
        isNameDisplayResponsive: {
            type: Boolean,
            default: true,
        },
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
            <span :class="props.isNameDisplayResponsive ? 'loggedUserName' : ''">
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
