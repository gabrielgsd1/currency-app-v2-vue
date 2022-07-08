<script setup lang='ts'>
import ConversionButtonVue from '@/components/ConversionButtonVue.vue'
import ResultTable from '@/components/ResultTable.vue'
import CoinInput from '@/components/CoinInput.vue'
import { conversionState } from '@/store/selectedExchanges';

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

<style>
  #conversionContainer{
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
  }
</style>
