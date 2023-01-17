import { defineStore } from 'pinia'

export const useRoutineStore = defineStore('routine', {
  state: () => ({
    routineArr: window.localStorage.getItem('routine') || [
      {
        name: 'sun',
        exercises: []
      },
      {
        name: 'mon',
        exercises: [
          {
            name: 'bench press',
            muscle: 'chest',
            equipment: 'bench',
            instructions: 'NA'
          },
          {
            name: 'curls',
            muscle: 'bicep',
            equipment: 'dumbells',
            instructions: 'NA'
          },
          {
            name: 'pulldowns',
            muscle: 'ticeps',
            equipment: 'cable machine',
            instructions: 'NA'
          }
        ]
      },
      {
        name: 'tue',
        exercises: [
          {
            name: 'squats',
            muscle: 'legs',
            equipment: 'dumbells',
            instructions: 'NA'
          },
          {
            name: 'calf raises',
            muscle: 'calfs',
            equipment: 'dumbells',
            instructions: 'NA'
          }
        ]
      },
      {
        name: 'wed',
        exercises: [
          {
            name: 'shoulder shrugs',
            muscle: 'traps',
            equipment: 'dumbells',
            instructions: 'NA'
          },
          {
            name: 'lat pulls',
            muscle: 'lats',
            equipment: 'cable machine',
            instructions: 'NA'
          },
          {
            name: 'shoulder press',
            muscle: 'shoulder',
            equipment: 'dumbells',
            instructions: 'NA'
          }
        ]
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
  }),
  getters: {
    getRoutine: (state) => state.routine
  },
  actions: {
    setRoutine(e) {
      this.routine = e
    }
  }
})
