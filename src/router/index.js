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
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third/:id',
      name: 'Third',
      component: Third
    },
    {
      path: '/fourth/:id',
      name: 'Fourth',
      component: Fourth
    },
    {
      path: '/fifth/:id',
      name: 'Fifth',
      component: Fifth
    },
    {
      path: '/sixth/:id',
      name: 'Sixth',
      component: Sixth
    },
    {
      path: '*', // 若都無符合上述條件，則轉址「Home首頁」
      redirect: '/Hello'
    }
  ]
})
