/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')],
  theme: {
    extend: {
      colors: {
        'dark-theme-opacitied': `rgba(0,0,0,0.3)`,
        'light-theme-opacitied': `rgba(255,255,255,0.3)`,
        'dark-theme': '#191919',
        'light-theme': '#e6e6e6',
        'dark-gray': '#080808',
      },
    },
  },
}
