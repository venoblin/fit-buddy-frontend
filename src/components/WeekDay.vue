<template>
  <div :class="{day, today: isToday}" @click="navigate(day)">
    <p class="day-name">{{ day.name }}</p>

    <div class="counter" v-if="day.exercises.length">
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
@import '@/assets/styles/global.scss';
.day {
  flex: 1;
  position: relative;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  .day-name {
    border-bottom: 1px solid $darkBlue;
  }

  .counter {
    width: 2.25rem;
    height: 2.25rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $green;

    p {
      margin: 0;
    }
  }
  &.today {
    background-color: $grey;
  }

  &:hover {
    background-color: $darkBlue;
    color: $white;

    .day-name {
      border-color: $white;
    }
  }
}
</style>