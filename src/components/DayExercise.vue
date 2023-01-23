<template>
  <div>
    <p v-if="exercise.type === 'cardio'">{{ exercise.name }} -> {{ exercise.duration }} mins</p>
    <p v-else>{{ exercise.name }} -> {{ exercise.sets }} sets | {{ exercise.reps }} reps @ {{ exercise.weight }}LBS</p>

    <div v-if="showForm">
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

    <div v-if="editMode">
      <button @click="toggleEdit">Edit</button>
      <button @click="deleteExercise(exercise)">Delete</button>
    </div>
  </div>
</template>

<script>
import { useRoutineStore } from '@/stores/routine'

export default {
  name: 'DayExercise',
  props: ['editMode', 'exercise', 'deleteExercise', 'editExercise'],
  data: () => ({
    showForm: false,
    sets: 1,
    reps: 1,
    weight: 10,
    duration: 15
  }),
  methods: {
    toggleEdit() {
      this.showForm = !this.showForm
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
    },
    handleChange(evt) {
      const target = evt.target
      this[target.name] = target.value
    }
  }
}
</script>

<style lang="scss" scoped></style>