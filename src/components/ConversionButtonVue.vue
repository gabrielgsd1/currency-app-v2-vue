<script setup lang="ts">
import ButtonVue from "./ButtonVue.vue";
import { addConversionToList, conversionState } from "@/store/selectedExchanges";
import { clearFromExchange, clearToExchange, selectedOptions } from "@/store/selects";
import {db, type Exchange} from "@/store/allExchanges"
import type { Conversion } from '@/store/selectedExchanges'
import axios, { type AxiosResponse } from "axios";

async function handleConversion(from:Exchange, to:Exchange){
  try{
    conversionState.value.status = 'converting'
    const request:AxiosResponse = await axios.post("http://localhost:3001/convert", {
      from: from.code,
      to: to.code,
      id: '62bf74a6c8fdd0331d8e4ca7'
    })
    conversionState.value.status = 'completed'
    
    const data:Conversion = request.data
    addConversionToList(data)
    clearFromExchange()
    clearToExchange()
    return data
  
  } catch(e){
    conversionState.value.status = 'error'
    conversionState.value.error = true
  }
}

function handleClick(){
  conversionState.value.status = 'converting'
  conversionState.value.error = false
  const from = [...db.value].find(item => item.id === selectedOptions.value.from)
  const to = [...db.value].find(item => item.id === selectedOptions.value.to)
  if((from && typeof from == 'object') && (to && typeof from == 'object')){
    handleConversion(from, to)
    .catch(e => console.log(e))
  } else {
    return 
  }
}

</script>

<template>
  <div id="buttonContainer">
    <ButtonVue btn-type="primary" @click="handleClick">Convert</ButtonVue>
  </div>
</template>

<style scoped>
  #buttonContainer{
    display: flex;
    justify-content: center;
    width: 50%;
  }

  #buttonContainer > button{
    all: unset;
    border-radius: 0.5em;
    text-align: center;
    padding: 0.5em;
    width: 50%;
  }
</style>