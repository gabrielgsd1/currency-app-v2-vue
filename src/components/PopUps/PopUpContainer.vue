<script setup lang="ts">
  
</script>

<template>
  <div class="overlay"/>
  <slot></slot>
</template>

<style scoped>
  .overlay{
    position: fixed;
    /* z-index: 10; */
    background: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .overlay:active section{
    display: none;
  }
</style>