import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    music: '',
    musicDetail: [],
    musicPlay: false,

    userStatus: [],
    userDetail: [],
    userSubcount: [],
  },
  mutations: {
    reviseMusic (state, revise) {
      return state.music = revise
    },
    reviseMusicDetail (state, revise) {
      return state.musicDetail = revise
    },
    musicPlay (state) {
      return state.musicPlay = true
    },
    musicPause (state) {
      return state.musicPlay = false
    }
  },
  actions: {

  }
})
