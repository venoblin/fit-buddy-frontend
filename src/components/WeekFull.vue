<template>
  <div class="week">
    <WeekDay v-for="day in routine" :key="day" :day="day" />
  </div>
</template>

<script>
import { useRoutineStore } from '../stores/routine';

import WeekDay from './WeekDay.vue';

export default {
  name: 'WeekFull',
  components: {
    WeekDay
  },
  data: () => ({
    routine: useRoutineStore().routineArr
  })
}

</script>

<style lang="scss" scoped>
.week {
  display: flex;
  justify-content: center;
}
</style>