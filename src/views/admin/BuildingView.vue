<template lang="pug">
.row
  .col-lg-8
    TankChart(
      v-for="item in data"
      :data="item"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { find } from 'lodash/fp'
import store from '@/store'
import TankChart from '@/components/backend/TankChart.vue'
import { ITankLog, IBuilding, ITank } from '@/typings/api'

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    TankChart,
  },
  computed: {
    tanks (): ITank[] {
      const building = find((o: IBuilding) => o.buildingid === this.id, store.state.buildings)

      if (!building) return []

      return building.tanks
    },
    data (): ITankLog[][] {
      return this.tanks.map(o => o.records)
    },
  },
  created () {
    // this.$store.dispatch('fetchBuilding')
  },
})
</script>
