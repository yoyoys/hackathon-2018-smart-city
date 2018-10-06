<template>
  <div class="row border-bottom">
    <nav class="navbar navbar-fixed-top white-bg" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#" @click.prevent="toggleNavbar">
          <i class="fa fa-bars"/>
        </a>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <a href="#">
            <i class="fa fa-sign-out"/> Log out
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toggleNavbar () {
      this.$emit('navToggle')
    }
  }
})
</script>
