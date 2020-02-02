import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/list/:cmd',
    name: 'list',
     props: true ,
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/cmd/:cmd',
    name: 'command',
    props: true ,
    component: () => import(/* webpackChunkName: "cmd" */ '../views/Result.vue')
  },
  {
    path: '*',
    redirect: {
      name:"home"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
