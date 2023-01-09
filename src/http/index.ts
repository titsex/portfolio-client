import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:7000/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  config.headers.Authorization = token ? `Bearer ${token}` : ''

  return config
})

export default api
