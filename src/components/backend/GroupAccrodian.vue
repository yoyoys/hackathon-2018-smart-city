<template lang="pug">
  h3 {{status}} ({{count}})
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IBuilding } from '@/typings/api'
export default Vue.extend({
  props: {
    status: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    } as PropOptions<IBuilding[]>,
  },

  computed: {
    count (): number {
      return this.data.length
    },
  },
})
</script>
