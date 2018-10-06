<template lang="pug">
.row
  .col-lg-6
    .row
      .col-lg-12
        WidgetPanel(
          title="ttt"
        )
          h3 123
      .col-lg-12
        WidgetPanel(
          title="ttt"
        )
          h3 123
  .col-lg-6
    WidgetPanel(
      title="ttt"
    )
      h3 123
</template>
<script lang="ts">
import Vue from 'vue'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'

export default Vue.extend({
  components: {
    WidgetPanel,
  },
})
</script>
