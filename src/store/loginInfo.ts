import {ref, type Ref} from 'vue'
import type { Conversion } from './selectedExchanges'

export type LoginInfo = {
  isLogged: boolean,
  userData?: UserData
}

export type UserData = {
    id: string,
    name: string,
    email: string,
    madeConversions: Conversion[],
    error?: boolean
}

const loginInfo:Ref<LoginInfo> = ref({
  isLogged: false
})

export function setLoginInfo(info:LoginInfo){
  loginInfo.value = info
}

export function getLoginInfo():LoginInfo{
  return loginInfo.value
}

export function setConversions(conversions:Conversion[]){
  if(loginInfo.value.userData != undefined) loginInfo.value.userData.madeConversions = conversions
}

