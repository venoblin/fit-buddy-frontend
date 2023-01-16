<template>
  <div class="day">
    <p>{{ day }}</p>
    
    <p @click="navigate(day)">Edit</p>
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