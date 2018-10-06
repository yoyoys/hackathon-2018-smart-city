<template lang="pug">
  .building-data
    .building(
      v-for="item in data"
      :key="item.buildingid"
    )
      .name {{item.buildingname}}
      ul.sensors
        li.sensor(
          v-for="tank in item.tanks"
          :key="tank.id"
          @click="onTank({tankId: tank.id, buildingid: item.buildingid})"
        ) Sensor {{ tank.floor | floor}}
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IBuilding } from '@/typings/api'
import { ITankData } from '@/typings/building'
export default Vue.extend({
  props: {
    data: {
      type: Array,
      required: true,
    } as PropOptions<IBuilding[]>,
  },

  filters: {
    floor (value: number): string {
      if (value > 0) return `${value} F`
      return `B${-value} F`
    },
  },

  methods: {

    onTank (payload: ITankData) {
      this.$emit('onTank', payload)
    },
  },
})
</script>

<style lang="scss" scoped>
 .building {
    .name {
      font-size: 18px;
      font-weight: 800;
    }
    margin-bottom: 12px;
  }

  .sensors {
    margin: 0;
    padding: 0;
    list-style: none;
    .sensor {
      padding-left: 12px;
      &:before {
        content: '└';
        display: inline-block;
        margin-right: .5em;
      }
    }
  }
</style>
