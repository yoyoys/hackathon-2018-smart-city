<template lang="pug">
  ChartJs(
    :data="usageData"
    type="bar"
    :min="2000"
    not-zero
  )
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { map } from 'lodash/fp'
import ChartJs from '@/components/backend/ChartJs.vue'
import { IUsage } from '@/typings/api'
import { IChart } from '@/typings/chart'
type TimeLevel = {time: string, waterlevel: number }
export default Vue.extend({
  props: {
    data: {
      type: Array,
      required: true,
    } as PropOptions<IUsage[]>,
  },
  components: {
    ChartJs,
  },

  computed: {
    usageData (): IChart | null {
      const labels = this.data.map(o => o.area)
      const datasets = [
        {
          data: this.data.map(o => o.daytime),
          backgroundColor: '#b6e6e6',

        },
        {
          data: this.data.map(o => o.nighttime),
          backgroundColor: '#5cb3b3',
        },
      ]
      return {
        labels,
        datasets,
      }
    },
  },
})
</script>
