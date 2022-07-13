import { ref } from "vue";
import type {Ref} from 'vue'

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

export const conversionState:Ref<ConversionStatus> = ref({
  status: "initial",
  error: false
})
