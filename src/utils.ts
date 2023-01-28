import type { OfferStatuses } from '@types'
import { isAxiosError } from 'axios'
import { IError } from './types'

export function getAxiosErrorMessage(error: unknown) {
  if (isAxiosError(error)) {
    const errors = error.response?.data.error || 'Unknown error'

    if (Array.isArray(errors) || (typeof errors === 'object' && 'message' in errors && 'param' in errors))
      return handleValidationErrors(errors)

    return errors
  }

  return 'Unknown error'
}

export function handleValidationErrors(errors: IError[] | IError) {
  if (!Array.isArray(errors)) return errors.message

  let result = ''

  for (const error of errors) {
    result += `${error.message}\n`
  }

  return result
}

export function getTextColorByOfferStatus(status: OfferStatuses) {
  switch (status) {
    case 'accepted':
      return 'text-green-400'
    case 'interested':
      return 'text-yellow-400'
    case 'rejected':
      return 'text-red-400'
    case 'reviewed':
      return 'text-cyan-400'
    default:
      return 'text-black dark:text-white'
  }
}
