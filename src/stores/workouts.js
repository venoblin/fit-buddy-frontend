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
        if (item.name.toLowerCase() === workout.name.toLowerCase()) throw Error
      })

      this.workoutsArr.push(workout)
      window.localStorage.setItem('workouts', JSON.stringify(this.workoutsArr))
    },
    deleteWorkout(workout) {
      this.workoutsArr = this.workoutsArr.filter(
        (item) => item.name !== workout.name
      )

      window.localStorage.setItem('workouts', JSON.stringify(this.workoutsArr))
      return this.workoutsArr
    },
    resetWorkouts() {
      this.workoutsArr = []
    }
  }
})
