import type { IOffer } from '@types'
import api from '@http/index'
import { getAxiosErrorMessage } from '../../utils'

export async function getOffers(): Promise<IOffer[]> {
  try {
    const response = await api.get<Promise<IOffer[]>>('/offers')
    return response.data
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export async function getOfferById(id: number): Promise<IOffer> {
  try {
    const response = await api.get<Promise<IOffer>>(`/offers/${id}`)
    return response.data
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}
