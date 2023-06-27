<template>
  <h1>{{ `${user}'s` }} Profile</h1>
</template>

<script>
import { useUserStore } from '@/stores/user'

export default {
  name: 'UserProfile',
  data: () => ({
    user: useUserStore().user
  })
}
</script>

<style lang="scss" scoped></style>