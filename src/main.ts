import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as VueGoogleMaps from 'vue2-google-maps'

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
