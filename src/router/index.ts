import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MapView from '@/views/admin/MapView.vue'
import BuildingView from '@/views/admin/BuildingView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'

import DefaultLayout from '@/layouts/backend/Index.vue'
import EmptyLayout from '@/layouts/empty/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: EmptyLayout,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'home',
    //       component: Home,
    //     },
    //   ],
    // },
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'map',
          name: 'MapView',
          component: MapView,
        },
        {
          path: 'building/:id',
          name: 'BuildingView',
          component: BuildingView,
          props: true,
        },
        {
          path: '',
          name: 'DashboardView',
          component: DashboardView,
        },
      ],
    },
  ],
})
