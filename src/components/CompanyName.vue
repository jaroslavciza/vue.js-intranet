<script setup>
    import { store } from './store.js';
    
    const name = "MojeFirmaX"
</script>

<template>
    <div class="imgDiv">
        <img src="../assets/logo.svg" :alt="name">
        <h1 v-if="!store.isSidebarCollapsed">{{ name }}</h1>
    </div>
</template>

<style scoped>
    .imgDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.8;
        padding-top: 5px;
    }
    
    img {
        width: 30px;
        /* margin-right: 5px; */
    }

    h1 {
        font-size: 1.7rem;
        line-height: 1;
        margin: 0;
        padding-left: 5px;
        /* padding: 0; */
        /* margin-block-start: 0; */
    }
</style>
