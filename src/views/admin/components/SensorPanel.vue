<template lang="pug">
  transition(name="fade" mode="out-in")
    BuildingListPanel(
      v-if="!isTank"
      key="p1"
      :list="statusGroup"
      @onTank="onTank"
    )
    TankDetailPanel(
      v-else
      key="p2"
      @onBack="prev"
      :tank="currentTank"
      :building="currentBuilding"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { find, filter, prop, flow } from 'lodash/fp'
import store from '@/store'
import { IKeyAny } from '@/typings/helpers'
import { IBuilding, ITank } from '@/typings/api'
import { ITankData } from '@/typings/building'
import BuildingListPanel from './BuildingListPanel.vue'
import TankDetailPanel from './TankDetailPanel.vue'

export default Vue.extend({
  data () {
    return {
      tankData: null as ITankData | null,
    }
  },
  components: {
    BuildingListPanel,
    TankDetailPanel,
  },
  computed: {
    statusGroup (): IKeyAny<IBuilding[]> {
      const filterWarningTank = filter((o: ITank) => o.waterlevel < 150 && o.waterlevel > 120)
      const filterDangerTank = filter((o: ITank) => o.waterlevel < 120)
      const filterGoodTank = filter((o: ITank) => o.waterlevel > 150)

      return {
        'Danger': filter((o: IBuilding) => filterDangerTank(o.tanks).length > 0, store.state.buildings),
        'Warning': filter((o: IBuilding) => filterWarningTank(o.tanks).length > 0, store.state.buildings),
        'Good': filter((o: IBuilding) => filterGoodTank(o.tanks).length > 0, store.state.buildings),
      }
    },

    isTank (): boolean {
      return !!this.tankData
    },
    currentBuilding (): IBuilding | null {
      if (this.tankData == null) return null

      const findBuilding = find((o:IBuilding) => o.buildingid === this.tankData!.buildingid)
      return findBuilding(store.state.buildings) || null
    },
    currentTank (): ITank | null {
      if (this.currentBuilding == null) return null
      console.log(this.currentBuilding, this.tankData, this.tankData!.tankid)
      const findTank = find((o:ITank) => o.tankid === this.tankData!.tankid)

      return findTank(this.currentBuilding.tanks) || null
    },
  },
  methods: {
    onTank (payload: ITankData) {
      console.log('tankkk', payload)
      this.tankData = payload
    },

    prev () {
      this.tankData = null
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
</style>
