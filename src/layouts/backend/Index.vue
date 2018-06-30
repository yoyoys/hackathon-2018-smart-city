<template>
<div class="theme-body skin-1" :class="{'mini-navbar': miniNavbar}">
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
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidbarNav from './SidbarNav.vue'
import FooterContent from './FooterContent.vue'
import TopNavbar from './TopNavbar.vue'

export default Vue.extend({
  data () {
    return {
      miniNavbar: false
    }
  },
  components: {
    SidbarNav,
    TopNavbar,
    FooterContent
  },
  methods: {
    navToggle () {
      this.miniNavbar = !this.miniNavbar
    }
  }
})
</script>
<style lang="scss" src="@/assets/inspania/style.scss"></style>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
