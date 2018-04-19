import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home.vue'
import Answer from '../view/answer.vue'
import Cheats from '../view/cheats.vue'
import PkAnswer from '../view/pk-answer.vue'
import Ranking from '../view/ranking.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Answer',
      name: 'Answer',
      component: Answer
    },
    {
      path: '/Cheats',
      name: 'Cheats',
      component: Cheats
    },
    {
      path: '/PkAnswer',
      name: 'PkAnswer',
      component: PkAnswer
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking
    }

  ]
})
