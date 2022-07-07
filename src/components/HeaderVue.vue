<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  import ButtonVue from './ButtonVue.vue';
  import {getUserData} from '@/store/loginInfo'

  const router = useRouter()

  const userInfo:Ref = ref(getUserData())

  function handleSignOut(){
    //todo: sign user out
    router.push('/login')
  }

</script>

<template>
  <header>
    <div class="container">
      <div>
        <ButtonVue btn-type="tertiary">About</ButtonVue>
      </div>
      <div class="authButtons" v-if="!userInfo.isLogged">
        <RouterLink :to="{name: 'Login', params: { type: 'login'}}"><ButtonVue btn-type="primary">Login</ButtonVue></RouterLink>
        <RouterLink :to="{name: 'Register', params: { type: 'register'}}"><ButtonVue btn-type="primary">Register</ButtonVue></RouterLink> 
        <RouterLink :to="{name: 'Conversion'}"><ButtonVue btn-type="primary">Conversion (prov.)</ButtonVue></RouterLink> 
      </div>
      <div class="authButtons" v-else>
        <ButtonVue btn-type="primary" @click="handleSignOut">Sign out</ButtonVue>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header{
    box-shadow: 0 0 2rem black;
    z-index: 1;
    backdrop-filter: blur(6px);
    position: sticky;
    top: 0;
  }
  .container{
    display: flex;
    box-sizing: border-box;
    margin: 0 1em;
    padding: 1rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .authButtons{
    display: flex;
    gap: 1rem;
  }

  .authButtons > a{
    text-decoration: none;
  }
</style>