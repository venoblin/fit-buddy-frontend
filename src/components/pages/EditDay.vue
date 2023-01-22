<template>
  <h1>{{ day }}</h1>

  <div>
    <div v-if="daysExercises.length">
      <div v-for="e in daysExercises" :key="e.name">
        <p>{{ e.name }} -> {{ e.sets }} sets | {{ e.reps }} reps @ {{ e.weight }}LBS</p>

        <button @click="deleteExercise(e)">Delete</button>
      </div>
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
import ExerciseFinder from '../ExerciseFinder.vue';

export default {
  name: 'EditVue',
  components: {
    ExerciseFinder
  },
  data: () => ({
    day: null,
    routine: useRoutineStore().routineArr,
    daysExercises: []
  }),
  methods: {
    deleteExercise(e) {
      useRoutineStore().removeExercise(this.day, e)
    }
  },
  mounted: function() {
    this.day = this.$route.params.day
    this.daysExercises = this.routine[getIndexOfDay(this.$route.params.day)].exercises
  }
}
</script>

<style lang="scss" scoped></style>