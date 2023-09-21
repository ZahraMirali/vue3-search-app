import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResults.vue'
import Details from '../views/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      props: true
    },
    {
      path: '/:type',
      component: SearchResults,
      props: (route) => ({ keywords: route.query.keywords })
    },
    {
      path: '/:type/:slug',
      component: Details,
      props: true
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
