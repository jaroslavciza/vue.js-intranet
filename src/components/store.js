import { reactive } from 'vue'
// import LoggedUser from './LoggedUser.vue';

export const store = reactive({
    isSidebarCollapsed: false,
    isDarkTheme: null, //light theme x dark theme variable
    //loggedUser: Object,

    toggleSidebar() {
        if (this.isSidebarCollapsed) {
            this.isSidebarCollapsed = false;
        } else {
            this.isSidebarCollapsed = true;
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