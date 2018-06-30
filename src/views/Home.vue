<template>
  <div>
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
  <!-- <div class="middle-box text-center animated fadeInDown">
    <h1>500</h1>
    <h3 class="font-bold">Internal Server Error</h3>

    <div class="error-desc">
        The server encountered something unexpected that didn't allow it to complete the request. We apologize.<br/>
        You can go back to main page: <br/><a href="index.html" class="btn btn-primary m-t">Dashboard</a>
    </div>
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld
  }
})
</script>
