import { App } from 'vue'
import AppEditor from './AppEditor.vue'

export default {
  install (app: App) {
    app.component('AppEditor', AppEditor)
  }
}
