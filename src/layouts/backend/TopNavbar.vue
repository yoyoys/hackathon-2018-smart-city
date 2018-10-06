<template>
  <div class="row border-bottom nav-top">
    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#" @click.prevent="toggleNavbar">
          <i class="fa fa-bars"/>
        </a>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
  .nav-top {
    height: 56px;
  }
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toggleNavbar () {
      this.$emit('navToggle')
    },
  },
})
</script>
