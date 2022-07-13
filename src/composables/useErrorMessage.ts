import {ref, type Ref} from 'vue'

const status = ref({
  error: false,
  message: ''
})

export function useErrorMessage() {
  return {
    status,
    reset,
    setError,
    exists,
    getMessage
  }
}

function reset(){
  status.value.error = false
  status.value.message = ''  
}

function setError(message: string){
  status.value.error = true
  status.value.message = message
}

function getMessage(){
  return status.value.message
}

function exists(){
  return status.value.error
}
