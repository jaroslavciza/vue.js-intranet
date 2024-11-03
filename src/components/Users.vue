<script setup>
  import { onMounted, ref, reactive } from "vue";
  // import { store } from './store.js';

  import UserCard from "./UserCard.vue";

  const urlUsersAPI = "https://randomuser.me/api?results=10&nat=gb";

  const state = reactive({
    users: [],
    isLoading: true,
  });

  onMounted(async () => {
    try {
      const response = await fetch(urlUsersAPI);
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
  <h2>Uživatelé</h2>
  <div class="users">
    <div v-if="state.isLoading">
        Načítají se data...
    </div>    
    <div v-else class="userList">
        <UserCard v-for="(user, index) in state.users" :key="index" :user="user"/>
    </div>   
  </div>
</template>
  
<style>
  .users {
    flex: 1; 
    overflow-y: auto;
    overflow-x: auto;
  }

  .userList {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
</style>
