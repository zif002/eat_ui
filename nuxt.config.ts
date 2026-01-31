// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  fonts: {
    families: [
      { name: 'Roboto', weights: [400, 700, 800, 900] },
    ],
  },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
  ],
  routeRules: {
    "/": {
      redirect: "/en"
    }
  },
   i18n: {
    detectBrowserLanguage: false,
    strategy:"prefix",
     defaultLocale: "en",
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }, 
      { code: 'ru', name: 'Russian', file: 'ru.json' }
    ]
  },
  primevue: {
        options: {
          
          ripple: true,
          theme: {
              preset: Aura,
              options: {
                darkModeSelector: '.my-app-dark'
              }
            
          },
          
        }
  },
})