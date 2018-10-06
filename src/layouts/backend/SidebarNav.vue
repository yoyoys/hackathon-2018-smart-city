<template lang="pug">
  nav.navbar-default.navbar-static-side(role='navigation')
    .sidebar-collapse
      ul#side-menu.nav.metismenu
        li.nav-header
          .dropdown.profile-element
            img.profile.rounded-circle(alt='image', src='@/assets/logo.png')
            a.dropdown-toggle(data-toggle='dropdown', href='#')
              span.block.m-t-xs.font-bold David Williams
              span.text-muted.text-xs.block Art Director
            ul.dropdown-menu.animated.fadeInRight.m-t-xs
              li
                a.dropdown-item(href='profile.html') Profile
              li
                a.dropdown-item(href='contacts.html') Contacts
              li
                a.dropdown-item(href='mailbox.html') Mailbox
              li.dropdown-divider
              li
                a.dropdown-item(href='login.html') Logout
          .logo-element IN+
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
          href: '/admin/',
          label: 'Map',
          icon: 'fa-diamond',
        },
        {
          href: '/admin/',
          label: 'Map 2',
          icon: 'fa-diamond',
        },
        {
          href: '/admin/',
          label: 'Map 3',
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
