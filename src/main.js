import MazUi from 'maz-ui'
import Vue from 'vue'
import App from './App.vue'

import infiniteScroll from 'vue-infinite-scroll'
import VueWait from 'vue-wait'
import './utils/ArrayPrototype'

import 'maz-ui/dist/maz-ui.css'
import './assets/scss/main.scss'

import '@babel/polyfill'

import store from './store'
Vue.use(MazUi)

Vue.config.productionTip = false

const moment = require('moment')
moment.locale('fr')

Vue.use(require('vue-moment'), {
  moment
})

Vue.use(infiniteScroll)
Vue.use(VueWait)

new Vue({
  store,
  wait: new VueWait({
    useVuex: true
  }),
  render: h => h(App)
}).$mount('#app')
