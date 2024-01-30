<template>
  <div class="exercise-card">
    
    <h3 class="name">{{ exercise.name }}</h3>
    
    <div v-if="addMode">
      <form v-if="exercise.type === 'cardio'" @submit="submitHandler">
        <div>
          <label for="duration">Duration(minutes):</label>
          <input 
            type="number"
            name="duration"
            id="duration"
            min="1"
            :value="duration"
            @change="handleChange"
          />
        </div>

        <button>Add</button>
      </form>

      <form v-else @submit="submitHandler">
        <div>
          <label for="sets">Sets:</label>
          <input 
            type="number"
            name="sets"
            id="sets"
            min="1"
            :value="sets"
            @change="handleChange"
          />
        </div>

        <div>
          <label for="reps">Reps:</label>
          <input 
            type="number"
            name="reps"
            id="reps"
            min="1"
            :value="reps"
            @change="handleChange"
          />
        </div>

        <div>
          <label for="weight">Weight(LBS):</label>
          <input 
            type="number"
            name="weight"
            id="weight"
            min="1"
            :value="weight"
            @change="handleChange"
          />
        </div>

        <button>Add</button>
      </form>
    </div>
    
    <div v-else>
      <p class="muscle">Muscle: {{ exercise.muscle }}</p>
      <p class="equipment">Equipment: {{ exercise.equipment }}</p>
      
      <div class="inputs">
        <button @click="clickInstHandler">Instructions</button>
        <button @click="clickAddHandler">Add</button>
      </div>
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
@import '@/assets/styles/global.scss';

.exercise-card {
  max-width: 500px;
  padding: 1rem;
  margin: 1rem auto;
  border-bottom: 1px solid $grey;
}

.name,
.muscle,
.equipment {
  text-transform: capitalize;
}

.inputs button {
  margin: 0 0.5rem;
}
</style>