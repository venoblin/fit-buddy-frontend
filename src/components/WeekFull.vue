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
@import '@/assets/styles/global.scss';
.week {
  max-width: 900px;
  margin: 0 auto;
  display: flex;

  .day {
    border-top: 1px solid $darkBlue;
    border-right: 1px solid $darkBlue;
    border-bottom: 1px solid $darkBlue;
    
    &:first-child {
      border-left: 1px solid $darkBlue;
      border-radius: 1rem 0 0 1rem;
    }
    &:last-child {
      border-radius: 0 1rem 1rem 0;
    }
  }
}

@media (max-width: 800px) {
  .week {
    overflow-x: scroll;
  }
}
</style>