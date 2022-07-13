<script setup lang="ts">
import PopUpContent from "../PopUps/PopUpContent.vue";
import ShowUpTransition from "../Transitions/ShowUpTransition.vue";
  
</script>

<template>
  <div class="errorContent">
      <slot></slot>
  </div>
</template>

<style scoped>
  .errorContent{
    background-color: rgb(161, 13, 0);
    color: #ddd;
    font-weight: 500;
    padding: 0.5em;
    margin: 1em;
    border-radius: 0.25em;
  }
</style>