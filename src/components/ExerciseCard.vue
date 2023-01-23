<template>
  <div class="exercise-card">
    <button @click="clickAddHandler">Toggle Add Mode</button>
    
    <p class="name">{{ exercise.name }}</p>

    <div v-if="addMode">
      <form v-if="exercise.type === 'cardio'" @submit="submitHandler">
        <label for="duration">Duration(minutes)</label>
        <input 
        type="number"
        name="duration"
        id="duration"
        min="1"
        :value="duration"
        @change="handleChange"
        />

        <button>Add</button>
      </form>

      <form v-else @submit="submitHandler">
        <label for="sets">Sets</label>
        <input 
        type="number"
        name="sets"
        id="sets"
        min="1"
        :value="sets"
        @change="handleChange"
        />

        <label for="reps">Reps</label>
        <input 
        type="number"
        name="reps"
        id="reps"
        :value="reps"
        @change="handleChange"
        />

        <label for="weight">Weight(LBS)</label>
        <input 
        type="number"
        name="weight"
        id="weight"
        :value="weight"
        @change="handleChange"
        />

        <button>Add</button>
      </form>
    </div>
    
    <div v-else>
      <p class="muscle">Muscle: {{ exercise.muscle }}</p>
      <p class="equipment">Equipment: {{ exercise.equipment }}</p>

      <button @click="clickInstHandler">Toggle Instructions</button>
      <p v-if="showInstructions" class="instructions">{{ exercise.instructions }}</p>
    </div>
  </div>
</template>

<script>
import { useRoutineStore } from '@/stores/routine'
import { v4 as uuid } from 'uuid'

export default {
  name: 'ExerciseCard',
  props: ['exercise', 'resetExercises'],
  data: () => ({
    day: null,
    showInstructions: false,
    addMode: false,
    sets: 1,
    reps: 1,
    weight: 10,
    duration: 15
  }),
  methods: {
    clickInstHandler() {
      this.showInstructions = !this.showInstructions
    },
    clickAddHandler() {
      this.addMode = !this.addMode
      if (this.showInstructions) this.showInstructions = false
    },
    submitHandler(evt) {
      evt.preventDefault()

      let e = null
      if (this.exercise.type === 'cardio') {
        e = {
          id: uuid(),
          name: this.exercise.name,
          type: this.exercise.type,
          muscle: this.exercise.muscle,
          equipment: this.exercise.equipment,
          instructions: this.exercise.instructions,
          duration: this.duration
        }
      } else {
        e = {
          id: uuid(),
          name: this.exercise.name,
          type: this.exercise.type,
          muscle: this.exercise.muscle,
          equipment: this.exercise.equipment,
          instructions: this.exercise.instructions,
          sets: this.sets,
          reps: this.reps,
          weight: this.weight
        }
      }

      

      useRoutineStore().addExercise(this.day, e)
      this.resetExercises()
    },
    handleChange(evt) {
      const target = evt.target
      this[target.name] = target.value
    }
  },
  mounted: function() {
    this.day = this.$route.params.day
  }
}
</script>

<style lang="scss" scoped>
.exercise-card {
  max-width: 500px;
  padding: 1rem;
  margin: 1rem auto;
  background-color: darkgray;
}
</style>