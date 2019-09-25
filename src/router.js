import Vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('./views/home/Home')
const CloudVillage = () => import('./views/cloudVillage/cloudVillage')
const Mvideo = () => import('./views/mvideo/mvideo')
const Profile = () => import('./views/profile/profile')
const Use = () => import('./views/use/use')

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cloudVillage',
    component: CloudVillage
  },
  {
    path: '/mvideo',
    component: Mvideo
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/use',
    component: Use
  },
]

export default new vueRouter({
  mode: 'history',
  routes
})
