import { reactive } from 'vue'
// import LoggedUser from './LoggedUser.vue';

export const store = reactive({
    isDarkTheme: null, //light theme x dark theme variable

    toggleTheme() {
        if (this.isDarkTheme) {
            this.isDarkTheme = false;
            document.documentElement.className = "light-theme";
        } else {
            this.isDarkTheme = true;
            document.documentElement.className = "dark-theme";
        }
    }
})