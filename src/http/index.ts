import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:7000/api/',
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''

  return config
})

export default api
