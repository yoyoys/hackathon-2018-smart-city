<template lang="pug">
  transition(name="fade" mode="out-in")
    WidgetPanel.mb-0(
      title="ttt"
      no-border
      v-if="p1"
      key="p1"
    )
      .d-flex.flex-column
        .search
          input.form-control(type="text" placeholder="Search")
        h2 感應器列表
        .scroll
          GroupAccrodian(
            v-for="(item, status) in statusGroup"
            :key="status"
            :status="status"
            :data="item"
          )
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
import Vue from 'vue'
import store from '@/store'
import WidgetPanel from '@/components/backend/WidgetPanel.vue'
import GroupAccrodian from '@/components/backend/GroupAccrodian.vue'
import { IKeyAny } from '@/typings/helpers'
import { IBuilding } from '@/typings/api'

export default Vue.extend({
  data () {
    return {
      p1: true,
    }
  },
  components: {
    WidgetPanel,
    GroupAccrodian,
  },
  computed: {
    statusGroup (): IKeyAny<IBuilding[]> {
      return {
        'Danger': store.state.buildings,
        'Warning': [],
        'Good': [],
      }
    },
  },
  methods: {
    changePage () {
      this.p1 = false
    },
    prev () {
      this.p1 = true
    },
  },
})
</script>

<style lang="scss" scoped>

$animationDuration: 0.5s;

@import "~animatewithsass/animate.scss";

.fade-enter-active, .fadeIn {
  @include fadeInRight(1, .3s);
}

.fade-leave-active, .fadeOut {
  @include fadeOutLeft(1, .3s);
}

.prev {
  cursor: pointer;
  display: inline-block;
  * {
    font-weight: 800;
  }
}
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
