<template>
  <div>
    <p>{{ exercise.name }} -> {{ exercise.sets }} sets | {{ exercise.reps }} reps @ {{ exercise.weight }}LBS</p>

    <button v-if="editMode" @click="deleteExercise(exercise)">Delete</button>
  </div>
</template>

<script>

export default {
  name: 'DayExercise',
  props: ['editMode', 'exercise', 'deleteExercise']
}
</script>

<style lang="scss" scoped></style>