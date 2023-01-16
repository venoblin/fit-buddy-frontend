import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import EditDay from '@/components/pages/EditDay'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/edit/:day', component: EditDay, name: 'EditDay' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
