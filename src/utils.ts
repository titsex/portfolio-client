import { isAxiosError } from 'axios'
import { IError } from '@types'

export function getAxiosErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    const errors = error.response?.data.error || 'Unknown error'

    if (Array.isArray(errors) || (typeof errors === 'object' && 'message' in errors && 'param' in errors))
      return handleValidationErrors(errors)

    return errors
  }

  return 'Unknown error'
}

export function handleValidationErrors(errors: IError[] | IError): string {
  if (!Array.isArray(errors)) return errors.message

  let result = ''

  for (const error of errors) {
    result += `${error.message}\n`
  }

  return result
}
