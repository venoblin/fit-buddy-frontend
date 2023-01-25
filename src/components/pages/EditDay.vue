<template>
  <RouterLink to="/">Home</RouterLink>
  
  <h1 class="capitalize">{{ day }}</h1>

  <div>
    <div v-if="daysExercises.length">
      <DayExercise
      v-for="e in daysExercises"
      :key="e.id"
      :exercise="e"
      :editMode="true"
      :deleteExercise="deleteExercise"
      :editExercise="editExercise"
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
    }
  },
  mounted: function() {
    this.day = this.$route.params.day
    this.getTodaysExercises()
  }
}
</script>

<style lang="scss" scoped></style>