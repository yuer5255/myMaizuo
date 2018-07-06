import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Slide from '@/components/slide'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/slide',
      component: Slide
    }
  ]
})
