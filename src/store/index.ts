import Vue from 'vue'
import Vuex from 'vuex'
import { IBuilding, IUsage, IQuality } from '@/typings/api'
import { IKeyAny } from '@/typings/helpers'

Vue.use(Vuex)

// const apiRoot = 'https://76ulv2e62e.execute-api.ap-northeast-1.amazonaws.com/v1'
const apiRoot = '/api'

const state = {
  buildings: [] as IBuilding[],
  usage: [] as IUsage[],
  quality: null as IQuality | null,
}

export default new Vuex.Store({
  state,
  mutations: {
    updateBuildings (state, payload: IBuilding[]) {
      state.buildings = payload
    },
    updateUsage (state, payload: IUsage[]) {
      state.usage = payload
    },
    updateQuality (state, payload: IQuality) {
      state.quality = payload
    },
  },
  actions: {
    async fetchBuilding ({ commit }) {
      try {
        const res = await Vue.axios.get(`${apiRoot}/building`)

        commit('updateBuildings', res.data)
      } catch (error) {
        console.error('api fetch error', error)
      }
    },
    async fetchUsage ({ commit }) {
      try {
        const res = await Vue.axios.get(`${apiRoot}/usage`)

        commit('updateUsage', res.data.data)
      } catch (error) {
        console.error('api fetch error', error)
      }
    },
    async fetchQuality ({ commit }) {
      try {
        const res = await Vue.axios.get(`${apiRoot}/quality`)

        commit('updateQuality', res.data)
      } catch (error) {
        console.error('api fetch error', error)
      }
    },
  },
})
