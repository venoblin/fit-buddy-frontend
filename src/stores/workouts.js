import { defineStore } from 'pinia'

export const useWorkoutsStore = defineStore('workouts', {
  state: () => ({
    workoutsArr: JSON.parse(
      window.localStorage.getItem('workouts') || JSON.stringify([])
    )
  }),
  actions: {}
})
