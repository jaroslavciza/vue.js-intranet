<script setup>
    import { defineProps} from 'vue';

    const props = defineProps({
        toggleHiddenSearchbar: {
            type: Function,
        }   
    });
</script>

<template>
    <div class="searchbarWrapper">   
        <div class="navbarLeft">
            <i class="bi bi-arrow-left" @click="toggleHiddenSearchbar"></i>
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

        height: var(--header-height);
        padding: 0 15px 0 15px;   
        color: var(--text-color-primary);
    }

    .navbarLeft i {
        font-size: 2rem;
        cursor: pointer;
    }    
</style>
