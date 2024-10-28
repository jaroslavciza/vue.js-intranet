<script setup>
    import { onMounted, ref } from "vue";
    import { store } from './store.js';

    // const isDarkPreffered = ref(null);

    onMounted ( () => {
        const userHasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches; //OS preference settings for dark mode

        if (userHasDarkPreference) {
            // isDarkPreffered.value = true;
            document.documentElement.className = "dark-theme";
            store.isDarkTheme = true;
        } else {
            // isDarkPreffered.value =  false;
            store.isDarkTheme = false;
            document.documentElement.className = "light-theme";
        }
    });

</script>

<template>
    <i :class="store.isDarkTheme ? 'bi bi-sun' : 'bi bi-moon'" @click="store.toggleTheme" style="cursor: pointer"></i>
</template>
  
<style>

</style>