<script lang="ts" setup>
import { onMounted } from 'vue';

  const observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry,i) => {
      (entry.target as HTMLStyleElement).style.transition = '1500ms';
      (entry.target as HTMLStyleElement).style.transitionDelay = `${400*i}ms`;
      if (!entry.isIntersecting) entry.target.setAttribute('hide', 'true')
      else entry.target.removeAttribute('hide')
    }) 
  }, {threshold: 0.25}) 
  onMounted(() => {
    const stacks = document.querySelector(".stacks")
    if(stacks) {
      stacks.setAttribute('hide', 'true')
      observer.observe(stacks)
    }
    
    const stackElements = document.querySelectorAll(".stack")
    stackElements.forEach(el => {
      el.setAttribute('hide', 'true');
      observer.observe(el)
    })
  })
</script>

<template>
  <div class="container">
    <h1>About Page</h1>
    <h3>This is an application created using the <a href="https://currency.getgeoapi.com" target="_blank">Currency Geo API</a> to make conversions, as well as to get the available currencies.</h3>
    <div class="stacks">
      <div class="stack">
        <div class="header-stack">
          <h2>Programming Languages</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
          <img src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"/>
        </div>
        <h3>Javascript and Typescript</h3>
      </div>
      <div class="stack">
        <div class="header-stack">
          <h2>Front-end Technologies</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"/>
        </div>
        <h3>Vue.js, Vue Router</h3>
      </div>
      <div class="stack">
        <div class="header-stack">
          <h2>Back-end technologies</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png"/>
        </div>
        <h3>Node.js, Express.js</h3>
      </div>
      <div class="stack">
        <div class="header-stack">
          <h2>Database Management</h2>
          <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png"/>
          <img src="https://camo.githubusercontent.com/ecf890db9117aa9ee8a051589976d59cc6950b56662a70f2a00204770552930f/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f707269736d612d342e737667"/>
        </div>
        <h3>MongoDB and PrismaORM</h3>
      </div>
      <div class="stack">
        <div class="header-stack">
          <h2>NPM Modules</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png"/>
        </div>
        <h3>Axios, Bcrypt, Nodemon and Day.js</h3>
      </div>
    </div>
    <h2>Made by Gabriel Gomes</h2>
  </div>
</template>

<style scoped>
  .container{
    width: 80%;
    margin: auto;
    color: #ddd;
  }

  [hide='true']{
    opacity: 0;
  }
  .stacks{
    box-sizing: border-box;
    padding: 2rem;
    backdrop-filter: blur(4px);
    background: rgba(255,255,255,0.1);
    border-radius: 1.25rem;
  }
  .stack > h3 {
    font-weight: 200;
  }
  .header-stack{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  img{
    height:2rem;
  }
  .stack{
    padding: 1rem 0;
  }
  .stack h2, .stack > h3 {
    margin: 0;
    padding: 0;
  }
  a{
    all: unset;
    cursor: pointer;
    text-decoration:underline; 
  }
</style>