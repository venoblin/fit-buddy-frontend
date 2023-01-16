<template>
  <h1>{{ day }}</h1>
  <ExerciseFinder />
</template>

<script>
import ExerciseFinder from '../ExerciseFinder.vue';

export default {
  name: 'EditVue',
  components: {
    ExerciseFinder
  },
  data: () => ({
    day: null
  }),
  mounted: function() {
    this.day = this.$route.params.day
  }
}
</script>

<style lang="scss" scoped></style>