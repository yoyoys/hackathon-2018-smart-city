import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios, { AxiosInstance } from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCat0pc88QZsHUNqBQbLpGX0KiL6Fw6TQw',
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

declare module 'vue/types/vue' {
  // eslint-disable-next-line typescript/interface-name-prefix
  interface Vue {
    // $event: Vue
  }
  // eslint-disable-next-line typescript/interface-name-prefix
  interface VueConstructor {
    axios: AxiosInstance
  }
}

declare module 'vue/types/options' {
  // eslint-disable-next-line
  interface ComponentOptions<V extends Vue> {
    validations?: any
  }
}
