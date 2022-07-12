<template>
  <Transition name="show">
    <slot></slot>
  </Transition>
</template>

<style>
  .show-enter-active, .show-leave-active{
    transition: 125ms;
  }
  .show-enter-from, .show-leave-to {
    opacity: 0;
  }
  .show-enter-to, .show-leave-from {
    opacity: 1;
  }
</style>