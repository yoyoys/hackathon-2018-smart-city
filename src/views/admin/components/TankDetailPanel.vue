<template lang="pug">
  WidgetPanel.mb-0(
    title="ttt"
    no-border
    v-else
    key="p2"
  )
    h3 test
    template(slot="pre")
      .prev(@click="prev")
        h5.mr-2 ttt
        h5.mr-2 >
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'
import { ITank, IBuilding } from '@/typings/api'

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
  },

  methods: {
    prev () {
      this.$emit('onBack')
    },
  },
})
</script>
