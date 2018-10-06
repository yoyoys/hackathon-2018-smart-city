<template>
  <div :class="panelClass" class="ibox" >
    <div class="ibox-title">
      <h5>{{title}}</h5>
    </div>
    <div :class="panelClass" class="ibox-content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .no-border.ibox {
    .ibox-title, .ibox-content {
      border-width: 0;
    }
    .ibox-content {
      border-top-width: 1px;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    panelClass (): any {
      return {
        'no-padding': this.noPadding,
        'no-border': this.noBorder,
      }
    },
  },
})
</script>
