<template>
  <div :class="{day, today: isToday}" @click="navigate(day)">
    <p>{{ day.name }}</p>

    <div v-if="day.exercises.length">
      <p>{{ day.exercises.length }}</p>
    </div>

    <div v-else>
      <p>Rest Day</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WeekDay',
  props: ['day', 'isToday'],
  methods: {
    navigate(day) {
      this.$router.push(`/edit/${day.name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.day {
  position: relative;
  padding: 2rem;
  border: 1px solid black;
  cursor: pointer;

  &.today {
    background-color: darkgray;
  }
}
</style>