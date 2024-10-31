<script setup>
    const hideHiddenSearchBar = () => {
        document.getElementById("hiddenSearchBar").style.display = "none";
    }
</script>

<template>
    <div class="searchbarWrapper">   
        <div class="navbarLeft">
            <i class="bi bi-arrow-left" v-on:click="hideHiddenSearchBar"></i>
        </div>

        <div>
            <input class="form-control" type="search" placeholder="Hledat..." aria-label="Search">
        </div>

        <div></div>
    </div>
    </template>

<style scoped>
    .searchbarWrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 60px;
        padding: 0 15px 0 15px;   
        color: var(--text-color-primary);
    }
</style>
