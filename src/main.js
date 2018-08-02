// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuex)

const worldMap = {
  'Coolville': { location: 30 },
  'Uncoolsville': { location: 50 }
}

const store = new Vuex.Store({
  state: {
    location: 0,
    day: 0,
    partyMembers: {
      'Billy': {hp: 100},
      'Jimmy': {hp: 20}
    },
    inventory: [
      {item: 'salt', amount: 10}
    ],
    worldMap: worldMap,
    atTown: null
  },
  mutations: {
    modifyHP (state, { member, amount }) {
      state.partyMembers[member].hp += amount
    },
    advanceDay (state) {
      state.day++
    },
    advanceLocation (state, {amount}) {
      state.location += amount
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
