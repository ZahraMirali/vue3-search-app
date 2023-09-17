import { createRouter, createWebHistory } from 'vue-router'
import SearchResults from '../views/SearchResults.vue'
import AllSearchResults from '../views/AllSearchResults.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/all/:searchTerm',
      alias: '/all',
      component: AllSearchResults,
      props: true
    },
    {
      path: '/:type/:searchTerm',
      alias: '/:type',
      component: SearchResults,
      props: true
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    console.log('savedPosition', savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
