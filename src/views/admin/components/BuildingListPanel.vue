<template lang="pug">
  WidgetPanel.mb-0(
    title="感應器列表"
    no-border
  )
    .d-flex.flex-column
      .scroll
        GroupAccrodian(
          v-for="(item, status) in list"
          :key="status"
          :label="status + ' (' + item.length + ')'"
        )
          BuildingData(
            :data="item"
            @onTank="onTank"
          )
</template>

<style lang="scss" scoped>
  .search {
    padding-bottom: 12px;
    margin-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }

  .scroll {
    overflow-x: hidden;
    overflow-y: scroll;
    max-height: 72vh;
  }
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IBuilding } from '@/typings/api'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'
import GroupAccrodian from '@/components/backend/GroupAccrodian.vue'
import { IKeyAny } from '@/typings/helpers'
import { ITankData } from '@/typings/building'
import BuildingData from './BuildingData.vue'

export default Vue.extend({
  components: {
    WidgetPanel,
    GroupAccrodian,
    BuildingData,
  },
  props: {
    list: {
      type: Object,
      required: true,
    } as PropOptions<IKeyAny<IBuilding[]>>,
  },

  methods: {
    onTank (payload: ITankData) {
      this.$emit('onTank', payload)
    },
  },
})
</script>
