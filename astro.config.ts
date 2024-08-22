import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://patriciovacaescobar.github.io',
  base: 'mi-repo',
//   site: process.env.CI
//     // ? 'https://astro-shadcn-ui-template.vercel.app'
//     ? 'https://patriciovacaescobar.github.io'
//     : 'http://localhost:4321',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
