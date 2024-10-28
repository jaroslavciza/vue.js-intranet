<script setup>
import { ref } from "vue";
import { store } from './store.js';

const status = ref("active");
const tasks = ref(["Úkol 1", "Úkol 2", "Úkol 3"]);

</script>

<template>
  <div class="dashboard">
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Curabitur bibendum justo non orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Quisque tincidunt scelerisque libero. Aliquam ante. Nulla non lectus sed nisl molestie malesuada. Etiam posuere lacus quis dolor. Nullam eget nisl. Nullam dapibus fermentum ipsum. Quisque porta. Aliquam ornare wisi eu metus. Fusce suscipit libero eget elit.
    </p>
    <p>
      Donec quis nibh at felis congue commodo. Aliquam erat volutpat. Phasellus faucibus molestie nisl. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam rhoncus aliquam metus. Integer tempor. Fusce wisi. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Nullam dapibus fermentum ipsum. Integer malesuada. Aliquam in lorem sit amet leo accumsan lacinia.
    </p>         
  </div>
</template>
  
<style>
  .dashboard {
    padding-top: 15px;  
    flex: 1; 
    overflow-y: auto;

    /* display: flex;
    flex-direction: column;*/
  }
</style>
