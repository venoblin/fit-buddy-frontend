<template>
  <div class="workout-card">
    <p>{{ workout.name }}</p>
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

p {
  color: $white;
}
</style>