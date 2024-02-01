<template>
  <p class="date">{{ today.month }} {{ today.dd }} | {{ today.year }}</p>
</template>

<script>
import { getTodaysDate } from '@/utils';
import { useRoutineStore } from '@/stores/routine';

export default {
  name: 'TodaysDate',
  data: () => ({
    today: getTodaysDate()
  }),
  mounted: function() {
    const exercises = useRoutineStore().exercises
  }
}

</script>

<style lang="scss" scoped>
.date {
  text-transform: capitalize;
}
</style>