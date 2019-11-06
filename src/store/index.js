import Vue from 'vue'
import Vuex from 'vuex'

import company from './models/Company'
import address from './models/Address'

Vue.use(Vuex)

// main store that houses all other models
export const store = new Vuex.Store({
  modules: {
    company : company,
    address : address
  }
})
