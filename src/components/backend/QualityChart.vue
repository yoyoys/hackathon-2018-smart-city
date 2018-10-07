<template lang="pug">
  ChartJs(
    :data="usageData"
    :min="96.85"
    not-zero
  )
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { map, mean, toArray, keys } from 'lodash/fp'
import ChartJs from '@/components/backend/ChartJs.vue'
import { IQuality } from '@/typings/api'
import { IChart } from '@/typings/chart'
type TimeLevel = {time: string, waterlevel: number }
export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true,
    } as PropOptions<IQuality>,
  },
  components: {
    ChartJs,
  },

  computed: {
    usageData (): IChart | null {
      const labels = keys(this.data)
      const values = toArray(this.data)
      // const datasets = map(o => ({ data: mean(o) }), values)
      const datasets = [
        {
          data: map(o => mean(o), values),
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
