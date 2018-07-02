<template>
  <div id="wrapper">
    <SidbarNav/>
      <div id="page-wrapper" class="gray-bg">
        <TopNavbar @navToggle="navToggle"/>
        <div class="wrapper wrapper-content">
          <router-view/>
        </div>
        <FooterContent/>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidbarNav from './SidebarNav.vue'
import FooterContent from './FooterContent.vue'
import TopNavbar from './TopNavbar.vue'

export default Vue.extend({
  data () {
    return {
    }
  },
  components: {
    SidbarNav,
    TopNavbar,
    FooterContent
  },
  methods: {
    navToggle () {
      document.body.classList.toggle('mini-navbar')
    },

    setBodySizeClass (width) {
      if (width < 769) {
        document.body.classList.add('body-small')
      } else {
        document.body.classList.remove('body-small')
      }
    }
  },

  created () {
    document.body.classList.add('skin-1', 'fixed-nav', 'fixed-nav-basic', 'fixed-sidebar')
    this.setBodySizeClass(window.innerWidth)

    window.addEventListener('resize', () => {
      this.setBodySizeClass(window.innerWidth)
    })
  },
  destroyed () {
    document.body.classList.remove('skin-1', 'fixed-nav', 'fixed-nav-basic')
  }

})
</script>
<style lang="scss" src="@/assets/inspania/style.scss"></style>

<style>

</style>
