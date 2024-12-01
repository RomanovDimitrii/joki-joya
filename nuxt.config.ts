export default defineNuxtConfig({
  // Подключение файлов стилей
  css: ['~/assets/styles/main.scss'],

  devtools: {
    enabled: true
  },

  build: {
    loaders: {
      scss: {
        implementation: require('sass') // Подключение реализации Sass
      }
    },
    transpile: ['swiper'] // Транспиляция Swiper
  },

  compatibilityDate: '2024-11-30'
});
