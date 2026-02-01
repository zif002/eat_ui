// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";
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
    'nuxt-auth-utils',
    'nuxt-zod-i18n',
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
      { code: 'en', name: 'English', file: 'en.json',  language: 'en-GB' }, 
      { code: 'ru', name: 'Russian', file: 'ru.json',  language: 'ru-RU' }
    ]
  },
   zodI18n: {
    localeCodesMapping: {
      'en-GB': 'en',
      'ru-RU': 'ru',
    },
  },
  css: ['./app/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  primevue: {
        options: {
          
          ripple: true,
          theme: {
              preset: Aura,
              options: {
                darkModeSelector: '.dark'
              }
            
          },
          
        }
  },
})