import makePartyInfo from '../../scripts/makePartyInfo.js'

// initial state.
const state = {
  partyInfo: makePartyInfo(),
  coin: 100
}

// getters
const getters = {
  coinAmount: state => { return state.coin },
  deadMembers: state => { return state.partyInfo.deadMembers },
  members: state => { return state.partyInfo.members },
  memberStatus: state => { return state.partyInfo.memberStatus }
}

const mutations = {
  removeDeadMembers (state) {
    for (var idx = 0; idx < state.partyInfo.members.length; idx++) {
      var memberName = state.partyInfo.members[idx]
      if (state.partyInfo.memberStatus[memberName].hp <= 0) {
        delete state.partyInfo.members[idx]
        state.partyInfo.deadMembers.push(memberName)
      }
    }
    state.partyInfo.members = state.partyInfo.members.filter(
      function (n) { return n !== undefined }
    )
  },
  changeHP (state, payload) {
    state.partyInfo.memberStatus[payload.member].hp += payload.amount
  }
}

const actions = {
  checkPartyHealth ({ commit, state, getters }) {
    commit('removeDeadMembers')
    if (getters.members.length === 0) {
      commit('player/endGameDeadParty', null, { root: true })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
