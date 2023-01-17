<template>
  <h1>{{ day }}</h1>

  <button @click="clickHandler">Add Exercises</button>
  <ExerciseFinder v-if="findMode" />
</template>

<script>
import ExerciseFinder from '../ExerciseFinder.vue';

export default {
  name: 'EditVue',
  components: {
    ExerciseFinder
  },
  data: () => ({
    day: null,
    findMode: false
  }),
  methods: {
    clickHandler() {
      this.findMode = !this.findMode
    }
  },
  mounted: function() {
    this.day = this.$route.params.day
  }
}
</script>

<style lang="scss" scoped></style>