<script setup lang="ts">
import InputsVue from "@/components/Forms/InputsVue.vue";
import InputVue from "@/components/Forms/InputVue.vue";
import InputRadioVue from '@/components/Forms/InputRadioVue.vue'
import {inputState} from '@/store/inputs'
import { defineProps } from "vue";
import ButtonVue from "../ButtonVue.vue";
import { computed } from "@vue/reactivity";

type FormProps = {
  type: string
}

const props = defineProps<FormProps>()

const formSubmitText = computed(() => {
  return props.type === 'register' ? 'Register' : 'Login' 
})
</script>

<template>
    <div class="inputContainer">
      
      <InputVue name="text" v-if="type === 'register'">Name</InputVue>
      <InputVue name='text'>Email</InputVue>
      <InputVue name='password'>Password</InputVue>
      <ButtonVue btn-type="primary">{{formSubmitText}}</ButtonVue>
    </div>
</template>

<style>
  .inputContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

  }
</style>