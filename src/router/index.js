import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import Cart from '@/pages/Cart'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
