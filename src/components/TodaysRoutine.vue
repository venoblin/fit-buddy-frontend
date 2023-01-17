<template>
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

export default {
  name: 'TodaysRoutine',
  data: () => ({
    routine: useRoutineStore().routineArr,
    todaysExercises: null
  }),
  mounted: function(){
    this.todaysExercises = this.routine[getTodaysDate().dayIndex].exercises
  }
}
</script>

<style lang="scss" scoped></style>