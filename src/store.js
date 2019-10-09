import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    music: '',
    musicDetail: []
  },
  mutations: {
    reviseMusic (state, revise) {
      return state.music = revise
    },
    reviseMusicDetail (state, revise) {
      return state.musicDetail = revise
    }
  },
  actions: {

  }
})
