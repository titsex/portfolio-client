import { getAxiosErrorMessage } from '@utils'
import axios from 'axios'

async function checkAuth() {
  try {
    const response = await axios.get('http://localhost:7000/api/users/refresh', { withCredentials: true })
    localStorage.setItem('token', response.data.accessToken)
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export default checkAuth
