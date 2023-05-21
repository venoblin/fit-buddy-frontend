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
  text-align: left;
  cursor: pointer;
  background-color: $white;
  border: 1px solid $darkBlue;
  max-width: 250px;
  margin: 0.5rem auto;
  border-radius: 1rem;
  padding: 0 0.75rem;
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

  &:hover {
    background-color: $darkBlue;
    color: $white;
    border-color: $white;
  }
}

</style>