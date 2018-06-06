import Vue from 'vue'
import VueRouter from 'vue-router'

import GamePage from '../components/GamePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: GamePage }
  ]
})
