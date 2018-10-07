<template lang="pug">
.row.about.full
  .col-lg-8.p-0
    GmapMap.google-map(
      :center="{lat:25.0353033, lng: 121.5154192}"
      :zoom="15"
    )
      GmapMarker(
        :key="m.buildingid"
        v-for="m in buildings"
        :position="getPosition(m)"
        :clickable="true"
        :draggable="true"
        @click="onBuilding(m.buildingid)"
      )
  .col-lg-4.p-0
    SensorPanel.panel
</template>
<style lang="scss" scoped>
  $height: calc(100vh - 56px);

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
import store from '@/store'
import { IBuilding } from '@/typings/api'

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
    buildings (): IBuilding[] {
      return store.state.buildings
    },

  },
  methods: {
    getPosition (building: IBuilding): {lat: number, lng: number} {
      return {
        lat: building.latitude,
        lng: building.longitude,
      }
    },

    onBuilding (id: string) {
      this.$router.push(`/admin/building/${id}`)
    },
  },
})
</script>
