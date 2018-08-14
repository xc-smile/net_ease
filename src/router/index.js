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



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/knowthings',
      component: KnowThings
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/classify',
      component: Classify,
      children: [
        {
        path: 'classifyitem/:id',
        component: ClassifyItem,
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
  ]
})
