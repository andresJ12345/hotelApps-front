import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotelEdit from '../views/Hotelviews/HotelEdit.vue'
import HotelNew from '../views/Hotelviews/HotelNew.vue'
import HotelView from '../views/Hotelviews/HotelView.vue'
import HotelAll from '../views/Hotelviews/HotelAll.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/HotelNew',
      name: 'HotelNew',
      component: HotelNew
    },
    {
      path: '/HotelAll',
      name: 'HotelAll',
      component: HotelAll
    },
    {
      path: '/HotelEdit/:id',
      name: 'HotelEdit',
      component: HotelEdit
    },  
    {
      path: '/HotelView/:id',
      name: 'HotelView',
      component: HotelView
    }, 
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
