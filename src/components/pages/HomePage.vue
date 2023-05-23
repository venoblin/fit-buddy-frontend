<template>
  <TodaysDate />
  <AlertPopUp :msg="'TEST MESSAGE'" />
  <WeekFull />
  <TodaysRoutine />
</template>

<script>
import TodaysDate from '../TodaysDate.vue'
import WeekFull from '../WeekFull.vue'
import TodaysRoutine from '../TodaysRoutine.vue';
import AlertPopUp from '../AlertPopUp.vue';

export default {
  name: 'HomePage',
  components: {
    TodaysDate,
    WeekFull,
    TodaysRoutine,
    AlertPopUp
  }
}
</script>

<style lang="scss" scoped></style>