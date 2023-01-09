import type { IChangeOfferStatus } from '@types'
import api from '@http/index'
import { getAxiosErrorMessage } from '@utils'

async function changeOfferStatus(params: IChangeOfferStatus): Promise<string> {
  try {
    const response = await api.put<Promise<string>>('/offers/changeStatus', params)
    return response.data
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export default changeOfferStatus
