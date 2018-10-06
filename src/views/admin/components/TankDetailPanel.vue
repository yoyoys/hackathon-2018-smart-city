<template lang="pug">
  WidgetPanel.mb-0(
    title="ttt"
    no-border
    v-else
    key="p2"
  )
    GroupAccrodian(
      label="Information"
    )
      .form-group
        label Location
        .data {{building.longitude}} {{building.latitude}}
      .form-group
        label Building ID
        .data {{building.buildingname}}
      .form-group
        label Water Level
        .data {{waterLevel}}
    GroupAccrodian(
      label="Action"
    )
      .form-group
        label Motor
        .data {{waterLevel}}
    template(slot="pre")
      .prev(@click="prev")
        h5.mr-2 ttt
        h5.mr-2 >
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { maxBy } from 'lodash/fp'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'
import GroupAccrodian from '@/components/backend/GroupAccrodian.vue'

import { ITank, IBuilding, ITankLog } from '@/typings/api'

export default Vue.extend({
  props: {
    tank: {
      type: Object,
      required: true,
    } as PropOptions<ITank>,
    building: {
      type: Object,
      required: true,
    } as PropOptions<IBuilding>,
  },

  components: {
    WidgetPanel,
    GroupAccrodian,
  },

  computed: {
    waterLevel (): number {
      const maxByTime = maxBy((o: ITankLog) => o.tstamp)
      const tank = maxByTime(this.tank.records)
      if (!tank) return -1
      return tank.waterlevel
    },
  },

  methods: {
    prev () {
      this.$emit('onBack')
    },
  },
})
</script>
