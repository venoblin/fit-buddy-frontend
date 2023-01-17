<template>
  <div class="week">
    <WeekDay v-for="day in routine" :key="day" :day="day" :isToday="day.name === todaysDay" />
  </div>
</template>

<script>
import { useRoutineStore } from '../stores/routine';
import { getTodaysDate } from '@/utils';
import WeekDay from './WeekDay.vue';

export default {
  name: 'WeekFull',
  components: {
    WeekDay
  },
  data: () => ({
    routine: useRoutineStore().routineArr,
    todaysDay: getTodaysDate().dayName,
  })
}

</script>

<style lang="scss" scoped>
.week {
  display: flex;
  justify-content: center;
}
</style>