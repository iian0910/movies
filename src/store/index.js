import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const MOBILE_BREAK_POINT = 1024;

export default new Vuex.Store({
  state: {
    vw: 0,
  },
  getters: {
    isMobileSize (state) {
        if (!state.vw) return true;
        return state.vw <= MOBILE_BREAK_POINT
    }
  },
  mutations: {
    SET_VW (state, val) {
        state.vw = val
    }
  },
  actions: {
  },
  modules: {
  }
})