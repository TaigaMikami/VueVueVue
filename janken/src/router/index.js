import Vue from 'vue'
import Router from 'vue-router'
import Janken from '@/components/Janken'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/janken',
      name: 'Janken',
      component: Janken
    },
    {
      path: '/score',
      name: Score,
      component: Score
    },
    {
      path: '*',
      redirect: '/janken'
    }
  ]
})
