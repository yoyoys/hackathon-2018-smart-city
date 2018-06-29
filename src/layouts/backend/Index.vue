<template>
<div class="skin-1">
  <div id="wrapper">
    <NavbarContent/>
      <div id="page-wrapper" class="gray-bg">
        <TopNavbar/>
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
import NavbarContent from './nav/Index.vue'
import FooterContent from './footer/Index.vue'
import TopNavbar from './top-navbar/Index.vue'

export default Vue.extend({
  components: {
    NavbarContent,
    TopNavbar,
    FooterContent
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
