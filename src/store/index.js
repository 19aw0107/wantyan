import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timer: 30,
    seikai: 0,
  },
  mutations: {
    increment(state) {
      state.seikai++
    }
  },
  actions: {
  },
  modules: {
  }
})
