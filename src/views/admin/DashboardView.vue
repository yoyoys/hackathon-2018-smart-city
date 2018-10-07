<template lang="pug">
.row
  .col-lg-12
    WidgetPanel(
      title="台北市用水品質"
    )
      QualityChart(
        v-if="qualityData"
        :data="qualityData"
      )
  .col-lg-12
    WidgetPanel(
      title="台北市用水量"
    )
      UsageChart(
        v-if="usageData"
        :data="usageData"
      )

//- .row
  .col-lg-6
    .row
      .col-lg-12
        WidgetPanel(
          title="台北市用水品質"
        )
          QualityChart(
            v-if="qualityData"
            :data="qualityData"
          )
      .col-lg-12
        WidgetPanel(
          title="台北市用水量"
        )
          UsageChart(
            v-if="usageData"
            :data="usageData"
          )
  .col-lg-6.d-flex.flex-column
    WidgetPanel.d-flex.flex-column.flex-grow-1(
      title="台北市抽水馬達使用時間分佈"
      flex
    )
      h3 123
</template>
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
