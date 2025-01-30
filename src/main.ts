import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router.ts';


// Vuetify
import 'vuetify/styles/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Mapbox
import VueMapboxTs from "vue-mapbox-ts";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
    }
})

createApp(App).use(vuetify).use(VueMapboxTs).use(router).mount('#app')
