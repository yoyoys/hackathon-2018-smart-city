<template lang="pug">
.row.about.full
  .col-lg-8
      GmapMap.google-map.full(
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
      )
        GmapCircle(
          :center="{lat:11, lng:10}"
          :radius="30000"
          :options="options"
       )
  .col-lg-4
    h3 test
</template>
<style lang="scss" scoped>

  .full {
    margin: -30px;
  }
  .google-map {
    height: calc(100vh - 61px);
    &.full {
      margin: 0 -15px;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'

export default Vue.extend({
  components: {
    WidgetPanel,
  },
  computed: {
    options (): any {
      return {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      }
    },
  },
})
</script>
