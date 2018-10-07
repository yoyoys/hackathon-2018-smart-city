<template lang="pug">
  ChartJs(
    :data="chartData"
    :min="40"
    not-zero
    yUnit="百分比"
  )
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import moment from 'moment'
import { map } from 'lodash/fp'
import ChartJs from '@/components/backend/ChartJs.vue'
import { IChart, IChartDataset } from '@/typings/chart'
import { ITankLog } from '@/typings/api'
type TimeLevel = {
  time: string,
  waterlevel: number,
  waterquality: number,
}
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
    last ():ITankLog {
      const [last] = this.data.slice(-1)
      return last
    },
    isDanger (): boolean {
      return this.last.waterlevel < 60
    },
    filteredData (): TimeLevel[] {
      return this.hourData.slice(-24)
    },
    hourData () : TimeLevel[] {
      return map((o:ITankLog) => ({
        time: moment(o.tstamp).format('k[:00]'),
        waterlevel: o.waterlevel,
        waterquality: o.waterquality,
      }), this.data)
    },
    chartData (): IChart {
      return {
        labels: this.filteredData.map(o => o.time),
        datasets: [
          {
            data: this.filteredData.map(o => o.waterlevel),
            // lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: this.isDanger ? 'red' : '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
          },
          {
            data: this.filteredData.map(o => o.waterquality),
            // lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: 'limegreen',
            borderWidth: 4,
            pointBackgroundColor: 'limegreen',
          },
        ],
      }
    },
  },
})
</script>
