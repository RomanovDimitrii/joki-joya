export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'], // Подключение файла стилей
  devtools: {
    enabled: true
  },
  build: {
    loaders: {
      scss: {
        implementation: require('sass') // Подключение реализации Sass
      }
    }
  }
});
