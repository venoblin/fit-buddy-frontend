<template>
  <p class="date">{{ today.month }} {{ today.dd }} | {{ today.year }}</p>
</template>

<script>
import { getTodaysDate } from '@/utils';

export default {
  name: 'TodaysDate',
  data() {
    const today = getTodaysDate()

    return {
      today
    }
  }
}

</script>

<style lang="scss" scoped>
.date {
  text-transform: capitalize;
}
</style>