import type { ITheme } from '@types'

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
