<template>
  <div class="dashboard">
    <h1>Welcome {{ user }}!</h1>
    <h2>Todays Routine:</h2>
    
    <div v-if="todaysExercises.length">
      <div v-for="e in todaysExercises" :key="e.name">
        <p>{{ e.name }} -> {{ e.sets }} sets | {{ e.reps }} reps @ {{ e.weight }}LBS</p>
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
    user: window.localStorage.getItem('user'),
    todaysExercises: []
  }),
  mounted: function(){
    this.todaysExercises = this.routine[getTodaysDate().dayIndex].exercises
  }
}
</script>

<style lang="scss" scoped></style>