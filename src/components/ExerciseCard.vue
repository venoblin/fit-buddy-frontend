<template>
  <div class="exercise-card">
    <button @click="clickAddHandler">Toggle Add Mode</button>
    
    <p class="name">{{ exercise.name }}</p>

    <div v-if="addMode">
      ADD
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

export default {
  name: 'ExerciseCard',
  props: ['exercise'],
  data: () => ({
    day: null,
    showInstructions: false,
    addMode: false
  }),
  methods: {
    clickInstHandler() {
      this.showInstructions = !this.showInstructions
    },
    clickAddHandler() {
      this.addMode = !this.addMode
      if (this.showInstructions) this.showInstructions = false
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