<script setup lang="ts">
  import {db} from "@/store/allExchanges"
  import { clearFromExchange, clearToExchange, selectedOptions, setFromCoin, setToCoin } from '@/store/selects';
  import {conversionState} from '@/store/selectedExchanges'
  import {ref, computed, defineProps, watch} from 'vue'
  import type { Ref } from 'vue';
  type CoinInputSelection = {
    selection: 'from' | 'to'
  }

  function clearInput(){
    text.value = ''
  }

  watch(() => conversionState.value.status, (val) => {
    if(val === 'completed') {
      clearInput()
      hasCoinBeenChosen.value = false
    }
  })
  
  const props = defineProps<CoinInputSelection>()

  const text = ref('')
  const input:Ref<HTMLInputElement | null> = ref(null)
  const hasCoinBeenChosen:Ref<boolean> = ref(false)
  const suggestionsRef:Ref<HTMLInputElement | null> = ref(null)

  const suggestions = computed(() => {
    return [...db.value].filter(item => {
      return item.currency.toLowerCase().includes(text.value.toLowerCase())
             || item.code.toLowerCase().includes(text.value.toLowerCase())
    })
  })

  const hasSuggestions = computed(() => suggestions.value.length >= 1)

  const inputSelectedCoin = computed(() => {
    let id:string;
    if(props.selection === 'from') id = selectedOptions.value.from
    else id = selectedOptions.value.to

    return [...db.value].find(item => item.id === id)?.code
  })

  function handleItemClick(e:Event){
    const dataset = (e.target as HTMLInputElement).dataset
    const selectedCoin = db.value.find(item => item.id === dataset.id)
    if(dataset.name != null) text.value = dataset.name
    if(typeof selectedCoin == 'object'){
      if(props.selection == 'from') setFromCoin(selectedCoin.id)
      else setToCoin(selectedCoin.id)
    }
    input.value?.blur()
    hasCoinBeenChosen.value = true;
    text.value = `${selectedCoin?.code}`
  }

  function checkArrowKey(e: KeyboardEvent):void{
    hasCoinBeenChosen.value = false
    if(props.selection === 'from') clearFromExchange()
    else clearToExchange()
  }

</script>

<template>
  <div class="inputContainer">
    <p v-if="!hasSuggestions">No results found.</p>
    <p v-else>Selected: {{inputSelectedCoin}}</p>
    <input
      @keydown="checkArrowKey"
      v-model='text' 
      :class="{selected: hasCoinBeenChosen, input: true, hasZeroSuggestions: !hasSuggestions}"
      ref="input"
    />
    <div class="suggestions" ref="suggestionsRef">
      <div 
        class="suggestion-item" 
        v-for="item in suggestions"
        :key="item.id"
        :data-id="item.id"
        @click="(e) => handleItemClick(e)"
      >
        {{item.code}} - {{item.currency}}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .inputContainer{
    padding: 1rem;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  p{
    all: unset;
    display: block;
    color: white;
  }

  .input{
    all: unset;
    background: rgb(38, 38, 38);
    color: rgb(223, 223, 223);
    padding: 0.25em 0.5em;
    border: 0.15em solid rgb(38, 38, 38); 
    border-radius: 0.25em 0.25em 0.125em 0.125em;
  }
  .suggestions{
    background: rgb(38, 38, 38);
    color: rgb(223, 223, 223);
    z-index: 1;
    display: none;
    position: absolute;
    width: 86.75%;
    border-radius: 0 0 0.25rem 0.25rem;
    max-height: 250px;
    max-width: 100%;
    top: 82%;
    overflow: auto;
  }
  .input:focus + .suggestions{
    display: block;
  }
  .suggestions:active {
    display: block;
  }

  .suggestion-item{
    transition: 150ms;
    border-top: 0.075em solid rgb(223,223,223);
    padding: 0.25rem;
    overflow: hidden;

  }
  .suggestion-item:hover, [active=true]{
    background: #555;
    cursor: pointer;
  }
  .selected{
    border: 0.15em solid rgb(8, 122, 8); 
    border-radius: 0.25em 0.25em 0.125em 0.125em;
  }

  .hasZeroSuggestions{
    border: 0.15em solid rgb(167, 12, 20); 
    border-radius: 0.25em 0.25em 0.125em 0.125em;
  }

</style>