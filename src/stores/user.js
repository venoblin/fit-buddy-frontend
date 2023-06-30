import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: window.localStorage.getItem('user') || '',
    favoritesArr: JSON.parse(
      window.localStorage.getItem('favorites') || JSON.stringify([])
    )
  }),
  actions: {
    setUserName(newName) {
      this.user = newName
      window.localStorage.setItem('user', newName)
    },
    deleteUser() {
      this.user = ''
      window.localStorage.clear()
    }
  }
})
