<template>
  <div class="week capitalize">
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

  .day {
    &:first-child {
      border-radius: 1rem 0 0 1rem;
    }
    &:last-child {
      border-radius: 0 1rem 1rem 0;
    }
  }
}
</style>