import type { IRoute, IProject, ISocial } from '@types'

export const routes: IRoute[] = [
  { title: 'Home', to: '#' },
  { title: 'About me', to: '#about' },
  { title: 'Projects', to: '#projects' },
  { title: 'Contacts', to: '#contacts' },
]

export const adminRoutes: IRoute[] = [{ title: 'Offers', to: '#offers' }]

export const projects: IProject[] = [
  {
    image: 'https://source.unsplash.com/random/343x343?sig=1',
  },
  {
    image: 'https://source.unsplash.com/random/343x343?sig=2',
  },
  {
    image: 'https://source.unsplash.com/random/343x343?sig=3',
  },
  {
    image: 'https://source.unsplash.com/random/343x343?sig=4',
  },
]

export const socials: ISocial[] = [
  {
    title: 'Telegram',
    path: 'M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4',
    link: 'https://t.me/titsex',
  },
  {
    title: 'Github',
    path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    link: 'https://github.com/titsex',
  },
]

export const avatarUrl = 'https://avatars.githubusercontent.com/u/61911688?v=4&s=240'

export const offerStatuses = ['rejected', 'interested', 'reviewed', 'accepted']
