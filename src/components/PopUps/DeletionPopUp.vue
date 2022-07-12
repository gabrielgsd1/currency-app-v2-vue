<script setup lang="ts">
  import ButtonVue from '@/components/ButtonVue.vue';
  import PopUpContent from './PopUpContent.vue';
  import Overlay from './Overlay.vue';
  import type { Conversion } from '@/store/selectedExchanges';
  import { handleDate } from '@/store/allExchanges';

  const {conversion} = defineProps<{
    conversion: Conversion
  }>()

  defineEmits<{
    (e: 'leaveDeletePopUp'):void,
    (e: 'confirmDeletion'):void
  }>()
</script>

<template>
  <section>
    <Overlay @click='$emit("leaveDeletePopUp")'/>
    <PopUpContent>
      <h2>
        Are you sure you want to delete the exchange 
        {{conversion.from_code}} - {{conversion.to_code}} 
        made at {{handleDate(conversion.date.toString())}}?
      </h2>
      <div class="buttons">
        <ButtonVue 
          btn-type="tertiary"
          @click="$emit('confirmDeletion')"
        >
          Yes
        </ButtonVue>
        <ButtonVue 
          btn-type="tertiary"
          @click="$emit('leaveDeletePopUp')"
        >
          No
        </ButtonVue>
      </div>
    </PopUpContent>
  </section>
</template>

<style scoped>
  .buttons{
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
  }
</style>