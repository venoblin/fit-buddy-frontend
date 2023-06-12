<template>
  <TodaysDate />
  <WeekFull />
  <TodaysRoutine />
</template>

<script>
import TodaysDate from '../TodaysDate.vue'
import WeekFull from '../WeekFull.vue'
import TodaysRoutine from '../TodaysRoutine.vue';

export default {
  name: 'HomePage',
  components: {
    TodaysDate,
    WeekFull,
    TodaysRoutine
  }
}
</script>

<style lang="scss" scoped></style>