export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/', // Учитываем GitHub Pages
    buildAssetsDir: '/_nuxt/' // Папка для статических файлов
  },
  ssr: false, // Отключаем серверный рендеринг (SPA)
  css: ['~/assets/styles/main.scss'], // Подключаем глобальные стили
  devtools: {
    enabled: true // Включаем инструменты разработчика (по желанию)
  },
  nitro: {
    preset: 'github-pages' // Указываем предустановку для деплоя на GitHub Pages
  },
  build: {
    transpile: ['swiper'], // Транспилируем Swiper для совместимости
    loaders: {
      scss: {
        implementation: require('sass') // Используем Sass для SCSS файлов
      }
    }
  }
});
