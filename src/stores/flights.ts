import { defineStore } from 'pinia'
import { ref } from 'vue'
import type Flight from '@/types/Flight'
// import { useFetch } from '@/composables/fetch'

export const useFlightStore = defineStore('flight', () => {
  const flights = ref<Flight[]>([])
//   const { data } = useFetch('/flights')
  return { flights }
})
