import {ref} from 'vue'
import type {Ref} from 'vue'
import * as axiosInstance from 'axios'
import type { Conversion } from './selectedExchanges'

const axios = axiosInstance.default

export type Exchange = {
  id: string,
  currency: string,
  code: string,
}

export let db:Ref<Array<Exchange>> = ref([])

export async function getAllMadeConversions(id: string)
:Promise<Array<Conversion>>{
  const {data} = await axios.post('http://localhost:3001/getconversions', {
    id
  })
  return data
}

export async function getAllCurrencies()
:Promise<Exchange[]>{
  const {data} = await axios.get('http://localhost:3001/getcurrencies')
  db.value = data
  return data
}

export function getCurrency(code:string):Exchange|null{
  const result = db.value.find(currency => currency.code === code)
  if(result != null) return result
  else return null
}