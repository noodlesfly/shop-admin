import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store/index'
import ElementPlus from './plugins/element-plus'
import './styles/index.scss'

createApp(App)
  .use(store, key)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
