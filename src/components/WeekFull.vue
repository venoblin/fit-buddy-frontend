<template>
  <div class="week">
    <WeekDay v-for="day in days" :key="day" :day="day" />
  </div>
</template>

<script>
import WeekDay from './WeekDay.vue';
import { daysArr } from '@/utils';

export default {
  name: 'WeekFull',
  components: {
    WeekDay
  },
  data() {
    const days = daysArr

    return {
      days
    }
  }
}

</script>

<style lang="scss" scoped>
.week {
  display: flex;
  justify-content: center;
}
</style>