import Vue from 'vue'
import App from './App.vue'

import infiniteScroll from 'vue-infinite-scroll'
import VueWait from 'vue-wait'

import 'vue-mazel-ui/dist/vue-mazel-ui.css'
import './assets/scss/main.scss'
import './utils/ArrayPrototype'

import '@babel/polyfill'

import VueMazelUi from 'vue-mazel-ui'

import store from './store'
Vue.use(VueMazelUi)

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
