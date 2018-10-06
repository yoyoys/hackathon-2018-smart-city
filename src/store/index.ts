import Vue from 'vue'
import Vuex from 'vuex'
import { IBuilding } from '@/typings/api'

Vue.use(Vuex)

const apiRoot = 'https://76ulv2e62e.execute-api.ap-northeast-1.amazonaws.com/v1'
const state = {
  buildings: [] as IBuilding[],
}

export default new Vuex.Store({
  state,
  mutations: {
    updateBuildings (state, payload: IBuilding[]) {
      state.buildings = payload
    },
  },
  actions: {
    async fetchBuilding ({ commit }) {
      try {
        const res = await Vue.axios.get(`${apiRoot}/building/list`)

        commit('updateBuildings', res.data)
      } catch (error) {
        console.error('api fetch error', error)
      }
    },
  },
})
