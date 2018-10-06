<template lang="pug">
  .row.about
    //- h1 This is an about page
    .col-lg-8
      WidgetPanel(title="test")
        h3 test
    .col-lg-4
      WidgetPanel(title="test")
        h3 test
    .col-lg-4
      WidgetPanel(title="test")
        h3 test
    .col-lg-8
      WidgetPanel(title="test")
        h3 test
</template>

<script lang="ts">
import Vue from 'vue'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'

export default Vue.extend({
  components: {
    WidgetPanel
  }
})
</script>
