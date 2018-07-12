import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import User from '@/views/user/user'
import Detail from '@/views/film/detail'
import List from '@/views/film/filmList'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
