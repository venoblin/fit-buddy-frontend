<template>
  <p class="date">{{ today.month }} {{ today.dd }} | {{ today.year }}</p>
</template>

<script>
import { getTodaysDate, daysArr } from '@/utils';
import { useRoutineStore } from '@/stores/routine';

export default {
  name: 'TodaysDate',
  data: () => ({
    today: getTodaysDate()
  }),
  mounted: function() {
    useRoutineStore().removeIsDoneDayExercises(daysArr[this.today.dayIndex - 1])
  }
}

</script>

<style lang="scss" scoped>
.date {
  text-transform: capitalize;
}
</style>