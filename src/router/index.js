import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')
const isDev = process.env.NODE_ENV !== 'production'
let routePrefix = '' 
let redirectPrefix = isDev ? '': '/blog' 

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: routePrefix + '/top/:page(\\d+)?', component: createListView('top') },
      { path: routePrefix + '/new/:page(\\d+)?', component: createListView('new') },
      { path: routePrefix + '/show/:page(\\d+)?', component: createListView('show') },
      { path: routePrefix + '/ask/:page(\\d+)?', component: createListView('ask') },
      { path: routePrefix + '/job/:page(\\d+)?', component: createListView('job') },
      { path: routePrefix + '/item/:id(\\d+)', component: ItemView },
      { path: routePrefix + '/user/:id', component: UserView },
      { path: routePrefix + '/', redirect: redirectPrefix + '/top' }
    ]
  })
}
