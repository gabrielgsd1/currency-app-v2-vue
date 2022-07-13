<script setup lang="ts">
  import Overlay from './Overlay.vue';
</script>

<template>
  <Overlay/>
  <div class="content">
    <slot/>
  </div>
</template>

<style scoped>
  .content{
    border-radius: 0.5rem;
    color: #eee;
    padding: 1.25rem;
    position: fixed;
    top: 50%;
    z-index: 100;
    left: 50%;
    transform: translate(-50%,-50%);
  } 
</style>