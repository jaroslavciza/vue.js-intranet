<script setup>
    import { reactive, onMounted } from 'vue';
    
    // const urlAPI = "https://fakestoreapi.com/users?limit=9";
    const urlAPI = "https://randomuser.me/api/?results=19&nat=gb";

    const state = reactive({
        users: {},
        isLoading: true,
    });

    const uo = ["ÚO Ústí nad Labem", "ÚO Děčín", "ÚO Teplice", "ÚO Most", "ÚO Chomutov", "ÚO Litoměřice", "ÚO Žatec"];
    const randomUOindex = () => {
        return (Math.floor(Math.random() * 6));
    }
    const isUserStarting = (user) => {
        return user.name.title == "Mr"
    }
    const randomDate = () => {
        const todayDate  = new Date() 
        todayDate.setDate(todayDate.getDate() + Math.floor(Math.random()*60));
        return todayDate.toLocaleDateString();
    }

    onMounted(async () => {
        try {
            const response = await fetch(urlAPI);
            const json = await response.json();
            state.users = json.results;
        } catch (error) {
            console.error('Error fetching users', error);
        } finally {
            state.isLoading = false;
        }
    });

</script>

<template>
    <h2>Personální změny</h2>
    <div v-if="state.isLoading">
        Načítají se data...
    </div>
    <div v-else>
        <!-- <div class="users" :class={"userStart": isUserStarting(user)} v-for="user in state.users"> -->
        <div v-for="user in state.users"
            :key="user.name.last" 
            class="users my-2 p-2" 
            :class="{ userStart: isUserStarting(user), userEnd: !isUserStarting(user) }">     
            
            <div>
                {{ randomDate() }}

            </div>
            <div>

                <span v-if="isUserStarting(user)"> nastoupí {{ user.name.first }} {{ user.name.last }} do </span>     
                <span v-else> končí služební poměr {{ user.name.first }} {{ user.name.last }} z </span>     
                {{ uo[randomUOindex()] }}
            </div>
        </div>
    </div>    

</template>

<style scoped>
    .users {
        display: flex;
        /* grid-row: 1; */
        gap: 5px;
        color: #222;
    }

    .userStart{
        background-color: lightgreen;
    }
    .userEnd {
        background-color: lightcoral;
    }
</style>