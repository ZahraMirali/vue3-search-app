import { config } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import categories from '../src/data/categories.json'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)*', component: { template: '' } }]
})

config.global.plugins = [router]
config.global.provide = { categories }
