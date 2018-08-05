// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Scripts
import makeTownInfo from './scripts/makeTownInfo.js'
import makePartyInfo from './scripts/makePartyInfo.js'

// Components
import MiniMap from './components/parts/MiniMap.vue'

Vue.component(MiniMap.name, MiniMap)

Vue.use(Vuetify)
Vue.use(Vuex)

const currentPlayerInfo = {
  location: 0,
  day: 0,
  atTown: 0
}

const townInfo = makeTownInfo()
const partyInfo = makePartyInfo()

const store = new Vuex.Store({
  state: {
    currentPlayerInfo: currentPlayerInfo,
    partyInfo: partyInfo,
    townInfo: townInfo,
    mapLength: 75
  },
  mutations: {
    modifyHP (state, { member, amount }) {
      state.partyMembers[member].hp += amount
    },
    advanceDay (state) {
      state.currentPlayerInfo.day++
    },
    advanceLocation (state, {amount}) {
      state.currentPlayerInfo.location += amount
    }
  }
})

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})

export default app
