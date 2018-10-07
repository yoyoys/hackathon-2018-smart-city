<template lang="pug">
.row
  .col-lg-3
    h4.back(@click="back") Back
    h1 {{building.buildingname}}
    GroupAccrodian(
      label="Information"
    )
      .form-group
        label Location
        a.d-block.data(
          target="_blank"
          :href="'https://www.google.com.tw/search?q=' + location"
        ) {{location}}
      .form-group
        label Building ID
        .data {{building.buildingname}}
      .form-group
        label Building Address
        .data {{building.buildingaddress}}
  .col-lg-9
    .v(
      v-for="item in tanks"
    )
      h3 {{item.floor | floor}}
      TankChart(
        :data="item.records"
      )
</template>
<style lang="scss" scoped>
.back {
  text-decoration: underline;
  font-weight: 800;
  cursor: pointer;
}
</style>

<script lang="ts">
import Vue from 'vue'
import { find, reverse } from 'lodash/fp'
import store from '@/store'
import TankChart from '@/components/backend/TankChart.vue'
import { floor } from '@/utilities/filter'
import { ITankLog, ITank, IBuilding } from '@/typings/api'
import GroupAccrodian from '@/components/backend/GroupAccrodian.vue'

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    TankChart,
    GroupAccrodian,
  },
  filters: {
    floor,
  },
  computed: {
    tanks (): ITank[] {
      if (!this.building) return []

      return reverse(this.building.tanks)
    },
    building (): IBuilding | null{
      const building = find(o => o.buildingid === this.id, store.state.buildings)

      if (!building) return null

      return building
    },
    data (): ITankLog[][] {
      return this.tanks.map(o => o.records)
    },

    location (): string {
      if (!this.building) return ''
      return `E${this.building.longitude}  N${this.building.latitude}`
    },
  },
  methods: {
    back () {
      this.$router.push(`/admin/map`)
    },
  },
})
</script>
