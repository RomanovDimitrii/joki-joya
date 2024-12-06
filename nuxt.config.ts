export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/joki-joya/' : '/',
    cdnURL: process.env.NODE_ENV === 'production' ? '/joki-joya/' : '/',
    head: {
      title: 'Joki-Joya',
      meta: [{ name: 'description', content: 'Парки развлечений для детей' }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/web-app-manifest-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/web-app-manifest-512x512.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  css: ['~/assets/styles/main.scss'],

  devtools: {
    enabled: true
  },

  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    },
    transpile: ['swiper']
  }
});
