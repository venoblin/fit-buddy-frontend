<template>
  <div class="day-exercise capitalize">
    <div class="top">
      <div class="first">
        <div class="up-down-inputs">
          <button>&uarr;</button>
          <button>&darr;</button>
        </div>
        <h3 class="exercise-name">{{ exercise.name }}</h3>
      </div>

      <div class="middle">
        <p v-if="exercise.type === 'cardio'">{{ exercise.duration }} mins</p>
        <p v-else>{{ exercise.sets }} sets | {{ exercise.reps }} reps @ {{ exercise.weight }}LBS</p>
      </div>

      <div class="inputs" v-if="editMode && !showForm">
        <button @click="toggleEdit">Edit</button>
        <button class="danger" @click="deleteExercise(exercise)">Delete</button>
      </div>
    
      <div class="inputs" v-if="!editMode">
        <button @click="clickInstHandler">Instructions</button>
      </div>
    </div>

    <div v-if="showForm">
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

        <button>Save</button>
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

        <button>Save</button>
      </form>
    </div>

    <p v-if="showInstructions" class="instructions">{{ exercise.instructions }}</p>
    
  </div>
</template>

<script>
import { useRoutineStore } from '@/stores/routine'

export default {
  name: 'DayExercise',
  props: ['editMode', 'exercise', 'deleteExercise', 'editExercise'],
  data: () => ({
    showForm: false,
    showInstructions: false,
    sets: null,
    reps: null,
    weight: null,
    duration: null
  }),
  methods: {
    toggleEdit() {
      this.showForm = !this.showForm
    },
    clickInstHandler() {
      this.showInstructions = !this.showInstructions
    },
    submitHandler(evt) {
      evt.preventDefault()

      let update = null
      if (this.exercise.type === 'cardio') {
        update = {
          duration: this.duration
        }
      } else {
        update = {
          sets: this.sets,
          reps: this.reps,
          weight: this.weight
        }
      }

      useRoutineStore().editExercise(this.$route.params.day, this.exercise, update)
      this.showForm = false
    },
    handleChange(evt) {
      const target = evt.target
      this[target.name] = target.value
    }
  },
  mounted: function() {
    if (this.exercise.type === 'cardio') {
      this.duration = this.exercise.duration
    } else {
      this.sets = this.exercise.sets
      this.reps = this.exercise.reps
      this.weight = this.exercise.weight
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.day-exercise {
  max-width: 800px;
  padding: 1rem;
  margin: 0.75rem auto;
  border-bottom: 1px solid $grey;
}

.up-down-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.5rem;
  
  button {
    font-size: 1em;
  }

  button:nth-of-type(1) {
    margin-bottom: 0.25rem;
  }
}

.top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  button {
    margin-left: 0.5rem;
  }

  .first, 
  .middle, 
  .inputs {
    display: flex;
    align-items: center;
  }

  .middle {
    justify-content: center;
  }

  .inputs {
    justify-content: flex-end;
  }
}

@media (max-width: 800px) {
  .top {
    grid-template-columns: 1fr;


    .first, 
    .middle, 
    .inputs {
      justify-content: center;
    }
  }
}
</style>