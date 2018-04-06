// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vmodal from 'vue-js-modal'
import VueAnalytics from 'vue-analytics'

Vue.use(vmodal)
Vue.use(VueAnalytics, {
  id: 'UA-11104776-8',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    fadeBG (event) {
      eventBus.$emit('modalState', true)
    },
    unfadeBG (event) {
      eventBus.$emit('modalState', false)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
