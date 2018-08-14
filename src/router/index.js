import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home'
import KnowThings from '../pages/knowThings'
import Classify from '../pages/classify'
import ShopCart from '../pages/shopCart'
import Personal from '../pages/personal'
import DownLoad from '../pages/downLoad'
import Search from '../pages/search'
import ClassifyItem from '../pages/classify/classifyItem/ClassifyItem'
import PhoneLogin from '../pages/login/phoneLogin/index'
import EmailLogin from '../pages/login/emailLogin/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/download'
    },
    {
      path: '/phonelogin',
      component: PhoneLogin
    },
    {
      path: '/emaillogin',
      component: EmailLogin
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/knowthings',
      component: KnowThings,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,

      children: [
        {
          path: 'classifyitem/:id',
          component: ClassifyItem,
          meta: {
            showFooter: true
          },
        }
      ]
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/download',
      component: DownLoad
    },
    {
      path: '/search',
      component: Search
    },
  ],
  scrollBehavior (to, from, savedPosition) {
   return {
     x: 0,
     y: 0
   }
  }
})
