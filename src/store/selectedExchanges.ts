import { ref } from "vue";
import type {Ref} from 'vue'
import type {Exchange} from './allExchanges'

export type Conversion = {
  date: string,
  from_code: string,
  to_code: string,
  rate: number,
  userId?: string,
  id?: string
}

type ConversionStatus = {
  status: string,
  error?: boolean
}

const madeConversions:Ref<Array<Conversion>> = ref([])

export const conversionState:Ref<ConversionStatus> = ref({
  status: "initial",
  error: false
})

export function getAllConversions(){
  return madeConversions.value
}

export function setAllConversions(conversions:Array<Conversion>){
  madeConversions.value = conversions
}

export function addConversionToList(conversionData:Conversion){
  madeConversions.value.unshift(conversionData)
}

export function refreshConversions(conversions:Conversion[]){
  madeConversions.value = conversions
}