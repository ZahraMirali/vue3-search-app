import { config } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)*', component: { template: '' } }]
})

const categories = [
  { label: 'People', value: 'people' },
  { label: 'Companies', value: 'companies' }
]

config.global.plugins = [router]
config.global.provide = { categories }
