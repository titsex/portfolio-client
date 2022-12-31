export interface LayoutProps {
  title?: string
  description?: string
}

export interface IRoute {
  title: string
  to: string
}

export interface IProject {
  image: string
}

export interface ISocial {
  title: string
  path: string
  link: string
}

export type ITheme = 'dark' | 'light'
