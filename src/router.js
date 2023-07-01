import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/pages/NotFound'
import HomePage from '@/components/pages/HomePage'
import EditDay from '@/components/pages/EditDay'
import UserProfile from '@/components/pages/UserProfile'

let routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/edit/:day', component: EditDay, name: 'EditDay' },
  { path: '/profile', component: UserProfile, name: 'UserProfile' },
  { path: '/:catchAll(.*)', component: NotFound, name: 'NotFound' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
