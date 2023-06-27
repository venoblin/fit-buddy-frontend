import { createRouter, createWebHistory } from 'vue-router'
import EnterName from '@/components/pages/EnterName'
import HomePage from '@/components/pages/HomePage'
import EditDay from '@/components/pages/EditDay'
import UserProfile from '@/components/pages/UserProfile'

let routes = []

if (window.localStorage.getItem('user')) {
  routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/edit/:day', component: EditDay, name: 'EditDay' },
    { path: '/profile', component: UserProfile, name: 'UserProfile' }
  ]
} else {
  routes = [{ path: '/:catchAll(.*)', component: EnterName, name: 'EnterName' }]
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
