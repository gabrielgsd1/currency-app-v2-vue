<script setup lang="ts">
  import type { Conversion } from '@/store/selectedExchanges';
  import {getCurrency, handleDate, type Exchange} from '@/store/allExchanges'
  import PopUpContent from './PopUpContent.vue'
  import Overlay from './Overlay.vue'

  const {conversion} = defineProps<{
    conversion: Conversion,
  }>()
  
  defineEmits<{
    (e: 'leavePopUp'):void
  }>()
  const fromData = getCurrency(conversion.from_code)
  const toData = getCurrency(conversion.to_code)

</script>

<template>
  <section>
    <Overlay @click="$emit('leavePopUp')"/>
    <PopUpContent>
      <h1>{{conversion.from_code}} - {{conversion.to_code}}</h1>
      <div class="line"/>
      <div class="content">
        <div class="coinsInfo">
          <h1>FROM</h1>
          <div class="info">
            <h3>ID</h3>
            <p>{{((fromData as Exchange).id)}}</p>
          </div>
          <div class="info">
            <h3>CODE</h3>
            <p>{{(fromData as Exchange).code}}</p>
          </div>
          <div class="info">
            <h3>NAME</h3>
            <p>{{(fromData as Exchange).currency}}</p>
          </div>
          <div class="line"/>
          <h1>TO</h1>
          <div class="info">
            <h3>ID</h3>
            <p>{{((toData as Exchange).id)}}</p>
          </div>
          <div class="info">
            <h3>CODE</h3>
            <p>{{(toData as Exchange).code}}</p>
          </div>
          <div class="info">
            <h3>NAME</h3>
            <p>{{(toData as Exchange).currency}}</p>
          </div>
        </div>
        <div class="conversionInfo">
          <h1>CONVERSION</h1>
          <div class="info">
            <h3>ID</h3>
            <p>{{conversion.id}}</p>
          </div>
          <div class="info">
            <h3>RATE</h3>
            <p>{{conversion.rate}}</p>
          </div>
          <div class="info">
            <h3>DATE</h3>
            <p>{{handleDate(conversion.date)}}</p>
          </div>
          <div class="line"/>
        </div>
      </div>
    </PopUpContent>
  </section>
</template>

<style scoped>

  h3, p{
    margin: 0;
  }
  h1{
    margin: 0.25em 0;
  }
  .info{
    padding: 0.25em 0;
  }
  .content{
    display: flex;
    gap: 2.5rem;
    padding: 1rem;
    text-align: left;
  }
  .content > div{
    width: 100%;
  }
  .line{
    background: #ddd;
    width: 100%;
    height: 2px;
  }

</style>