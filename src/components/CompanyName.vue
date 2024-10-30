<script setup>
    import { store } from './store.js';
    
    const name = "FirmaX"
</script>

<template>
    <div class="imgDiv">
        <img src="../assets/logo.svg" :alt="name">
        <!-- <h1 v-if="!store.isSidebarCollapsed">{{ name }}</h1> -->
        <h1>{{ name }}</h1>
    </div>
</template>

<style scoped>
    .imgDiv {
        display: flex;
    }
    
    img {
        width: 30px;
    }

    h1 {
        font-size: 1.7rem;
        margin-bottom: 0;
        padding-left: 5px;
    }
</style>
