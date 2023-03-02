import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import i18n from './i18n'

loadFonts()

createApp(App).use(i18n).use(i18n).use(router)
  .use(vuetify)
  .mount('#app')
