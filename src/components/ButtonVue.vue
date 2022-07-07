<script setup lang="ts">
  import { defineProps } from 'vue';

  type ButtonType = {
    btnType: "primary" |  "secondary" | "tertiary"
  }

  const props = defineProps<ButtonType>()

</script>

<template>
  <div>
    <button :class="props.btnType">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
  button{
    all: unset;
    border-radius: .50em;
    font-family: 'Poppins', sans-serif;
    transition: 250ms;
    padding: .25em .50em;
    cursor: pointer;
  }
  .primary{
    background-color: rgb(38,38,38);
    color: white;
  }
  .secondary{
    background-color: rgba(38,38,38,0.6);
    text-shadow: 0 0 0.25rem black;
    color: white;
  }
  .tertiary{
    text-decoration: underline;
    color: #eee;
  }

  button:hover{
    transform: translateY(-5%);
  }


</style>