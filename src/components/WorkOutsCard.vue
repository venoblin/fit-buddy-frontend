<template>
  <div class="workout-card">
    <h3>{{ workout.name }}</h3>
    <p v-for="exercise in workout.exercises" :key="exercise.id">{{ exercise.name }}</p>

    <div class="inputs">
      <button @click="loadHandler">Load</button>
      <button class="danger" @click="deleteWorkout(workout)">Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkOutsCard',
  props: ['workout', 'deleteWorkout', 'loadWorkout', 'closeHandler'],
  methods: {
    loadHandler() {
      this.loadWorkout(this.workout)
      this.closeHandler()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.workout-card {
  text-align: left;
  background-color: $white;
  max-width: 250px;
  margin: 0.5rem auto;
  border-radius: 1rem;
  padding: 0.75rem;
  transition: all 0.3s ease;

  h3 {
    text-transform: uppercase;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.85em;
    margin: 0.25rem 0;
    border-bottom: 1px solid $grey;
  }

  .inputs {
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    button {
      margin: 0 0.25rem;
    }
  }
}

</style>