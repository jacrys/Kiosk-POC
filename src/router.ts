import { createRouter, createWebHistory, type RouteRecordRaw, type Router} from 'vue-router';
import Home from "./views/Home.vue"
import Map1910 from "./views/Maps/1910.vue"
import Map1920 from "./views/Maps/1920.vue"
import current from "./views/Maps/current.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maps/1910',
    name: '1910',
    component: Map1910
   },
   {
     path: '/maps/1920',
     name: '1920',
     component: Map1920
    },
    {
      path: '/maps/current',
      name: 'current',
      component: current
     }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;