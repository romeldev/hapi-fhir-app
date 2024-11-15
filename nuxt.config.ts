// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/hapi-fhir-app/', // Cambia "nombre-repositorio" por el nombre de tu repositorio
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
