import Vue from 'vue'
import Vuex from 'vuex'
import party from './modules/party.js'
import world from './modules/world.js'
import player from './modules/player.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    party,
    world,
    player
  }
})

export default store
