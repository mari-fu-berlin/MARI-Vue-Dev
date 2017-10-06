import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import Home from '@/components/Home'
import Zlblist from '@/components/Zlblist'
import Zlb from '@/components/Zlb'
import Page from '@/components/Page'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/zlblist',
      name: 'zlblist',
      component: Zlblist
    },
    {
      path: '/zlb/:id',
      name: 'zlb',
      component: Zlb
    },
    {
      path: '/page/:id',
      name: 'page',
      component: Page,
      props: true
    }
  ]
})
