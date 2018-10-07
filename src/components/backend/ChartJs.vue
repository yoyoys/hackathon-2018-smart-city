<template>
  <canvas width="900" height="280"/>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Chart from 'chart.js'
import { IChart } from '@/typings/chart'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true,
    } as PropOptions<IChart>,
    type: {
      type: String,
      default: 'line',
    },
    notZero: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: -1,
    },
  },
  watch: {
    data: {
      handler (data: IChart) {
        this.makeChart(data)
      },
    },
  },
  methods: {
    makeChart (data: IChart) {
      const ctx = this.$el as HTMLCanvasElement
      const options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: !this.notZero,
              suggestedMin: this.min >= 0 ? this.min : undefined,
            },
          }],
        },
        legend: {
          display: false,
        },
      }
      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: this.type,
        data,
        options,
      })
    },
  },
  mounted () {
    this.makeChart(this.data)
  },
})
</script>
