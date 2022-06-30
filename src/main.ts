import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store/index'
import ElementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './styles/index.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router as any)
  .use(store, key)
  .use(ElementPlus)
  .mount('#app')
