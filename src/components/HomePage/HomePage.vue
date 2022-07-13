<script lang="ts" setup>
  import { ref, type Ref, onMounted } from 'vue';
  import ButtonVue from '../Utilities/ButtonVue.vue';
  import { RouterLink } from 'vue-router';
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        entry.target.setAttribute('hide', '')
      } else {
        entry.target.removeAttribute('hide')
      }
    })
  }, {
    threshold: 0.5
  })
  onMounted(() => {
    const greeting = document.querySelectorAll(".greeting")
    greeting?.forEach((el,i) => {
      (el as HTMLStyleElement).style.transitionDelay = `${i*1000}ms`
      el.setAttribute('hide', '')
      observer.observe(el)
    })
  })

</script>

<template>
  <section>
    <p class="greeting" ref="greeting">Welcome to my currency project!</p>
    <div class="container greeting">
      <h1 ref="greeting">Here you can convert over 170 currencies, available in an API, which is being used to make the conversions of this website.</h1>
      If you're new here, you can just 
      <ButtonVue btn-type="tertiary" class="button"><RouterLink to="/register">Register</RouterLink></ButtonVue>
      or
      <ButtonVue btn-type="tertiary" class="button"><RouterLink to="/login">Login</RouterLink></ButtonVue>
      if you have created an account
    </div>
  </section>
</template>

<style scoped>
  .container{
    margin: auto;
    max-width: 80%;
    backdrop-filter: blur(4px);
    background: rgba(255,255,255,0.02);
    padding: 1rem 0.5rem;
    border-radius: 1rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 3rem;
    font-size: 1.1rem;
    font-weight: 100;
  }
  .button{
    display: inline;
  }  
  .button  * {
    all: unset;
  }
  section {
    box-sizing: border-box;
    text-align: center;
    align-content: center ;
    margin: 1.5rem;
    color: #eee;
  }
  [hide]{
    /* display: none; */
    opacity: 0;
    transform: translateY(-3rem);
  }
  .greeting{
    transition: 1000ms ease-in-out;
    font-weight: 800;
  }
  p.greeting{
    font-size: 3rem;
  }
</style>