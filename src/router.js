import Vue from 'vue'
import Router from 'vue-router'
import System from './views/General System Setup.vue'
import one from './views/Page 1.vue'
import two from './views/Page 2.vue'
import three from './views/Page 3.vue'
import four from './views/Page 4.vue'
import five from './views/Page 5.vue'
import six from './views/Page 6.vue'
import seven from './views/Page 7.vue'
import eight from './views/Page 8.vue'
import nine from './views/Page 9.vue'
import ten from './views/Page 10.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'General System Setup',
      component: System
    },
    {
      path: '/Page 1',
      name: 'Page 1',
      component: one
    },
    {
      path: '/Page 2',
      name: 'Page 2',
      component: two
    },
    {
      path: '/Page 3',
      name: 'Page 3',
      component: three
    },
    {
      path: '/Page 4',
      name: 'Page 4',
      component: four
    },
    {
      path: '/Page 5',
      name: 'Page 5',
      component: five
    },
    {
      path: '/Page 6',
      name: 'Page 6',
      component: six
    },
    {
      path: '/Page 7',
      name: 'Page 7',
      component: seven
    },
    {
      path: '/Page 8',
      name: 'Page 8',
      component: eight
    },
    {
      path: '/Page 9',
      name: 'Page 9',
      component: nine
    },
    {
      path: '/Page 10',
      name: 'Page 10',
      component: ten
    }
  ]
})
