import Vue from 'vue'
import vueRouter from 'vue-router'

const Home = () => import('./views/home/Home')
const CloudVillage = () => import('./views/cloudVillage/cloudVillage')
const Mvideo = () => import('./views/mvideo/mvideo')
const Profile = () => import('./views/profile/profile')
const Use = () => import('./views/use/use')
const SongList = () => import('./views/songList/songList')
const Playing = () => import('./views/playing/playing')
const rankingList = () => import('./views/rankingList/rankingList')
const searchMusic = () => import('./views/searchMusic/searchMusic')

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
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
  {
    path: '/songlist',
    component: SongList
  },
  {
    path: '/playing',
    component: Playing
  },
  {
    path: '/rankinglist',
    component: rankingList
  },
  {
    path: '/searchmusic',
    component: searchMusic
  },
]

export default new vueRouter({
  mode: 'history',
  routes
})
