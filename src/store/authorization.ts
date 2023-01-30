import { persistentAtom } from '@nanostores/persistent'
import { customPersistentAtom } from '@store/index'
import { getAxiosErrorMessage } from '@utils'
import { ILoginResponse } from '@types'

import api from '@store/index'
import axios from 'axios'

export const isAuth = customPersistentAtom<boolean>('isAuth', false)
export const token = persistentAtom<string>('token', '')

export async function login(email: string, password: string): Promise<void> {
  try {
    const { data } = await api.post<ILoginResponse>('/users/login', { email, password })

    token.set(data.accessToken)
    isAuth.set(true)

    return location.replace('/admin')
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export async function logout(): Promise<void> {
  try {
    await api.post('/users/logout')

    token.set('')
    isAuth.set(false)

    return location.replace('/')
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export async function checkAuth(): Promise<void> {
  try {
    const { data } = await axios.get<ILoginResponse>('http://localhost:7000/api/users/refresh', {
      withCredentials: true,
    })

    token.set(data.accessToken)
    isAuth.set(true)
  } catch (error) {
    token.set('')
    isAuth.set(false)

    location.replace('/authorization')
    throw getAxiosErrorMessage(error)
  }
}
