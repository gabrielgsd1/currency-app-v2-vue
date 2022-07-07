import { ref } from "vue";
import type { Ref } from "vue";

type ErrorMessage ={
  error: boolean,
  message: string
}

export const status:Ref<ErrorMessage> = ref({
  error: false,
  message: ''
})