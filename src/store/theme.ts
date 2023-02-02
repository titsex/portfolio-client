import { persistentAtom } from '@nanostores/persistent'
import { ITheme } from '@types'

export const theme = persistentAtom<ITheme>('theme', '')

export function switchTheme(): void {
  let currentTheme = theme.get()

  if (!currentTheme) {
    theme.set(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    currentTheme = theme.get()
  }

  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

  if (currentTheme === 'dark') document.documentElement.classList.remove('dark')
  else document.documentElement.classList.add('dark')

  theme.set(nextTheme)
  switchThemeVoice(nextTheme)
}

function switchThemeVoice(theme: ITheme): void {
  const audio = new Audio(`./sounds/${theme === 'dark' ? 'enable' : 'disable'}-theme.ogg`)
  audio.volume = 0.5
  audio.play()
}
