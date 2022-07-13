<script lang="ts" setup>
import Overlay from "./Overlay.vue";
</script>

<template>
  <div class="popUpContainer">
    <Overlay/>
    <slot></slot>
  </div>
</template>

<style scoped>
  .popUpContainer{
    color: #fff;
    margin: auto;
    text-align: center;
  }
</style>