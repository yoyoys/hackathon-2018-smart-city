<template lang="pug">
  .building-data
    .building(
      v-for="item in data"
      :key="item.buildingid"
    )
      .name(@click="onBuilding(item.buildingid)") {{item.buildingname}}
      ul.sensors
        li.sensor(
          v-for="tank in reverse(item.tanks)"
          :key="tank.id"
          @click="onTank({tankid: tank.tankid, buildingid: item.buildingid})"
          :class="tankClass(tank)"
        ) Sensor {{ tank.floor | floor}}
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IBuilding, ITank } from '@/typings/api'
import { ITankData } from '@/typings/building'
import { floor } from '@/utilities/filter'
import { reverse } from 'lodash/fp'

export default Vue.extend({
  props: {
    data: {
      type: Array,
      required: true,
    } as PropOptions<IBuilding[]>,
  },

  filters: {
    floor,
  },

  methods: {
    reverse,
    onTank (payload: ITankData) {
      this.$emit('onTank', payload)
    },

    tankClass (tank: ITank): string {
      if (tank.waterlevel > 150) {
        return ''
      }

      if (tank.waterlevel > 120) {
        return 'warning'
      }
      return 'danger'
    },
    onBuilding (id: string) {
      this.$router.push(`/admin/building/${id}`)
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
      cursor: pointer;
      &:before {
        content: '└';
        display: inline-block;
        margin-right: .5em;
      }
      &.danger {
        color: #f00;
        font-weight: 800;
      }
      &.warning {
        color: orange;
      }
    }
  }
</style>
