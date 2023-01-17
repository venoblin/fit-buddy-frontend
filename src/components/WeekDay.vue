<template>
  <div class="day">
    <p>{{ day.name }}</p>

    <div v-if="day.exercises.length">
      <div class="exercise" v-for="e in day.exercises" :key="e.name">
        <p>{{ e.name }}</p>
      </div>
    </div>

    <div v-else>
      <p>Rest Day</p>
    </div>
    
    <button class="link" @click="navigate(day)">Edit</button>
  </div>
</template>

<script>

export default {
  name: 'WeekDay',
  props: ['day'],
  methods: {
    navigate(day) {
      this.$router.push(`/edit/${day}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.day {
  padding: 2rem;
  border: 1px solid black;
}
</style>