import type { ITheme, OfferStatuses } from '@types'
import { isAxiosError } from 'axios'

function switchThemeVoice(theme: ITheme) {
  const audio = new Audio(theme === 'dark' ? './enable-theme.ogg' : './disable-theme.ogg')
  audio.volume = 0.5
  audio.play()
}

export function switchTheme() {
  let theme = localStorage.getItem('theme')
  if (!theme) theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  if (theme === 'dark') document.documentElement.classList.remove('dark')
  else document.documentElement.classList.add('dark')

  localStorage.setItem('theme', nextTheme)
  switchThemeVoice(nextTheme)
}

export function getAxiosErrorMessage(error: unknown) {
  if (isAxiosError(error)) return error.response?.data.error || 'Unknown error'
  return 'Unknown error'
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
