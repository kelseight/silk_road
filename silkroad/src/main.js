// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import Mapping from './components/Mapping.vue'
import AilmentList from './components/AilmentList.vue'

Vue.component(Mapping.name, Mapping)
Vue.component(AilmentList.name, AilmentList)

const app = new Vue({
  el: '#app',
  router: router
})

export default app
