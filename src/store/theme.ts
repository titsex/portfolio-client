import { persistentAtom } from '@nanostores/persistent'
import { ITheme } from '@types'

export const theme = persistentAtom<ITheme>('theme', '')

export function switchTheme() {
  let currentTheme = theme.get()
  console.log(currentTheme)

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

function switchThemeVoice(theme: ITheme) {
  const audio = new Audio(theme === 'dark' ? './enable-theme.ogg' : './disable-theme.ogg')
  audio.volume = 0.5
  audio.play()
}
