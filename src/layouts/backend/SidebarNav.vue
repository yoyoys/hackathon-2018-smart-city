<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul id="side-menu" class="nav metismenu">
          <li class="nav-header">
              <div class="dropdown profile-element">
                  <img alt="image" class="profile rounded-circle" src="@/assets/logo.png">
                  <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                      <span class="block m-t-xs font-bold">David Williams</span>
                      <span class="text-muted text-xs block">Art Director <b class="caret"/></span>
                  </a>
                  <ul class="dropdown-menu animated fadeInRight m-t-xs">
                      <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                      <li><a class="dropdown-item" href="contacts.html">Contacts</a></li>
                      <li><a class="dropdown-item" href="mailbox.html">Mailbox</a></li>
                      <li class="dropdown-divider"/>
                      <li><a class="dropdown-item" href="login.html">Logout</a></li>
                  </ul>
              </div>
              <div class="logo-element">
                  IN+
              </div>
          </li>
          <li>
            <a href="layouts.html">
              <i class="fa fa-diamond"/>
              <span class="nav-label">Layouts</span>
            </a>
          </li>
      </ul>
    </div>
  </nav>
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

export default Vue.extend({
  mounted () {
    const menu = new MetisMenu(this.$el)

    menu.init()

    // console.log($(this.$el), $(this.$el).metisMenu)
  }
})
</script>
