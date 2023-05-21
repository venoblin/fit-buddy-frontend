<template>
  <div class="workout-card">
    <h3>{{ workout.name }}</h3>
    <p 
    v-for="exercise in workout.exercises"
    :key="exercise.id">{{ exercise.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'WorkOutsCard',
  props: ['workout']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.workout-card {
  cursor: pointer;
  background-color: $white;
  border: 1px solid $darkBlue;
  max-width: 250px;
  margin: 0.5rem auto;
  border-radius: 1rem;
  padding: 0 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: $darkBlue;
    color: $white;
    border-color: $white;
  }
}

</style>