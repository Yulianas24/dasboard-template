import './assets/main.css'
import 'remixicon/fonts/remixicon.css';
import 'vue3-toastify/dist/index.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';
import vClickOutside from 'v-click-outside'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "../node_modules/leaflet/dist/leaflet.css";


const app = createApp(App)

app.use(VueSweetalert2, {
  confirmButtonColor: '#5fa5f9',
  cancelButtonColor: '#ACACAC',
});
app.use(createPinia())
app.use(router)
app.use(vClickOutside)

app.config.globalProperties.$dateFormat = (value, format) => {
    return moment(value).format(format);
}

app.mount('#app')
