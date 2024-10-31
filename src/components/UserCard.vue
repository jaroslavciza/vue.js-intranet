<script setup>
    import { defineProps } from 'vue';
    import { store } from './store.js';

    defineProps({
        user: {
            type: Object,
            default: {},
        }
    });

    // const showUser = () => {
    //     console.log(props);
    //     //return true;
    // };
    
    const showUser = () => {
        console.log(props)
    };


</script>

<template>
  <div class="userDetail">
    <div class="card cardTheme">
        <img :src="user.picture.large" class="card-img-top">
        <!-- <div :class="[ store.isDarkTheme ? 'bg-dark' : '', 'card-body']"> -->
        <div class="card-body">
            <h5 :class="['card-title', store.isDarkTheme ? 'text-light' : '']">{{ user.name.first }} {{ user.name.last }}</h5>
            <p>{{ user.location.street.name }} {{ user.location.street.number }}<br>
                {{ user.location.postcode }} {{ user.location.state }} <br>
                {{ user.location.country }}
            </p>
            <p>
                {{ user.phone }} <br>
                {{ user.cell }} <br>
                {{ user.email }}
                {{ user.id.value }}
            </p>
            <a :href="'/organizace/uzivatel/'+user.id.value" class="btn btnTheme">Detail uživatele</a>
        </div>
    </div>     
  </div>
</template>
  
<style>
    .cardTheme {
        background-color: var(--background-color-secondary);
        /* border-color: var(--text-color-primary); */
        box-shadow: 0 0 10px var(--shadow-color-secondary);
        color: var(--text-color-primary);
        padding: 0.8rem 0 0.8rem 0;
    }

    .card-img-top{
        width: 35%;
        border-radius: 50%;
        margin: 0 auto;
        box-shadow: 0 0 15px var(--shadow-color-secondary);
        /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) ; */
    }
    .userDetail {
        padding: 5px;
        flex:1;
    }
</style>
