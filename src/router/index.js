import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'
import Fifth from '@/components/Fifth'
import Sixth from '@/components/Sixth'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    },
    {
      path: '/Third/:id',
      name: 'Third',
      component: Third
    },
    {
      path: '/Fourth/:id',
      name: 'Fourth',
      component: Fourth
    },
    {
      path: '/Fifth/:id',
      name: 'Fifth',
      component: Fifth
    },
    {
      path: '/Sixth/:id',
      name: 'Sixth',
      component: Sixth
    }
  ]
})
