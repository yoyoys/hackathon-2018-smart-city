<template lang="pug">
.row.about
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
      GmapMap.google-map(
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
      )
</GmapMap>
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
