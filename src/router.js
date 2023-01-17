import { createRouter, createWebHistory } from 'vue-router'
import EnterName from '@/components/pages/EnterName'
import HomePage from '@/components/pages/HomePage'
import EditDay from '@/components/pages/EditDay'

let routes = []

if (window.localStorage.getItem('user')) {
  routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/edit/:day', component: EditDay, name: 'EditDay' }
  ]
} else {
  routes = [{ path: '/:catchAll(.*)', component: EnterName, name: 'EnterName' }]
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
