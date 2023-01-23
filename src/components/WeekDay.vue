<template>
  <div :class="{day, today: isToday}">
    <p>{{ day.name }}</p>

    <div v-if="day.exercises.length">
      <p>{{ day.exercises.length }}</p>
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

  &.today {
    background-color: darkgray;
  }
}

button {
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>