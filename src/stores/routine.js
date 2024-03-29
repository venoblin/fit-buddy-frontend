import { defineStore } from 'pinia'

const routineLayout = [
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
]

export const useRoutineStore = defineStore('routine', {
  state: () => ({
    routineArr: JSON.parse(
      window.localStorage.getItem('routine') ||
        JSON.stringify([...routineLayout])
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
    },
    editExercise(dayName, e, update) {
      for (let day of this.routineArr) {
        if (day.name === dayName) {
          day.exercises.forEach((exercise, i) => {
            if (exercise.id === e.id)
              day.exercises[i] = { ...exercise, ...update }
          })
        }
      }

      window.localStorage.setItem('routine', JSON.stringify(this.routineArr))
    },
    updateDayExercises(dayName, update) {
      this.routineArr.forEach((r) => {
        if (r.name === dayName) {
          r.exercises = update
        }
      })

      window.localStorage.setItem('routine', JSON.stringify(this.routineArr))
    },
    removeIsDoneDayExercises(dayName) {
      this.routineArr.forEach((r) => {
        if (r.name == dayName && r.exercises.length) {
          for (let e of r.exercises) {
            e.isDone = false
          }
        }
      })
    },
    replaceExercises(dayName, newExercises) {
      this.routineArr.forEach((routine) => {
        if (routine.name === dayName) routine.exercises = newExercises
      })

      window.localStorage.setItem('routine', JSON.stringify(this.routineArr))
      return this.routineArr
    },
    resetRoutine() {
      this.routineArr = [...routineLayout]
    }
  }
})
