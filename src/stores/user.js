import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: window.localStorage.getItem('user') || null
  }),
  actions: {
    setUserName(newName) {
      this.user = newName
      window.localStorage.setItem('user', newName)
    },
    deleteUser() {
      this.user = null
      window.localStorage.clear()
    }
  }
})
