import makeTownInfo from '../../scripts/makeTownInfo.js'

// initial state.
const state = {
  townInfo: makeTownInfo(),
  mapLength: 20
}

// getters
const getters = {
  mapLength: state => { return state.mapLength },
  townInfo: state => { return state.townInfo },
  townLocations: (state, getters) => {
    var townLocs = []
    for (const town in getters.townInfo) {
      townLocs.push(getters.townInfo[town].location)
    }
    return townLocs
  },
  townNameForLocation: (state, getters) => (location) => {
    if (getters.townLocations.includes(location)) {
      for (const town in getters.townInfo) {
        if (getters.townInfo[town].location === location) {
          return town
        }
      }
      return false
    }
    return false
  }
}

export default {
  namespaced: true,
  state,
  getters
}
