<script setup lang='ts'>
import ConversionButtonVue from '@/components/ConversionButtonVue.vue'
import ResultTable from '@/components/ResultTable.vue'
import CoinInput from '@/components/CoinInput.vue'
import { conversionState } from '@/store/selectedExchanges';
import { watch } from 'vue';

watch(() => conversionState.value.status, (val) => {
  console.log(val)
}, { deep: true})

</script>

<template>
  <div id="conversionContainer">
    <p>a  </p>
    <div id='inputs'>
      <CoinInput selection="from"/>
      <h3><strong>→</strong></h3>
      <CoinInput selection='to'/>
      <h1 v-if="conversionState.status === 'converting'" style="color: white;">hihi</h1>
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
