<template>
  <div class="day">
    <p>{{ day }}</p>
    
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