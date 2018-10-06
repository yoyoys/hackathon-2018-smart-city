<template lang="pug">
  .group-accrodian(:class="groupClass")
    .title(@click="toggleOpen")
      i.fa.fa-caret-right
      h3.status.d-inline-block {{status}} ({{count}})
    .body
      slot
</template>
<style lang="scss" scoped>
  .title {
    position: relative;
    padding-left: 18px;
    cursor: pointer;
    .fa {
      position: absolute;
      left: 4px;
      bottom: 8px;
      transition: transform .3s;
    }
    .status {
      margin-bottom: 0;
    }
    border-bottom: 1px solid #000;
    padding-bottom: 4px;
  }

  .body {
    display: none;
    padding: 0 8px;
    .building:first-of-type {
      padding-top: 8px;
    }
  }

  .open {
    .fa {
      transform: rotate(90deg);
    }
    .body {
      display: block;
    }
  }
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  props: {
    status: {
      type: String,
      required: true,
    },
  },

  computed: {
    count (): number {
      return 1
    },
    groupClass (): object {
      return {
        'open': this.open,
      }
    },
  },

  data () {
    return {
      open: true,
    }
  },

  methods: {
    toggleOpen () {
      this.open = !this.open
    },
  },
})
</script>
