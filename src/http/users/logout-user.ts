import { getAxiosErrorMessage } from '@utils'
import api from '@http/index'

async function logoutUser() {
  try {
    await api.post('/users/logout')
    localStorage.removeItem('token')
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export default logoutUser
