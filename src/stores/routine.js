import { defineStore } from 'pinia'

export const useRoutineStore = defineStore('routine', {
  state: () => ({
    routine: []
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
