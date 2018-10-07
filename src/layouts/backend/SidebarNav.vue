<template lang="pug">
  nav.navbar-default.navbar-static-side(role='navigation')
    .sidebar-collapse
      ul#side-menu.nav.metismenu
        li(v-for='item in menuItems', :key='item.href + item.label')
          router-link(:to='item.href')
            i.fa(:class='item.icon')
            span.nav-label {{item.label}}
</template>
<style lang="scss" scoped>
.profile {
    max-width: 30px;
}
</style>

<script lang="ts">
import Vue from 'vue'
import MetisMenu from 'metismenu/src'
// import MetisMenu from 'metismenu/dist/modules/index.js'
interface IMenuItem {
  href: string;
  label: string;
  icon: string;
}

export default Vue.extend({
  computed: {
    menuItems (): IMenuItem[] {
      return [
        {
          href: '/admin/map',
          label: 'Map',
          icon: 'fa-map',
        },

        {
          href: '/admin/',
          label: 'Dashboard',
          icon: 'fa-diamond',
        },

      ]
    },
  },
  mounted () {
    const menu = new MetisMenu(this.$el)

    menu.init()

    // console.log($(this.$el), $(this.$el).metisMenu)
  },
})
</script>
