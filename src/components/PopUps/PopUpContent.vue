<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
  .container{
    background: linear-gradient(90deg, rgba(50,50,50,1), rgba(22,22,22,1));  
    box-shadow: 0 0 2rem rgba(150,150,150,0.5);
    border-radius: 0.5rem;
    color: #eee;
    padding: 1.25rem;
    position: fixed;
    top: 50%;
    z-index: 10;
    left: 50%;
    transform: translate(-50%,-50%);
    min-width: 500px;
  }
</style>