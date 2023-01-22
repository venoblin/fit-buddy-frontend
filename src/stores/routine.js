import { defineStore } from 'pinia'

export const useRoutineStore = defineStore('routine', {
  state: () => ({
    routineArr: JSON.parse(
      window.localStorage.getItem('routine') ||
        JSON.stringify([
          {
            name: 'sun',
            exercises: []
          },
          {
            name: 'mon',
            exercises: []
          },
          {
            name: 'tue',
            exercises: []
          },
          {
            name: 'wed',
            exercises: []
          },
          {
            name: 'thu',
            exercises: []
          },
          {
            name: 'fri',
            exercises: []
          },
          {
            name: 'sat',
            exercises: []
          }
        ])
    )
  }),
  actions: {
    addExercise(dayName, e) {
      for (let day of this.routineArr) {
        if (day.name === dayName) day.exercises.push(e)
      }

      window.localStorage.setItem('routine', JSON.stringify(this.routineArr))
    },
    removeExercise(dayName, e) {
      for (let day of this.routineArr) {
        if (day.name === dayName) {
          day.exercises = day.exercises.filter(
            (exercise) => exercise.id !== e.id
          )
        }
      }

      window.localStorage.setItem('routine', JSON.stringify(this.routineArr))
    }
  }
})
