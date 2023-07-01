<template>  
  <h1 class="capitalize">{{ day }}</h1>

  <WorkOuts :exercises="daysExercises" :loadWorkout="loadWorkout" />

  <div class="exercises">
    <div v-if="daysExercises.length">
      <DayExercise
      v-for="e in daysExercises"
      :key="e.id"
      :exercise="e"
      :editMode="true"
      :deleteExercise="deleteExercise"
      :editExercise="editExercise"
      :day="day"
      />
    </div>

    <div v-else>
      <p>Rest Day</p>
    </div>

    <ExerciseFinder />
  </div>

</template>

<script>
import { storeToRefs } from 'pinia';
import { useRoutineStore } from '@/stores/routine';
import { getIndexOfDay } from '@/utils';
import WorkOuts from '../WorkOuts.vue';
import DayExercise from '../DayExercise.vue';
import ExerciseFinder from '../ExerciseFinder.vue';

export default {
  name: 'EditVue',
  components: {
    WorkOuts,
    DayExercise,
    ExerciseFinder
  },
  data: () => ({
    day: null,
    routine: storeToRefs(useRoutineStore()).routineArr,
    daysExercises: []
  }),
  methods: {
    getTodaysExercises() {
      this.daysExercises = this.routine[getIndexOfDay(this.$route.params.day)].exercises
    },
    deleteExercise(e) {
      useRoutineStore().removeExercise(this.$route.params.day, e)
      this.getTodaysExercises()
    },
    editExercise(e, update) {
      useRoutineStore().editExercise(this.$route.params.day, e, update)
      this.getTodaysExercises()
    },
    loadWorkout(workout) {
      useRoutineStore().replaceExercises(this.$route.params.day, workout.exercises)
      this.getTodaysExercises()
    }
  },
  mounted: function() {
    this.day = this.$route.params.day
    this.getTodaysExercises()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.exercises {
  border: 1px solid $grey;
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  width: fit-content;
  margin: 2rem auto 0 auto;

  .day-exercise:last-of-type {
    border-bottom: none;
  }
}
</style>