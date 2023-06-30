<template>
  <div v-if="user">
    <TodaysDate />
    <WeekFull />
    <TodaysRoutine />
  </div>

  <div v-else>
    <EnterName />
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
import TodaysDate from '../TodaysDate.vue'
import WeekFull from '../WeekFull.vue'
import TodaysRoutine from '../TodaysRoutine.vue';
import EnterName from './EnterName.vue'

export default {
  name: 'HomePage',
  components: {
    TodaysDate,
    WeekFull,
    TodaysRoutine,
    EnterName
  },
  data: () => ({
    user: useUserStore().user
  })
}
</script>

<style lang="scss" scoped></style>