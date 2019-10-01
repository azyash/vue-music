import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    music: ''
  },
  mutations: {
    reviseMusic (state, revise) {
      return state.music = revise
    }
  },
  actions: {

  }
})
