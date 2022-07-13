<script setup lang="ts">
  import InputVue from "@/components/Forms/InputVue.vue";
  import { ref, type Ref } from "vue";
  import ButtonVue from "../Utilities/ButtonVue.vue";
  import { computed } from "@vue/reactivity";
  import axios from "axios";
  import { useRouter } from "vue-router";
  import { setLoginInfo, type UserData } from "@/store/loginInfo";

  const router = useRouter()

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

  const url = computed(() => {
    if(formType.value === 'register') return 'http://localhost:3001/registerUser'
    else return 'http://localhost:3001/login'
  })

  async function handleSubmit(){
    const req = await axios.post(url.value, {
      name: inputData.value.name,
      email: inputData.value.email,
      password: inputData.value.password,
    })
    const data:UserData = req.data
    if(data.error == null){
      setLoginInfo({isLogged: true, userData: data})
      router.push({name: formType.value === 'login' ? 'Conversion' : 'Login'})
    }
    
  }
</script>

<template>
    <form class="inputContainer" @submit.prevent="handleSubmit">
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
</template>

<style>
  .inputContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

  }
</style>