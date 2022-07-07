import { ref, watch } from "vue";
import type {Ref} from 'vue'

const value:Ref = ref("");

function setValue(text:"register" | "login") {
  value.value = text;
}

export const inputState =  {value, setValue}

