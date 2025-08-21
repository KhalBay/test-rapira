import type { App } from 'vue'
import registerComponents from './register-components'

export default {
    install(app: App) {
        registerComponents({ app })
    }
}