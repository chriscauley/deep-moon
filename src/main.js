import { createApp } from 'vue'

import App from '@/App.vue'
import UnrestOpenseadragon from '@/unrest-openseadragon'

import '@unrest/tailwind/dist.css'
import '@/css/index.css'

createApp(App)
  .use(UnrestOpenseadragon)
  .mount('#app')
