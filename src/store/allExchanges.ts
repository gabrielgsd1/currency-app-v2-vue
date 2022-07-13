import {ref} from 'vue'
import type {Ref} from 'vue'
import * as axiosInstance from 'axios'
import {default as dayjs} from 'dayjs'
import 'dayjs/locale/pt-br'

const axios = axiosInstance.default

export type Exchange = {
  id: string,
  currency: string,
  code: string,
}

export function handleDate(stringDate:string){
  const date = dayjs(stringDate)

  return date.format('YYYY/MM/DD | HH:mm:ss')
}

export let db:Ref<Array<Exchange>> = ref([])

export async function getAllCurrencies()
:Promise<Exchange[]>{
  const {data} = await axios.get('https://currency-vue-prisma.herokuapp.com/getcurrencies')
  db.value = data
  return data
}

export function getCurrency(code:string):Exchange|null{
  const result = db.value.find(currency => currency.code === code)
  if(result != null) return result
  else return null
}

export async function deleteConversion(id:string){
  const {data} = await axios.delete("https://currency-vue-prisma.herokuapp.com/deleteconversion", {
    data: {
      id
    }
  })
  console.log(data)
  return data
}