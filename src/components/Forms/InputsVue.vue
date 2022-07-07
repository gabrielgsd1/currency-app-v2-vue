<template>
  <div id="inputs">
    <slot></slot>
  </div>
</template>

<style>
  #inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #input{
    border: 1rem;
  }
</style>