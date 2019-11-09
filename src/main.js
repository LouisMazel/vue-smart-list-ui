import Vue from 'vue'
import App from './App.vue'

import infiniteScroll from 'vue-infinite-scroll'
import VueWait from 'vue-wait'

import './assets/scss/main.scss'
import './utils/ArrayPrototype'

import '@babel/polyfill'

import store from './store'

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
  render: h => h(App),
}).$mount('#app')
