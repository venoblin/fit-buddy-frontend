<template>
  <div>
    <p>{{ exercise.name }} -> {{ exercise.sets }} sets | {{ exercise.reps }} reps @ {{ exercise.weight }}LBS</p>

    <button v-if="editMode" @click="deleteExercise(exercise)">Delete</button>
  </div>
</template>

<script>
import { useRoutineStore } from '@/stores/routine';

export default {
  name: 'DayExercise',
  props: ['editMode', 'exercise'],
  methods: {
    deleteExercise(e) {
      useRoutineStore().removeExercise(this.day, e)
    }
  }
}
</script>

<style lang="scss" scoped></style>