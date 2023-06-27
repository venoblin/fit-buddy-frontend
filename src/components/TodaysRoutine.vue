<template>
  <div class="dashboard">
    <h1>Welcome {{ user }}!</h1>
    <h2>Here is your routine for today...</h2>
    
    <div v-if="todaysExercises.length">
      <DayExercise
      v-for="e in todaysExercises"
      :key="e.id"
      :exercise="e"
      :editMode="false"
      />
    </div>

    <div v-else>
      <p>Rest Day</p>
    </div>
  </div>
</template>

<script>
import { useRoutineStore } from '../stores/routine';
import { useUserStore } from '@/stores/user';
import { getTodaysDate } from '@/utils';
import DayExercise from './DayExercise.vue';

export default {
  name: 'TodaysRoutine',
  components: {
    DayExercise
  },
  data: () => ({
    routine: useRoutineStore().routineArr,
    user: useUserStore().user,
    todaysExercises: []
  }),
  mounted: function(){
    this.todaysExercises = this.routine[getTodaysDate().dayIndex].exercises
  }
}
</script>

<style lang="scss" scoped></style>