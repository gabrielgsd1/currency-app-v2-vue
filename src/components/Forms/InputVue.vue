<script setup lang="ts">
  import {defineProps} from 'vue'

  defineProps(['name'])
</script>

<template>
  <div>
    <label><slot></slot></label>
      <input :type="name" class="input" />
  </div>
</template>

<style scoped>
  div{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    color: #ddd;
    width: 40%;
  }

  .input {
    all: unset;
    background: rgb(28, 28, 28);
    padding: 0.5em 0.75em;
    font-size: 1rem;
    border-radius: 0.25rem;
    width: 100%;
  }
</style>