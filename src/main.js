import { createApp } from 'vue'
import router from '@/router/index'
import App from '@/App.vue'

const app = createApp(App)

app.use(router)

//Need to wait until ready as route params not available on created/setup while using vue-router-4
await router.isReady()
app.mount('#app')
