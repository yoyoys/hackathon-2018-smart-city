import Vue from 'vue'
import Vuex from 'vuex'
import { IBuilding } from '@/typings/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buildings: [] as IBuilding[],
  },
  mutations: {
    updateBuildings (state, payload: IBuilding[]) {
      state.buildings = payload
    },
  },
  actions: {
    async fetchBuilding ({ commit }) {
      // ...from api
      try {
        const res = {
          data: [
            {
              'buildingid': 'bid-GGOBSQXT3KFVGZIZLBWFYUKRTI',
              'tanks': [
                {
                  'floor': -1,
                  'tankid': 'tid-74f352b059db0cf8d51be1ebcb3d68af',
                },
                {
                  'floor': 15,
                  'tankid': 'tid-1dae01b5d026cd18f754d981e5bfbf06',
                },
              ],
              'latitude': 25.026458,
              'longitude': 121.5169021,
            },
            {
              'buildingid': 'bid-HR5JP5XQ5RUGB2QDNSAE4WKVRU',
              'tanks': [
                {
                  'floor': 9,
                  'tankid': 'tid-edab0c3d09dda9e04c73d9aad0bd0cd8',
                },
              ],
              'latitude': 25.0281959,
              'longitude': 121.5094753,
            },
            {
              'buildingid': 'bid-VLCOKNHA5SCOP5PFHIHOLZWVXU',
              'tanks': [
                {
                  'floor': -1,
                  'tankid': 'tid-bcff9002c424a494fa1a013a716ae832',
                },
                {
                  'floor': 13,
                  'tankid': 'tid-dfaa9da7c14057bba5cce0936668ae4a',
                },
              ],
              'latitude': 25.0403033,
              'longitude': 121.5114192,
            },
            {
              'buildingid': 'bid-6D6VADDFNK3T5XCCTFC4N7NX44',
              'tanks': [
                {
                  'floor': -2,
                  'tankid': 'tid-47a9856a6d6fc8a1e6a2f1558b854514',
                },
                {
                  'floor': 10,
                  'tankid': 'tid-6973ff0c4c941a2aeced071e25e57207',
                },
                {
                  'floor': 21,
                  'tankid': 'tid-30a8567f1b8fb33824fe8437d9acbceb',
                },
              ],
              'latitude': 25.0258047,
              'longitude': 121.5120999,
            },
            {
              'buildingid': 'bid-GI4FJBS2AOIVZHBSVDUY2BHCE4',
              'tanks': [
                {
                  'floor': -1,
                  'tankid': 'tid-304b61c7d0d3555d8eb055083215bcc2',
                },
                {
                  'floor': 14,
                  'tankid': 'tid-2521f46e67121ace7a1a4400a0059363',
                },
              ],
              'latitude': 25.0304303,
              'longitude': 121.5181134,
            },
            {
              'buildingid': 'bid-ILJPKUD7YPBEXARHOOQQYA4YLQ',
              'tanks': [
                {
                  'floor': -1,
                  'tankid': 'tid-6a9bfa6abf6b4fa8faf4fb94a7f6d372',
                },
                {
                  'floor': 15,
                  'tankid': 'tid-cb6b35249bc5aa46429bc8b261a67c50',
                },
              ],
              'latitude': 25.0365061,
              'longitude': 121.5253816,
            },
            {
              'buildingid': 'bid-QJP5SXXQLFFQDD5CYGV4U5CDOA',
              'tanks': [
                {
                  'floor': -3,
                  'tankid': 'tid-c6f1be34ec2b1bd10ad9c29fa131a257',
                },
                {
                  'floor': 14,
                  'tankid': 'tid-6618ad3bda8b4bd1252b55224fd7b311',
                },
                {
                  'floor': 28,
                  'tankid': 'tid-be39e6cd89f2caa01f0a6d530c837681',
                },
              ],
              'latitude': 25.0256026,
              'longitude': 121.5107404,
            },
            {
              'buildingid': 'bid-R5I4VWHBIYB6DPNLMXEGDMUASI',
              'tanks': [
                {
                  'floor': -2,
                  'tankid': 'tid-acedd0e1b1b21ccc37eac5ea863bc93e',
                },
                {
                  'floor': 13,
                  'tankid': 'tid-d183ec048cac06cd119a47967b2aef50',
                },
                {
                  'floor': 24,
                  'tankid': 'tid-9cc32bb529694d0721043ca77012431d',
                },
              ],
              'latitude': 25.123456,
              'longitude': 121.987654,
            },
            {
              'buildingid': 'bid-3ILKYHMJLXFRDXHSRSRJ246MD4',
              'tanks': [
                {
                  'floor': -2,
                  'tankid': 'tid-2897a293c5c60758682a11f27b95c162',
                },
                {
                  'floor': 15,
                  'tankid': 'tid-c6f615aa9a5e522d6cd60d5f92b2160e',
                },
              ],
              'latitude': 25.0272705,
              'longitude': 121.5091862,
            },
            {
              'buildingid': 'bid-Y5POGRPJSY4EN3QYIYXY6ZZHVA',
              'tanks': [
                {
                  'floor': 9,
                  'tankid': 'tid-0d429a99fa8e2b78ad3daed1d2f937e4',
                },
              ],
              'latitude': 25.0265992,
              'longitude': 121.5113469,
            },
          ],
        } as {
          data: IBuilding[]
        }
        commit('updateBuildings', res.data)
      } catch (error) {

      }
    },
  },
})
