import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
// import { useFetch } from '@/composables/fetch'
import type Airline from '@/types/Airline'

export const useAirlineStore = defineStore('airline', () => {
//   const { data } = useFetch('airlines?name=l')
  const airlines: Ref<Airline[]> = ref([])
  return { airlines }
})
