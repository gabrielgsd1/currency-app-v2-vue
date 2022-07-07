<script setup lang="ts">
import { inputState } from '../../store/inputs';

const {value} = inputState
</script>

<template>
  <div>
    <label>
      <input type="radio" id='all' v-model='value' value="register" name='drone'/>
      Register
    </label>
  </div>
  <div>
    <label>
      <input type="radio" id='all' v-model='value' value="login" name='drone'/>
      login
    </label>
  </div>
</template>