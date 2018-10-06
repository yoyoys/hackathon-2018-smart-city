<template lang="pug">
.row
  .col-lg-8
    TankChart(
      v-if="data"
      :data="data"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import TankChart from '@/components/backend/TankChart.vue'
import { ITankLog } from '@/typings/api'

export default Vue.extend({
  components: {
    TankChart,
  },
  computed: {
    data (): ITankLog[] | null {
      if (!store.state.buildings[0]) return null
      return store.state.buildings[0].tanks[0].records
    },
  },
  created () {
    this.$store.dispatch('fetchBuilding')
  },
})
</script>
