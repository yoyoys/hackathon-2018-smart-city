<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import store from '@/store'
export default Vue.extend({
  created () {
    store.dispatch('fetchUsage')
    store.dispatch('fetchQuality')
    store.dispatch('fetchBuilding')
  },
})
</script>

<style src="animate.css/animate.min.css"></style>
<style lang="scss" src="./assets/scss/bootstrap.scss"></style>
<style lang="scss" src="./assets/scss/font-awesome.scss"></style>
<style scoped>
  #app {
    height: 100%;
  }
</style>
