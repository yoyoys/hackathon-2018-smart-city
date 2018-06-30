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
    }
  },
  created () {
    document.body.classList.add('skin-1')
  },
  destroyed () {
    document.body.classList.remove('skin-1')
  }

})
</script>
<style lang="scss" src="@/assets/inspania/style.scss"></style>
