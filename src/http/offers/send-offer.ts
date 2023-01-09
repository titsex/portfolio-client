import type { ISendOffer } from '@types'
import api from '@http/index'
import { getAxiosErrorMessage } from '@utils'

async function sendOffer(params: ISendOffer): Promise<string> {
  try {
    return (await api.post('/offers/send', params)).data.message
  } catch (error) {
    throw getAxiosErrorMessage(error)
  }
}

export default sendOffer
