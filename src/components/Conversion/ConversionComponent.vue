<script setup lang='ts'>
import ConversionButtonVue from '@/components/Conversion/ConversionButtonVue.vue'
import ResultTable from '@/components/Conversion/ResultTable.vue'
import CoinInput from '@/components/Conversion/CoinInput.vue'
import { getAllCurrencies } from '@/store/allExchanges';
import { getLoginInfo } from '@/store/loginInfo'
import { useRouter } from 'vue-router';
import { onMounted, onBeforeMount } from 'vue';

onBeforeMount(() => {
  const router = useRouter()

  if(!getLoginInfo().isLogged){
    router.push('/login')
  } 
  })

onMounted(async () => {
  await getAllCurrencies()
})

</script>

<template>
  <div id="conversionContainer">
    <div id='inputs'>
      <CoinInput selection="from"/>
      <h3><strong>→</strong></h3>
      <CoinInput selection='to'/>
    </div>
    <ConversionButtonVue/>
    <ResultTable/>
  </div>
</template>

<style scoped>
  #conversionContainer{
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
  }
  #inputs{
    display: flex;
  }
</style>
