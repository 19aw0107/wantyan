import Vue from 'vue'
import VueRouter from 'vue-router'
import Title from '../views/Title.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Title',
    component: Title
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/game01',
    name: 'Game01',
    component: () => import('../views/Game01.vue')
  },
  {
    path: '/game02',
    name: 'Game02',
    component: () => import('../views/Game02.vue')
  },
  {
    path: '/game03',
    name: 'Game03',
    component: () => import('../views/Game03.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('../views/score.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
