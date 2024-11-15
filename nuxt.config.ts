// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devServer: {
    https: true,
    host: '192.168.27.145', // IP de desarrollo
    port: 3000,            // Puerto del servidor
  },
  ssr: false,
  app: {
    baseURL: '/hapi-fhir-app/', // Cambia "nombre-repositorio" por el nombre de tu repositorio
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },


  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
