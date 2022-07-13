<script setup lang="ts">
import ButtonVue from "@/components/Utilities/ButtonVue.vue";
import { conversionState } from "@/store/selectedExchanges";
import { clearFromExchange, clearToExchange, selectedOptions } from "@/store/selects";
import {db, type Exchange} from "@/store/allExchanges"
import {getLoginInfo, setConversions} from '@/store/loginInfo'
import axios, { type AxiosResponse } from "axios";
import { useErrorMessage } from "@/composables/useErrorMessage";
import ErrorMessage from "../Error/ErrorMessage.vue";
import { ref } from "vue";
import LoadingPopUp from "../PopUps/LoadingPopUp.vue";

const error = useErrorMessage()

const status = ref('')

async function handleConversion(from:Exchange, to:Exchange){
  status.value = 'loading'
  if(selectedOptions.value.from === '' || selectedOptions.value.to === ''){
    error.setError('Please select two currencies')
  }
  try{
    conversionState.value.status = 'converting'
    const request:AxiosResponse = await axios.post("https://currency-vue-prisma.herokuapp.com/convert", {
      from: from.code,
      to: to.code,
      id: getLoginInfo().userData?.id
    })
    conversionState.value.status = 'completed'
    
    const data = request.data
    setConversions(data.all)
    clearFromExchange()
    clearToExchange()
    return data
  
  } catch(e){
    conversionState.value.status = 'error'
    conversionState.value.error = true
  }
  finally{
    status.value = ''
  }
}

function handleClick(){
  error.reset()
  console.log(error.exists())
  const from = [...db.value].find(item => item.id === selectedOptions.value.from)
  const to = [...db.value].find(item => item.id === selectedOptions.value.to)
  if(from !== undefined && to !== undefined){
    handleConversion(from, to)
    .catch(e => console.log(e))
  } else {
    return error.setError('Please select two exchanges')
  }
}

</script>

<template>
  <ErrorMessage v-if="error.exists()">{{error.getMessage()}}</ErrorMessage>
  <div id="buttonContainer">
    <ButtonVue btn-type="primary" @click="handleClick">Convert</ButtonVue>
  </div>
  <LoadingPopUp v-if="status === 'loading'">
    Converting...
  </LoadingPopUp>
</template>

<style scoped>

  #buttonContainer > button{
    all: unset;
    border-radius: 0.5em;
    text-align: center;
    padding: 0.5em;
    width: 50%;
  }
</style>