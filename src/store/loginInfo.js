import { ref } from 'vue';
const loginInfo = ref({
    isLogged: false
});
export function setLoginInfo(info) {
    loginInfo.value = info;
}
export function getLoginInfo() {
    return loginInfo.value;
}
export function setConversions(conversions) {
    if (loginInfo.value.userData != undefined)
        loginInfo.value.userData.madeConversions = conversions;
}
