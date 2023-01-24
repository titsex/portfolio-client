export interface LayoutProps {
  title?: string
  description?: string
  navigationType?: 'default' | 'admin'
  navigationStatus?: boolean
}

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

export type ITheme = 'dark' | 'light'

export interface ISendOffer {
  email: string
  name: string
  message: string
}

export interface IChangeOfferStatus {
  status: OfferStatuses
  id: number
}

export interface IOffer {
  id: number
  email: string
  name: string
  message: string
  isConfirmed: boolean
  confirmationLink: string
  status: OfferStatuses
}

export type OfferStatuses = 'rejected' | 'interested' | 'reviewed' | 'accepted' | 'pending'

export interface ILoginUser {
  email: string
  password: string
}
