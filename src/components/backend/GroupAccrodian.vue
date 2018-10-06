<template lang="pug">
  .group-accrodian(:class="groupClass")
    .title(@click="toggleOpen")
      i.fa.fa-caret-right
      h3.status.d-inline-block {{status}} ({{count}})
    .body
      .building(
        v-for="item in data"
        :key="item.buildingid"
      )
        .name {{item.buildingname}}
        ul.sensors
          li.sensor(
            v-for="tank in item.tanks"
            :key="tank.id"
          ) Sensor {{ tank.floor | floor}}
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

  .building {
    .name {
      font-size: 18px;
      font-weight: 800;
    }
    margin-bottom: 12px;
  }

  .sensors {
    margin: 0;
    padding: 0;
    list-style: none;
    .sensor {
      padding-left: 12px;
      &:before {
        content: '└';
        display: inline-block;
        margin-right: .5em;
      }
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
    groupClass (): object {
      return {
        'open': this.open,
      }
    },
  },

  filters: {
    floor (value: number): string {
      if (value > 0) return `${value} F`
      return `B${-value} F`
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
