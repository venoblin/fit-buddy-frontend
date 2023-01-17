<template>
  <div class="exercise-card">
    <p class="name">{{ exercise.name }}</p>
    <p class="muscle">Muscle: {{ exercise.muscle }}</p>
    <p class="equipment">Equipment: {{ exercise.equipment }}</p>

    <button @click="clickHandler">Toggle Instructions</button>
    <p v-if="showInstructions" class="instructions">{{ exercise.instructions }}</p>
  </div>
</template>

<script>

export default {
  name: 'ExerciseCard',
  props: ['exercise'],
  data: () => ({
    showInstructions: false
  }),
  methods: {
    clickHandler() {
      this.showInstructions = !this.showInstructions
    }
  }
}
</script>

<style lang="scss" scoped>
.exercise-card {
  padding: 1rem;
  margin: 1rem 0;
  background-color: darkgray;
}
</style>