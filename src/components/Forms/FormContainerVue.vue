<script setup lang="ts">
  import InputVue from "@/components/Forms/InputVue.vue";
  import { ref, type Ref, watch } from "vue";
  import ButtonVue from "../Utilities/ButtonVue.vue";
  import { computed } from "@vue/reactivity";
  import axios from "axios";
  import { useRouter } from "vue-router";
  import { setLoginInfo, type UserData } from "@/store/loginInfo";
  import {useErrorMessage} from '@/composables/useErrorMessage'
  import ErrorMessage from "../Error/ErrorMessage.vue";
  import LoadingPopUp from "../PopUps/LoadingPopUp.vue";

  const router = useRouter()

  const error = useErrorMessage() 

  const status:Ref<string> = ref('')

  defineProps(['type'])

  const formType = computed(() => {
    return router.currentRoute.value.name?.toString().toLowerCase()
  })

  const formSubmitText = computed(() => {
    return formType.value === 'register' ? 'Register' : 'Login' 
  })

  const inputData:Ref = ref({
    name: '',
    email: '',
    password: ''
  })

  watch(() => formType.value, () => {
    error.reset()
  })

  const url = computed(() => {
    if(formType.value === 'register') return 'https://currency-vue-prisma.herokuapp.com/registerUser'
    else return 'https://currency-vue-prisma.herokuapp.com/login'
  })

  async function handleSubmit(){
    error.reset()
    status.value = 'loading'
    const req = await axios.post(url.value, {
      name: inputData.value.name,
      email: inputData.value.email,
      password: inputData.value.password,
    })
    const data:UserData = req.data
    if(data.error == null){
      setLoginInfo({isLogged: true, userData: data})
      router.push({name: formType.value === 'login' ? 'Conversion' : 'Login'})
    } else {
      error.setError('Login failed, please check your credentials.')
    }
    status.value = ''
  }
</script>

<template>
    <form class="inputContainer" @submit.prevent="handleSubmit">
    <ErrorMessage v-if="error.exists()">
      <span>{{error.getMessage()}}</span>
    </ErrorMessage>
      <InputVue 
        name="text" 
        v-model:value="inputData.name" 
        v-if="formType === 'register'"
      >
        Name
      </InputVue>
      <InputVue 
        name='text' 
        v-model:value="inputData.email"
      >
        Email
      </InputVue>
      <InputVue 
        name='password' 
        v-model:value="inputData.password"
      >
        Password
      </InputVue>
      <ButtonVue btn-type="primary">{{formSubmitText}}</ButtonVue>
    </form>
    <LoadingPopUp v-if="status === 'loading'">
      <h1>Please wait...</h1> 
    </LoadingPopUp>
</template>

<style>
  .inputContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

  }
</style>