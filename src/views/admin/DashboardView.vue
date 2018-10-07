<template lang="pug">
.row
  .col-lg-12
    WidgetPanel(
      title="台北市用水品質"
    )
      QualityChart.chart(
        v-if="qualityData"
        :data="qualityData"
      )
  .col-lg-12
    WidgetPanel(
      title="台北市用水量"
    )
      UsageChart.chart(
        v-if="usageData"
        :data="usageData"
      )
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'
import UsageChart from '@/components/backend/UsageChart.vue'
import QualityChart from '@/components/backend/QualityChart.vue'
import { IUsage, IQuality } from '@/typings/api'

export default Vue.extend({
  components: {
    WidgetPanel,
    UsageChart,
    QualityChart,
  },
  computed: {
    usageData (): IUsage[] {
      return store.state.usage
    },
    qualityData (): IQuality | null {
      return store.state.quality
    },
  },
  created () {
    // store.dispatch('fetchUsage')
    // store.dispatch('fetchQuality')
  },
})
</script>
