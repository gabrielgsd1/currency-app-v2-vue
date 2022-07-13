<script setup lang="ts">
  import type {Conversion} from '@/store/selectedExchanges' 
  import { deleteConversion, handleDate} from '@/store/allExchanges'
  import ConversionPopUp from "@/components/PopUps/ConversionPopUp.vue"
  import { ref, type Ref, computed } from 'vue';
  import ShowUpTransition from '@/components/Transitions/ShowUpTransition.vue';
  import DeletionPopUp from '@/components/PopUps/DeletionPopUp.vue';
  import { getLoginInfo, setConversions } from '@/store/loginInfo';

  const displayInfoPopUp:Ref = ref({
    display: false,
    data: null
  })

  const displayDeletePopUp:Ref = ref({
    display: false,
    data: null
  })

  const conversionsCount = computed(() => {
    return getLoginInfo().userData?.madeConversions.length
  })

  function handleDeleteButtonClick(conversion:Conversion){
    showDeletePopUp(true)
    displayDeletePopUp.value.data = conversion
  }

  function leaveDeletePopUp(){
    showDeletePopUp(false)
    displayDeletePopUp.value.data = null
  }

  async function deleteItem(conversion: Conversion){
    const remainingConversions:Conversion[] = await deleteConversion(conversion.id as string)
    showDeletePopUp(false)
    setConversions(remainingConversions)
  }

  function handleConversionClick(conversion:Conversion){
    displayInfoPopUp.value.display = true
    displayInfoPopUp.value.data = conversion
  }

  function leaveInfoPopUp(){
    displayInfoPopUp.value.display = false
    displayInfoPopUp.value.data = null
  }

  function showDeletePopUp(value: boolean){
    displayDeletePopUp.value.display = value
  }

</script>

<template>
  <div id="resultContainer">
    <h2>Made Conversions <span v-if="conversionsCount != null && conversionsCount < 1"> - {{conversionsCount}}</span></h2>
    <h3 v-if="conversionsCount != null && conversionsCount >= 1">Nothing here yet.</h3>
    <TransitionGroup 
      tag="div" 
      class="conversionsContainer" 
      v-if="conversionsCount != null && conversionsCount > 0 " 
      name="move show"
      type="animation"
    >
      <div 
        v-for="item in getLoginInfo().userData?.madeConversions" 
        :key="item.id" 
        class="conversionItem" 
        @click="() => handleConversionClick(item)"
      >
        <button class="deleteItem" @click.stop="() => handleDeleteButtonClick(item)">&times;</button>
        <div>{{handleDate(item.date.toString())}}</div>
        <div class='conversionInfo' >
          {{item.from_code}} - {{item.to_code}} 
        </div>
        <div class='conversionInfo' >
          1 {{item.from_code}} ≈ {{item.rate}} {{item.to_code}} 
        </div>
      </div>
    </TransitionGroup>
    <ShowUpTransition>
      <ConversionPopUp
        v-if="displayInfoPopUp.display"
        :conversion="displayInfoPopUp.data"
        @leavePopUp="leaveInfoPopUp"
      />
    </ShowUpTransition>
    <ShowUpTransition>
      <DeletionPopUp 
        @leaveDeletePopUp="leaveDeletePopUp"
        @confirmDeletion="() => deleteItem(displayDeletePopUp.data)"
        :conversion="displayDeletePopUp.data" 
        v-if="displayDeletePopUp.display"/>
    </ShowUpTransition>
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
    color: rgb(85,85,85);
    left: 87%;
    transition: 200ms;
  }
  .deleteItem:hover{
    text-shadow: 0 0 0.25em rgb(85,85,85);
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
    background: linear-gradient(90deg, rgba(60,60,60,1), rgba(35,35,35,1)); 
    border-radius: 0.35rem;
    width: 100%;
  }

  .conversionInfo{
    font-weight: bolder;
  }

  
</style>