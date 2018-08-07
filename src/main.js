// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Components
import Game from './components/Game.vue'
import MiniMap from './components/parts/MiniMap.vue'
import PartyList from './components/parts/PartyList.vue'
import WorldInfo from './components/parts/WorldInfo.vue'
import PlayerControls from './components/parts/PlayerControls.vue'
import TownBar from './components/parts/TownBar.vue'

Vue.component(Game.name, Game)
Vue.component(MiniMap.name, MiniMap)
Vue.component(PartyList.name, PartyList)
Vue.component(WorldInfo.name, WorldInfo)
Vue.component(PlayerControls.name, PlayerControls)
Vue.component(TownBar.name, TownBar)

Vue.use(Vuetify)
Vue.use(Vuex)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

export default app
