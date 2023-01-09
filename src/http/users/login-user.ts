import type { ILoginUser } from '@types'
import api from '@http/index'
import { getAxiosErrorMessage } from '@utils'

async function loginUser(params: ILoginUser) {
  try {
    const response = await api.post('/users/login', params)

    localStorage.setItem('token', response.data.accessToken)

    return response.data.user.email
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export default loginUser
