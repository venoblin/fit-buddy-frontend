import { defineStore } from 'pinia'

export const useWorkoutsStore = defineStore('workouts', {
  state: () => ({
    workoutsArr: JSON.parse(
      window.localStorage.getItem('workouts') || JSON.stringify([])
    )
  }),
  actions: {
    addWorkout(workout) {
      this.workoutsArr.forEach((item) => {
        if (item.name === workout.name) return Error
      })

      console.log(workout)
    }
  }
})
