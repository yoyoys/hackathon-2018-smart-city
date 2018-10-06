<template lang="pug">
.row.about.full
  .col-lg-8.p-0
    GmapMap.google-map(
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
    )
      GmapCircle(
        :center="{lat:11, lng:10}"
        :radius="30000"
        :options="options"
      )
  .col-lg-4.p-0
    SensorPanel.panel
</template>
<style lang="scss" scoped>
  $height: calc(100vh - 61px);

  .full {
    margin: -30px;
  }
  .google-map, .panel {
    height: $height;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import SensorPanel from './components/SensorPanel.vue'

export default Vue.extend({
  components: {
    SensorPanel,
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
