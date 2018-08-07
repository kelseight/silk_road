// initial state.
const state = {
  location: 0,
  day: 0,
  isDead: false
}

// getters
const getters = {
  location: (state) => { return state.location },
  day: (state) => { return state.day },
  isAtEnd: (state, getters, rootState, rootGetters) => { return state.location === (rootGetters['world/mapLength'] - 1) },
  isAtTown: (state, getters, rootState, rootGetters) => { return (rootGetters['world/townLocations']).filter(loc => (loc === state.location)).length === 1 }
}

// mutations
const mutations = {
  advanceDay (state, amount) {
    state.day += amount
  },
  endGameDeadParty (state) {
    state.isDead = true
  }
}

// actions
const actions = {
  advanceLocation ({ state, commit, dispatch, rootGetters }, payload) {
    // Advance to closest town if less than your movement.
    var amount = 0
    var closestTowns = rootGetters['world/townLocations'].concat([rootGetters['world/mapLength'] - 1])
    closestTowns = closestTowns.filter(loc => loc > state.location)

    if (closestTowns[0] - state.location - payload.advanceAmount < 0) {
      amount = closestTowns[0] - state.location
    } else {
      amount = payload.advanceAmount
    }

    state.location += amount
  },
  takeTurn ({ state, commit, dispatch, rootGetters }, payload) {
    // Check party health, check to see that the party isn't all dead.
    dispatch('party/checkPartyHealth', null, { root: true })
    dispatch('advanceLocation', {advanceAmount: payload.advanceAmount})
    commit('advanceDay', 1)
  },
  goIntoTown ({ state, commit, dispatch, rootGetters }, payload) {
    // TODO: this should do something cool.
    var town = payload.town
    console.log(town)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
