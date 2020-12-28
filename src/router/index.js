import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'
import Error404 from '@/components/404'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Cart from '@/components/Cart'
import Pay from '@/components/Pay'
import Test from '@/components/Test'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/details/:name',
      component: Details
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/search/',
      redirect: '/search/ '
    },
    {
      path: '/search/:search',
      component: Search
    },
    {
      path: '*',
      component: Error404
    }
  ]
})
