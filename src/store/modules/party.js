import makePartyInfo from '../../scripts/makePartyInfo.js'

// initial state.
const state = {
  partyInfo: makePartyInfo(),
  coin: 100
}

// getters
const getters = {
  // Object giving info about all the party members as well as the party items, etc..
  partyInfo: state => { return state.partyInfo },
  // Gives info about all of the party members.
  partyMembersInfo: (state, getters) => { return getters.partyInfo.partyMembers },
  // Gives info for specific party member.
  partyMemberInfo: (state, getters) => (member) => { return getters.partyMembersInfo[member] },
  // List of the party members currently alive.
  partyMembers: (state, getters) => { return Object.keys(getters.partyInfo.partyMembers) },
  // Lists all dead party members.
  deadPartyMembers: (state, getters) => { return getters.partyInfo.deadPartyMembers },
  // Gives the size of the party.
  partySize: (state, getters) => { return Object.keys(getters.partyMembersInfo).length }
}

const mutations = {
  removeDeadMembers (state) {
    for (const member in state.partyInfo.partyMembers) {
      if (state.partyInfo.partyMembers[member].hp <= 0) {
        delete state.partyInfo.partyMembers[member]
        state.partyInfo.deadPartyMembers.push(member)
      }
    }
  },
  changeHP (state, payload) {
    state.partyInfo.partyMembers[payload.member].hp += payload.amount
  }
}

const actions = {
  checkPartyHealth ({ commit, state, getters }) {
    commit('removeDeadMembers')
  }
}

//     checkPartyHealth (state) {
//       for (var member in state.partyInfo.partyMembers) {
//         if (state.partyInfo.partyMembers[member].hp <= 0) {
//           state.partyInfo.deadPartyMembers.push(member)
//           delete state.partyInfo.partyMembers[member]
//         }
//       }
//       if (Object.keys(state.partyInfo.partyMembers).length === 0) {
//         state.currentPlayerInfo.alive = false
//       }
//     }
//   }

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
