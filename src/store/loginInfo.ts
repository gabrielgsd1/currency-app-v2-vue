import {ref, type Ref} from 'vue'
import type { Conversion } from './selectedExchanges'

type UserInfo = {
  isLogged: boolean,
  userData?: {
    id: string,
    name: string,
    email: string,
    madeConversions: Conversion[]
  }
}

const userInfo:Ref<UserInfo> = ref({
  isLogged: false
})

export function setUserData(info:UserInfo){
  userInfo.value = info
}

export function getUserData():UserInfo{
  return userInfo.value
}

