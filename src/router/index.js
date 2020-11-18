import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/mathmaker', name: 'MathMaker', component: HelloWorld },
    { path: '/stocks', name: 'Stocks', component: HelloWorld },
    { path: '/js30', name: 'JS30', component: HelloWorld },
    { path: '/mcklatch', name: 'McKlatch', component: HelloWorld },
    { path: '/provsoup', name: 'ProvSoup', component: HelloWorld },
    { path: '/about', name: 'About', component: HelloWorld },
    { path: '/bible', name: 'Bible', component: HelloWorld }
  ]
})
