<template>
  <div>
    <p v-if="exercise.type === 'cardio'">{{ exercise.name }} -> {{ exercise.duration }} mins</p>
    <p v-else>{{ exercise.name }} -> {{ exercise.sets }} sets | {{ exercise.reps }} reps @ {{ exercise.weight }}LBS</p>

    <div v-if="editMode">
      <button @click="toggleEdit">Edit</button>
      <button @click="deleteExercise(exercise)">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DayExercise',
  props: ['editMode', 'exercise', 'deleteExercise', 'editExercise'],
  data: () => ({
    showForm: false
  }),
  methods: {
    toggleEdit() {
      this.showForm = !this.showForm
    }
  }
}
</script>

<style lang="scss" scoped></style>