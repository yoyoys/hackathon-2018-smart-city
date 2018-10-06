<template lang="pug">
  //- h1 test
  ChartJs(:data="chartData")
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import moment from 'moment'
import { map } from 'lodash/fp'
import ChartJs from '@/components/backend/ChartJs.vue'
import { IChart, IChartDataset } from '@/typings/chart'
import { ITankLog } from '@/typings/api'
type TimeLevel = {time: string, waterlevel: number }
export default Vue.extend({
  props: {
    data: {
      type: Array,
      required: true,
    } as PropOptions<ITankLog[]>,
  },
  components: {
    ChartJs,
  },

  computed: {
    filteredData (): TimeLevel[] {
      return this.hourData.slice(-24)
    },
    hourData () : TimeLevel[] {
      return map((o:ITankLog) => ({
        time: moment(o.tstamp).format('k[:00]'),
        waterlevel: o.waterlevel,
      }), this.data)
    },
    chartData (): IChart {
      return {
        labels: this.filteredData.map(o => o.time),
        datasets: [{
          data: this.filteredData.map(o => o.waterlevel),
          // lineTension: 0,
          scaleBeginAtZero: true,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff',
        }],
      }
    },
  },
})
</script>
