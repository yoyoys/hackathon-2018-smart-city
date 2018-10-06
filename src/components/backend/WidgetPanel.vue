<template>
  <div class="ibox ">
    <div class="ibox-title">
      <h5>{{title}}</h5>
    </div>
    <div :class="{'no-padding': noPadding}" class="ibox-content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  }
})
</script>
