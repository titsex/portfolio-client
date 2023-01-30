export interface LayoutProps {
  title?: string
  description?: string
  navigationType?: NavigationType
  navigationStatus?: boolean
}

export type NavigationType = 'default' | 'admin'

export interface IRoute {
  title: string
  to: string
}

export interface IError {
  message: string
  param: string
}

export interface IProject {
  image: string
}

export interface ISocial {
  title: string
  path: string
  link: string
}

export type ITheme = 'dark' | 'light' | ''

enum IRoles {
  USER = 'user',
  DEVELOPER = 'developer',
}

interface IUser {
  email: string
  uid: string
  isActivated: boolean
  roles: IRoles[]
  createdAt: Date
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
