<template>
  <div class="week">
    <WeekDay v-for="day in routine" :key="day" :day="day" :isToday="day.name === todaysDay" />
  </div>

  <div class="dashboard">
    <div v-if="todaysExercises">
      <div v-for="e in todaysExercises" :key="e.name">
        <p>{{ e.name }}</p>
      </div>
    </div>

    <div v-else>
      <p>Rest Day</p>
    </div>
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
    todaysExercises: null
  }),
  mounted: function(){
    this.todaysExercises = this.routine[getTodaysDate().dayIndex].exercises
  }
}

</script>

<style lang="scss" scoped>
.week {
  display: flex;
  justify-content: center;
}
</style>