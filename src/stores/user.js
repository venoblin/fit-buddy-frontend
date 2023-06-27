import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: window.localStorage.getItem('user')
  })
})
