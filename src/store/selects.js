import { ref, watch } from "vue";
export const selectedOptions = ref({
    from: '',
    to: '',
});
export function clearFromExchange() {
    selectedOptions.value.from = '';
}
export function clearToExchange() {
    selectedOptions.value.to = '';
}
export function setFromCoin(id) {
    selectedOptions.value.from = id;
}
export function setToCoin(id) {
    selectedOptions.value.to = id;
}
