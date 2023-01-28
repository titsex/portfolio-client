import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import serviceWorker from 'astrojs-service-worker'

export default defineConfig({
  integrations: [svelte(), tailwind(), serviceWorker()],
})
