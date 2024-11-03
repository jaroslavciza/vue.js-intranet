<script setup>
    import { reactive, onMounted } from 'vue';
    // const urlAPI = "https://jsonplaceholder.typicode.com/posts/1";
    const urlAPI = "https://fakestoreapi.com/products";

    const state = reactive({
        products: {},
        isLoading: true,
    });

    onMounted(async () => {
        try {
            const response = await fetch(urlAPI);
            const json = await response.json();
            state.products = json;
        } catch (error) {
            console.error('Error fetching products', error);
        } finally {
            state.isLoading = false;
        }
    });
</script>

<template>
    <h2>Počítače</h2>
    <div v-if="state.isLoading">
        Načítají se data...
    </div>
    <div class="container-fluid" v-else>
        <div class="row p-2">
            <div class="col-2"></div>
            <div class="col px-4">Název</div>
            <div class="col-2 text-center">Cena</div>
            <div class="col-2 text-center">Kategorie</div>
            <div class="col-1 text-center">Hodnocení</div>
        </div>
        <div class="row p-2" v-for="product in state.products">
            <div class="col-2 productImg"><img :src="product.image"></div>
            <div class="col px-4 my-auto">{{ product.title }} </div>
            <div class="col-2 my-auto text-center">{{ product.price }} Eur</div>
            <div class="col-2 my-auto text-center">{{ product.category }} </div>
            <div class="col-1 my-auto text-center">{{ product.rating.rate }} </div>
        </div>
    </div>
</template>

<style>
    .container-fluid {
        width: 100%;
    }

    .productImg img {
        max-height: 80px;
        max-width: 80px;
    }

    .productImg {
        background-color: white;
        text-align: center;
        padding: 5px;
        border-radius: 25px;
        height:  90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* .productImg {
        padding: 5px;
        background-color: white;
        max-width: 100px;
        max-height: 100px;
        overflow: hidden;
        border-radius: 20px;
        text-align: center;
    } */
</style>
