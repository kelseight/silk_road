// initial state.
const state = {
  location: 0,
  day: 0
}

// getters
const getters = {
  location: (state) => { return state.location },
  day: (state) => { return state.day },
  atEnd: (state, getters, rootState, rootGetters) => { return state.location === (rootGetters['world/mapLength'] - 1) }
}

// mutations
const mutations = {
  advanceLocation (state, amount) {
    state.location += amount
  },
  advanceDay (state, amount) {
    state.day += amount
  }
}

// actions
const actions = {
  takeTurn ({ state, commit, dispatch }) {
    commit('advanceLocation', 1)
    commit('advanceDay', 1)
    dispatch('party/checkPartyHealth', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
