import { reactive } from 'vue'

export const store = reactive({
    
    isDarkTheme: false, //light theme x dark theme variable, prenastavi se prvotne podle nastaveni OS
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.documentElement.className = this.isDarkTheme ? "dark-theme" : "light-theme";
    },
    
    loggedUser: {},
    isLoggedUserLoading: true,
    // Computed property pro celé jméno uživatele - pouzije se JS getter, ktery v reactive objektu vue sleduje jakoby byl computed
    get loggedUserFullName() {
        return `${this.loggedUser.name.first} ${this.loggedUser.name.last}`;
    },
    get loggedUserThumbnail() {
        return this.loggedUser.picture.thumbnail;
    },
    // Metoda pro nastavení uživatelských dat
    setLoggedUser(user) {
        this.loggedUser = user;
        this.isLoggedUserLoading = false; // Po nastavení uživatele se nastaví flag načítání dat na false
    }, 
    
    //nechavam to ve store, protoze nevim odkud se bude visibility ovladat, pokud jen z rodicovske komponenty navbar, asi bych ho presunul pouze tam, takhle je globalni v reactive store
    //hiddenSearchbar se tak da resit take, ale toho volam z app do navbaru...
    isMenuUserDetailVisible: false,
    toggleMenuUserDetailVisibility() {
        this.isMenuUserDetailVisible = !this.isMenuUserDetailVisible;
    },

})
// loggedUserName: loggedUser.name.first + " " + loggedUser.name.last,