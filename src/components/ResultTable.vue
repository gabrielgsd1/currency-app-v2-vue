<script setup lang="ts">
  import { getAllConversions, deleteConversionFromList} from '../store/selectedExchanges';
  import type {Conversion} from '@/store/selectedExchanges' 
  import ButtonVue from './ButtonVue.vue';

  function handleDate(date:string){
    const [yearMonthDay, hourMinuteSecond] = date.split("T")
    const [year,month, day] = yearMonthDay.split("-") 
    const [hour, minute, second] = hourMinuteSecond.split(":")

    return `${year}/${month}/${day} - ${hour}:${minute}:${second.slice(0,2)}`
  }

</script>

<template>
  <div id="resultContainer">
    <h2>Made Conversions</h2>
    <TransitionGroup 
      tag="div" 
      class="conversionsContainer" 
      v-if="getAllConversions().length > 0" 
      name="move"
      type="animation"
    >
      <div v-for="item in getAllConversions()" :key="item.id" class="conversionItem">
        <div>{{handleDate(item.date.toString())}}</div>
        <div class='conversionInfo' >
          {{item.from_code}} - {{item.to_code}} | 1 {{item.from_code}} ≈ {{item.rate}} {{item.to_code}}</div>
      </div>
    </TransitionGroup>
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
  .conversionsContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    place-items: center;
  }
  .conversionItem{
    color: #ddd;
    padding: 1em 0;
    background: rgb(100, 100, 100);
    border-radius: 0.35rem;
    width: 100%;
  }
  .conversionInfo{
    font-weight: bolder;
  }

  .move-enter-active{
    position: relative;
    animation: showUp 250ms ease-in-out;
  }
  .move-leave-active{
    position: relative;
    animation: showUp 250ms ease-in-out reverse;
  }

  @keyframes showUp{
    0%{
      opacity: 0;
      transform: translateY(-15%);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>