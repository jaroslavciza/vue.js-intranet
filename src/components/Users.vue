<script setup>
  import { onMounted, ref, reactive } from "vue";
  // import { store } from './store.js';

  import UserCard from "./UserCard.vue";

  const status = ref("active");
  const tasks = ref(["Úkol 1", "Úkol 2", "Úkol 3"]);
  const urlUsersAPI = "https://randomuser.me/api?results=10";

  const state = reactive({
    users: [],
    isLoading: true,
  });

  onMounted(async () => {
    try {
      const response = await fetch(urlUsersAPI);
      const json = await response.json();
      state.users = json.results;
      //console.log(json.results);
    } catch (error) {
      console.error('Error fetching users', error);
    } finally {
      state.isLoading = false;
      //console.log(state.users);
      //console.log (typeof(testUser));
    }
  });
</script>

<template>
  <div class="users">
    <h2>Uživatelé</h2>
    <div class="userList">
      <UserCard v-for="(user, index) in state.users" :key="index" :user="user"/>
    </div>
    <!-- {{ state.users }} -->
     
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
