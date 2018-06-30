import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import DefaultLayout from '@/layouts/backend/Index.vue'
import EmptyLayout from '@/layouts/empty/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: EmptyLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/admin',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
