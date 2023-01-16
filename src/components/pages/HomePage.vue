<template>
  <TodaysDate />
  <WeekFull />
</template>

<script>
import TodaysDate from '../TodaysDate.vue'
import WeekFull from '../WeekFull.vue';

export default {
  name: 'HomePage',
  components: {
    TodaysDate,
    WeekFull
  }
}
</script>

<style lang="scss" scoped></style>