<template>
  <h1>{{ day }}</h1>

  <div>
    <div v-if="daysExercises.length">
      <DayExercise
      v-for="e in daysExercises"
      :key="e.id"
      :exercise="e"
      :editMode="true"
      />
    </div>

    <div v-else>
      <p>Rest Day</p>
    </div>
  </div>

  <ExerciseFinder />
</template>

<script>
import { useRoutineStore } from '@/stores/routine';
import { getIndexOfDay } from '@/utils';
import DayExercise from '../DayExercise.vue';
import ExerciseFinder from '../ExerciseFinder.vue';

export default {
  name: 'EditVue',
  components: {
    DayExercise,
    ExerciseFinder
  },
  data: () => ({
    day: null,
    routine: useRoutineStore().routineArr,
    daysExercises: []
  }),
  mounted: function() {
    this.day = this.$route.params.day
    this.daysExercises = this.routine[getIndexOfDay(this.$route.params.day)].exercises
  }
}
</script>

<style lang="scss" scoped></style>