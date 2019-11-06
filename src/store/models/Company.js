/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namesapcing every
 else all them are called at once when used */
export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : {
    example: ''
  },
  getters   : {
    example      : (state, getters) => {
      return state.example
    },
    // dynamic getter
    exampleIsKofi: (state, getters) => {
      return (example) => {
        return example === 'Kofi'
      }
    }
  },
  // Use to alter state not for fetching data or complex computations
  mutations : {
    alterExample: (state, payload) => {
      state.example = payload
    }
  },
  // Do not use for direct update. Call the coresponding mutation
  actions   : {
    alterExample: ({ commit, getters, state }, payload) => {
      // the first arg is context[commit, state]
      // here we're only getting the commit and state props
      commit('alterExample', payload)
    }
  },
}
