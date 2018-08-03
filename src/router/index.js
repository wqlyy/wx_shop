import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import Cart from '@/pages/Cart'
import User from '@/pages/User'
import Detail from '@/pages/Detail'
import Search from '@/pages/Search'
import Order from '@/pages/Order'

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
      component: Home,
      meta: {
        show: true
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        show: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      children:[
        {
          path:'order',
          name:'Order',
          component:Order
        }
      ],
      meta: {
        show: true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        show: true
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        show: false
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        show: false
      }
    }
  ]
})
