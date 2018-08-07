import makeTownInfo from '../../scripts/makeTownInfo.js'

// mapblock constants
const mapBlocks = {
  'land': {
    'base1': './../static/images/land/plains_128x128_1.png',
    'base1_with_town1': './../static/images/land/plains_with_town_128x128_1.png',
    'base1_with_vehicle1': './../static/images/land/plains_with_wagon_128x128_1.png',
    'base1_with_town1_with_vehicle1': './../static/images/land/plains_with_town_with_wagon_128x128_1.png'
  },
  'sea': {
    'base1': './../static/images/sea/sea_1_128x128.png',
    'base1_with_town1': './../static/images/sea/sea_1_with_port_1_128x128.png',
    'base1_with_vehicle1': './../static/images/sea/sea_1_with_boat_1_128x128.png',
    'base1_with_town1_with_vehicle1': './../static/images/sea/sea_1_with_port_1_with_boat_1_128x128.png'
  }
}

// initial state.
const state = {
  townInfo: makeTownInfo(),
  mapLength: 20,
  worldType: 'land',
  mapBlocks: mapBlocks
}

// getters
const getters = {
  worldType: state => { return state.worldType },
  mapBlocks: state => { return state.mapBlocks },
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
