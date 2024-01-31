<template>
  <div class="day-exercise capitalize" :class="{ done: isDone }">
    <div class="top">
      <div class="first">
        <div class="up-down-inputs" v-if="editMode && !showForm">
          <button @click="moveExercise('left')">&uarr;</button>
          <button @click="moveExercise('right')">&darr;</button>
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
      
      <div class="last" v-if="!editMode">
        <div class="input">
          <p>Done: </p>
          <input type="checkbox" @change="doneToggle" :checked="isDone" />       
        </div>

        <button class="inst-btn" @click="clickInstHandler">Instructions</button>  
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
  props: ['editMode', 'exercise', 'deleteExercise', 'editExercise', 'day'],
  data: () => ({
    showForm: false,
    showInstructions: false,
    isDone: false,
    sets: null,
    reps: null,
    weight: null,
    duration: null,
    routine: useRoutineStore().routineArr
  }),
  methods: {
    doneToggle() {
      useRoutineStore().editExercise(this.day, this.exercise, {isDone: !this.isDone})
      this.isDone = !this.isDone
    },
    findExercisePosition() {
      let idx = null
      let dayExercises = null

      this.routine.forEach(r => {
        if (r.name === this.day) {
          dayExercises = r.exercises
          dayExercises.forEach(e => {
            if (e.id === this.exercise.id) {
              idx = r.exercises.indexOf(this.exercise)
            }
          })
        }
      })

      return {idx, dayExercises}
    },
    moveExercise(direction) {
      const {idx, dayExercises} = this.findExercisePosition()

      if(direction === 'left') {
        if (idx > 0) {
          dayExercises[idx] = dayExercises[idx - 1]
          dayExercises[idx - 1] = this.exercise
        }
      } else if (direction === 'right') {
        if (idx < dayExercises.length - 1) {
          dayExercises[idx] = dayExercises[idx + 1]
          dayExercises[idx + 1] = this.exercise
        }
      }

      useRoutineStore().updateDayExercises(this.day, dayExercises)
    },
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

    this.isDone = this.exercise.isDone
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
  position: relative;
  border-radius: 5px;

  &.done {
    background-color: $green;

    .exercise-name,
    .middle p {
      text-decoration: line-through;
    }

    .inst-btn {
      display: none;
    }
  }
}

.up-down-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.5rem;
  
  button {
    font-size: 0.75em;
    border-radius: 0 0 1rem 1rem;
  }
  
  button:nth-of-type(1) {
    margin-bottom: 0.25rem;
    border-radius: 1rem 1rem 0 0;
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

.last {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  button {
    margin-bottom: 0.75rem;
  }

  .input {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
      height: 1rem;
      width: 1rem;
    }
  }
}

@media (max-width: 800px) {
  
  .up-down-inputs {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .top {
    grid-template-columns: 1fr;

    .first, 
    .middle, 
    .inputs {
      justify-content: center;
    }

    .last {
      align-items: center;
    }
  }
}
</style>