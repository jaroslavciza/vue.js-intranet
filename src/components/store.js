import { reactive } from 'vue'
// import LoggedUser from './LoggedUser.vue';

export const store = reactive({
    isSidebarVisible: true,
    isDarkTheme: null, //light theme x dark theme variable
    //loggedUser: Object,

    toggleSidebar() {
        if (this.isSidebarVisible) {
            document.getElementById("sidebar").style.display = "none";
            this.isSidebarVisible = false;
        } else {
            document.getElementById("sidebar").style.display = "block";
            this.isSidebarVisible = true;
        }
    },

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