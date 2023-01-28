import { persistentAtom } from '@nanostores/persistent'
import axios from 'axios'
import { token } from '@store/authorization'

export const customPersistentAtom = <T>(name: string, value: T) =>
  persistentAtom<T>(name, value, {
    encode: JSON.stringify,
    decode: JSON.parse,
  })

const api = axios.create({
  baseURL: 'http://localhost:7000/api/',
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const accessToken = token.get()
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''

  return config
})

export default api
