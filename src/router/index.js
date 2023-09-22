import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SearchResultsPage from '../views/SearchResultsPage.vue'
import DetailsPage from '../views/DetailsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      props: true
    },
    {
      path: '/:type',
      component: SearchResultsPage,
      props: (route) => ({ keywords: route.query.keywords })
    },
    {
      path: '/:type/:slug',
      component: DetailsPage,
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
