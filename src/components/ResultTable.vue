<script setup lang="ts">
  import { getAllConversions, deleteConversionFromList} from '../store/selectedExchanges';
  import type {Conversion} from '@/store/selectedExchanges' 
  import ButtonVue from './ButtonVue.vue';
  import ConversionPopUp from "@/components/PopUps/ConversionPopUp.vue"
  import { ref, type Ref } from 'vue';

  const displayPopUp:Ref = ref({
    display: false,
    data: null
  })

  function handleDate(date:string){
    const [yearMonthDay, hourMinuteSecond] = date.split("T")
    const [year,month, day] = yearMonthDay.split("-") 
    const [hour, minute, second] = hourMinuteSecond.split(":")

    return `${year}/${month}/${day} - ${hour}:${minute}:${second.slice(0,2)}`
  }

  function handleDelete(){
  }

  function handleConversionClick(conversion:Conversion){
    displayPopUp.value.display = true
    displayPopUp.value.data = conversion
  }

  function leavePopUp(){
    displayPopUp.value.display = false
    displayPopUp.value.data = null
  }

</script>

<template>
  <div id="resultContainer">
    <h2>Made Conversions</h2>
    <TransitionGroup 
      tag="div" 
      class="conversionsContainer" 
      v-if="getAllConversions().length > 0" 
      name="move show"
      type="animation"
    >
      <div 
        v-for="item in getAllConversions()" 
        :key="item.id" 
        class="conversionItem" 
        @click="() => handleConversionClick(item)"
      >
        <button class="deleteItem" @click="handleDelete">&times;</button>
        <div>{{handleDate(item.date.toString())}}</div>
        <div class='conversionInfo' >
          {{item.from_code}} - {{item.to_code}} 
        </div>
        <div class='conversionInfo' >
          1 {{item.from_code}} ≈ {{item.rate}} {{item.to_code}} 
        </div>
      </div>
    </TransitionGroup>
    <Transition name="show" type="animation">
      <PopUp 
        v-if="displayPopUp.display" 
        :conversion="displayPopUp.data"
        @leavePopUp="leavePopUp"
      />
    </Transition>
  </div>
</template>

<style scoped>
  #resultContainer{
    color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 3em;
    text-align: center;
  }
  .deleteItem{
    background: none;
    border: none;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    font-size: 1.75rem;
    top: 5%;
    color: rgb(25,25,25);
    left: 87%;
    transition: 200ms;
  }
  .deleteItem:hover{
    text-shadow: 0 0 0.25em rgb(20,20,20);
  }
  .conversionsContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    place-items: center;
    background-color: rgba(200,200,200, 0.05);
    backdrop-filter: blur(5px);
    padding: 2rem;
    border-radius: 1em;
  }
  .conversionItem{
    /* box-sizing: border-box; */
    position: relative;
    cursor: pointer;
    color: #ddd;
    padding: 1em 0;
    min-height: auto;
    background: rgb(64, 64, 64);
    border-radius: 0.35rem;
    width: 100%;
  }

  .conversionInfo{
    font-weight: bolder;
  }

  .move-enter-active{
    position: relative;
    animation: show 250ms ease-in-out;
  }
  .move-leave-active{
    position: relative;
    animation: show 250ms ease-in-out reverse;
  }

  .show-enter-active{
    position: relative;
    animation: show 250ms ease-in-out;
  }
  .show-leave-active{
    position: relative;
    animation: show 250ms ease-in-out reverse;
  }

  @keyframes show{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  @keyframes up{
    0%{
      transform: translateY(-15%);
    }
    100%{
      transform: translateY((0));
    }
  }
</style>