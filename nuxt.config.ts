export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/', // Базовый путь для разработки и деплоя
    head: {
      link: [
        {
          rel: 'manifest',
          href: `${process.env.NUXT_APP_BASE_URL || '/'}site.webmanifest` // Ссылка на манифест
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: `${process.env.NUXT_APP_BASE_URL || '/'}web-app-manifest-192x192.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: `${process.env.NUXT_APP_BASE_URL || '/'}web-app-manifest-512x512.png`
        }
      ],
      meta: [
        {
          name: 'theme-color',
          content: '#ffffff' // Цвет темы
        },
        {
          name: 'background-color',
          content: '#ffffff' // Фоновый цвет
        }
      ]
    }
  },
  ssr: false,
  css: ['~/assets/styles/main.scss'],
  devtools: {
    enabled: true
  },
  nitro: {
    preset: 'github-pages'
  },
  build: {
    transpile: ['swiper'],
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  }
});
