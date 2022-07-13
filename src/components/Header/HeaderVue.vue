<script setup lang="ts">
  import { computed } from 'vue';
  import { RouterLink, useRouter } from 'vue-router';
  import ButtonVue from '@/components/Utilities/ButtonVue.vue';
  import {getLoginInfo, setLoginInfo} from '@/store/loginInfo'

  const router = useRouter()

  const isAUserLogged = computed(() => getLoginInfo().isLogged)

  function handleSignOut(){
    setLoginInfo({isLogged: false, userData: undefined})
    router.push('/login')
  }

</script>

<template>
  <header>
    <div class="container">
      <div class="projectButtons">
        ><RouterLink to="/"><ButtonVue btn-type="primary">Home</ButtonVue></RouterLink>
        <ButtonVue btn-type="primary"><a id="github" href="https://github.com/gabrielgsd1" target="_blank">GitHub</a></ButtonVue>
        <ButtonVue btn-type="tertiary">About</ButtonVue>
      </div>
      <div class="authButtons" v-if="!isAUserLogged">
        <RouterLink :to="{name: 'Login'}"><ButtonVue btn-type="primary">Login</ButtonVue></RouterLink>
        <RouterLink :to="{name: 'Register'}"><ButtonVue btn-type="primary">Register</ButtonVue></RouterLink> 
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
    /* position: sticky; */
    /* top: 0; */
  }
  #github{
    all: unset;
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
  .authButtons, .projectButtons{
    display: flex;
    gap: 1rem;
  }

  .authButtons > a, .projectButtons > a{
    text-decoration: none;
  }
</style>