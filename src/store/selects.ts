import { ref, watch } from "vue";
import type { Ref } from "vue";

type SelectOptions = {
  from: string,
  to: string
}

export const selectedOptions:Ref<SelectOptions> = ref({
  from: '',
  to: '',
})

export function clearFromExchange(){
  selectedOptions.value.from = ''
}

export function clearToExchange(){
  selectedOptions.value.to = ''
}

export function setFromCoin(id:string){
  selectedOptions.value.from = id
}

export function setToCoin(id:string){
  selectedOptions.value.to = id
}

watch(selectedOptions, (val) => {
  console.log(val)
},{deep: true})