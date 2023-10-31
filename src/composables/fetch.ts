import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import type { AxiosError, AxiosResponse } from 'axios'

export function useFetch(url: string) {
  const data = ref<AxiosResponse | null>(null)
  const error: Ref<AxiosError | null> = ref(null)

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
  })

  axiosInstance
    .get(`${url}`)
    .then((response) => {
      data.value = response
    })
    .catch((err) => {
      error.value = err
    })

  return { error }
}
