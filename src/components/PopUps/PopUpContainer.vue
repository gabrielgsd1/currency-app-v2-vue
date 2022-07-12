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

</style>