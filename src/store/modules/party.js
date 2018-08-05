import makePartyInfo from '../../scripts/makePartyInfo.js'

// initial state.
const state = {
  partyInfo: makePartyInfo(),
  coin: 100
}

// getters
const getters = {
  partyInfo: state => { return state.partyInfo },
  partyMembers: (state, getters) => { return Object.keys(getters.partyInfo.partyMembers) },
  partyMembersInfo: (state, getters) => { return getters.partyInfo.partyMembers },
  deadPartyMembers: state => { return state.deadPartyMembers },
  inventory: state => { return state.inventory },
  partyMemberInfo: (state, getters) => (partyMember) => { return getters.partyMembersInfo[partyMember] },
  partySize: state => { return Object.keys(getters.partyMembersInfo).length }
}

const mutations = {
  checkIfDead (state, member) {
    return state.partyInfo[member].hp <= 0
  },
  putInGraveyard (state, member) {
    delete state.partyInfo.partyMembers[member]
    state.partyInfo.deadPartyMembers.push(member)
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
  mutations
}
